interface Props {
  learnedCount: number;
  total: number;
}

export default function ProgressBar({ learnedCount, total }: Props) {
  const pct = Math.round((learnedCount / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-label">Learning Progress</span>
        <span className="progress-count">{learnedCount} / {total} words</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="progress-pct">{pct}%</div>
    </div>
  );
}
