interface Props {
  isPlaying: boolean;
  onClick: () => void;
  size?: 'sm' | 'md';
  label?: string;
}

export default function SpeakButton({ isPlaying, onClick, size = 'sm', label }: Props) {
  const dim = size === 'md' ? 22 : 16;

  return (
    <button
      className={`speak-btn speak-btn-${size} ${isPlaying ? 'speak-btn-active' : ''}`}
      onClick={onClick}
      title={isPlaying ? 'Stop' : (label ?? 'Read aloud')}
      aria-label={isPlaying ? 'Stop reading' : (label ?? 'Read aloud')}
    >
      {isPlaying ? (
        <svg width={dim} height={dim} viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="6" height="16" rx="1" />
          <rect x="14" y="4" width="6" height="16" rx="1" />
        </svg>
      ) : (
        <svg width={dim} height={dim} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
      {label && <span className="speak-btn-label">{label}</span>}
    </button>
  );
}
