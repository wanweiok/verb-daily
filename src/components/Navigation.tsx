interface Props {
  currentIndex: number;
  total: number;
  isToday: boolean;
  onPrev: () => void;
  onNext: () => void;
  onRandom: () => void;
  onToday: () => void;
}

export default function Navigation({
  currentIndex,
  total,
  isToday,
  onPrev,
  onNext,
  onRandom,
  onToday,
}: Props) {
  return (
    <nav className="navigation">
      <button className="nav-btn" onClick={onPrev} title="Previous verb">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span>Prev</span>
      </button>

      <div className="nav-center">
        <button className="nav-btn nav-btn-accent" onClick={onRandom} title="Random verb">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
            <line x1="4" y1="4" x2="9" y2="9" />
          </svg>
          <span>Random</span>
        </button>
        {!isToday && (
          <button className="nav-btn nav-btn-today" onClick={onToday} title="Back to today">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Today</span>
          </button>
        )}
      </div>

      <div className="nav-counter">{currentIndex + 1} / {total}</div>

      <button className="nav-btn" onClick={onNext} title="Next verb">
        <span>Next</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}
