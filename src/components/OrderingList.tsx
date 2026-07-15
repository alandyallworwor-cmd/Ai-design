import { useState } from 'react';
import type { OrderItem } from '../types';
import { Button } from './Button';

interface OrderingListProps {
  items: OrderItem[];
  /** Correct order of item ids, used to colour items after checking. */
  correctOrder: string[];
  /** True once the player has checked their answer. */
  answered: boolean;
  /** Called with the player's chosen order when they press Check. */
  onCheck: (orderedIds: string[]) => void;
}

/**
 * Tap-to-order activity. The player taps items one at a time to build a
 * sequence; each tapped item shows its position number. This works with both
 * touch and keyboard (every item is a real button), which drag-and-drop does not.
 */
export function OrderingList({
  items,
  correctOrder,
  answered,
  onCheck,
}: OrderingListProps) {
  // The ids the player has picked so far, in the order they picked them.
  const [picked, setPicked] = useState<string[]>([]);

  function toggle(id: string) {
    if (answered) return;
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function undoLast() {
    setPicked((prev) => prev.slice(0, -1));
  }

  // Work out how to style each item once the answer is checked.
  function itemState(id: string): string {
    if (!answered) return picked.includes(id) ? 'order-item--picked' : '';
    const chosenIndex = picked.indexOf(id);
    const correctIndex = correctOrder.indexOf(id);
    return chosenIndex === correctIndex
      ? 'order-item--right'
      : 'order-item--wrong';
  }

  return (
    <div className="order">
      <ol className="order__list">
        {items.map((item) => {
          const position = picked.indexOf(item.id);
          return (
            <li key={item.id}>
              <button
                className={`order-item ${itemState(item.id)}`.trim()}
                onClick={() => toggle(item.id)}
                disabled={answered}
                aria-label={
                  position >= 0
                    ? `${item.text}. Position ${position + 1}. Tap to remove.`
                    : `${item.text}. Tap to add to the order.`
                }
              >
                <span className="order-item__badge" aria-hidden="true">
                  {position >= 0 ? position + 1 : ''}
                </span>
                <span className="order-item__text">{item.text}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {!answered && (
        <div className="order__actions">
          <Button
            variant="ghost"
            onClick={undoLast}
            disabled={picked.length === 0}
          >
            Undo last
          </Button>
          <Button
            variant="primary"
            onClick={() => onCheck(picked)}
            disabled={picked.length !== items.length}
          >
            Check order
          </Button>
        </div>
      )}
    </div>
  );
}
