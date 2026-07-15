// Shared types for the whole game.
// Keeping every question shape in one place makes the mission data easy to read.

/** A single tappable answer choice in a multiple-choice question. */
export interface Choice {
  id: string;
  text: string;
}

/**
 * "Select the correct answer" question.
 * The player taps one choice; `correctId` says which one is right.
 */
export interface SelectQuestion {
  kind: 'select';
  id: string;
  prompt: string;
  choices: Choice[];
  correctId: string;
  /** Shown after answering, in simple English, to explain why. */
  explanation: string;
}

/** One item the player has to place in the correct position. */
export interface OrderItem {
  id: string;
  text: string;
}

/**
 * "Put the steps in the correct order" question.
 * The player taps items one by one to build the sequence.
 */
export interface OrderQuestion {
  kind: 'order';
  id: string;
  prompt: string;
  items: OrderItem[];
  /** The item ids in the correct order. */
  correctOrder: string[];
  explanation: string;
}

/** Any question the game knows how to show. */
export type Question = SelectQuestion | OrderQuestion;

/** A mission is a short set of questions with a friendly title and icon. */
export interface Mission {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  questions: Question[];
}

/** What we remember about a mission the player has finished. */
export interface MissionResult {
  stars: number;
  correct: number;
  total: number;
}

/** Everything we save to localStorage. */
export interface Progress {
  xp: number;
  completed: Record<string, MissionResult>;
}
