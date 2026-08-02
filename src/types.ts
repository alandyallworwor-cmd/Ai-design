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

/** One term-and-meaning pair the player has to match up. */
export interface MatchPair {
  id: string;
  term: string;
  meaning: string;
}

/**
 * "Match the term to its meaning" activity.
 * The player taps a term, then taps the meaning that goes with it.
 */
export interface MatchQuestion {
  kind: 'match';
  id: string;
  prompt: string;
  pairs: MatchPair[];
  explanation: string;
}

/** Any question the game knows how to show. */
export type Question = SelectQuestion | OrderQuestion | MatchQuestion;

/** A mission is a short set of questions with a friendly title and icon. */
export interface Mission {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  /**
   * Which section this mission belongs to (used to group the map).
   * Weeks 1-3 are the study weeks; 4 is the end-of-course Exam Revision.
   */
  week: 1 | 2 | 3 | 4;
  /** Plain-English topic name, used for revision tips on the results screen. */
  topic: string;
  questions: Question[];
}

/**
 * How the player is playing:
 * - "challenge": answers are scored and progress is saved.
 * - "study": relaxed practice; nothing is scored or saved.
 * - "timed": scored like challenge, but each question has a countdown and
 *   fast correct answers earn bonus XP.
 */
export type GameMode = 'challenge' | 'study' | 'timed';

/** What we remember about a mission the player has finished. */
export interface MissionResult {
  stars: number;
  correct: number;
  total: number;
  /** Speed-bonus XP earned this run (timed mode only). Absent otherwise. */
  bonusXp?: number;
  /**
   * Total XP already granted for this mission (base + bonus). Stored so a
   * replay only ever earns the improvement, never the same XP twice.
   */
  xpAwarded?: number;
  /**
   * Longest run of consecutive correct answers during this attempt. Used only
   * to update the player's best streak; not stored on the saved result.
   */
  runStreak?: number;
}

/** Everything we save to localStorage. */
export interface Progress {
  xp: number;
  completed: Record<string, MissionResult>;
  /** Longest run of consecutive correct answers the player has ever reached. */
  bestStreak: number;
  /** Ids of achievement badges the player has earned. */
  badges: string[];
}
