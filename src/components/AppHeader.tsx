interface AppHeaderProps {
  xp: number;
  /** Optional back action; when set, a back button appears on the left. */
  onBack?: () => void;
}

/** The top bar of the game. Shows the title and the player's XP. */
export function AppHeader({ xp, onBack }: AppHeaderProps) {
  return (
    <header className="app-header">
      {onBack ? (
        <button className="app-header__back" onClick={onBack} aria-label="Go back">
          ‹
        </button>
      ) : (
        <span className="app-header__spacer" aria-hidden="true" />
      )}
      <span className="app-header__title">IT Quest</span>
      <span className="app-header__xp" aria-label={`${xp} experience points`}>
        ⭐ {xp} XP
      </span>
    </header>
  );
}
