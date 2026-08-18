// Small array-shuffling helpers.
// Used to randomise the order answers appear in, so the correct choice is not
// always in the same position (e.g. always first).

/** Fisher–Yates shuffle. Returns a new array; the input is left untouched. */
export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Shuffle the items of an ordering question so the starting layout is not
 * already the correct sequence (which would give the answer away). Retries a
 * few times, then falls back to rotating by one so the result always differs
 * from the correct order.
 */
export function shuffleForOrdering<T extends { id: string }>(
  items: T[],
  correctOrder: string[],
): T[] {
  if (items.length < 2) return [...items];
  for (let attempt = 0; attempt < 8; attempt++) {
    const shuffled = shuffle(items);
    const matchesCorrect = shuffled.every((item, i) => item.id === correctOrder[i]);
    if (!matchesCorrect) return shuffled;
  }
  // Extremely unlikely to reach here: rotate by one to guarantee a difference.
  return [...items.slice(1), items[0]];
}
