interface Stats {
  total: number;
  mastered: number;
  due: number;
  favorites: number;
  last7: number[];
  streak: number;
}

interface Props {
  stats: Stats;
  totalVerbs: number;
}

export default function StatsPanel({ stats, totalVerbs }: Props) {
  const maxDaily = Math.max(...stats.last7, 1);
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayIdx = new Date().getDay();
  const reorderedLabels = Array.from({ length: 7 }, (_, i) => {
    const idx = (todayIdx - 6 + i + 7) % 7;
    return dayLabels[idx === 0 ? 6 : idx - 1];
  });

  return (
    <div className="stats-panel">
      <div className="stats-numbers">
        <div className="stats-item">
          <span className="stats-value">{stats.total}</span>
          <span className="stats-label">已学</span>
        </div>
        <div className="stats-item">
          <span className="stats-value">{stats.mastered}</span>
          <span className="stats-label">已掌握</span>
        </div>
        <div className="stats-item stats-due">
          <span className="stats-value">{stats.due}</span>
          <span className="stats-label">待复习</span>
        </div>
        <div className="stats-item">
          <span className="stats-value">{stats.favorites}</span>
          <span className="stats-label">收藏</span>
        </div>
        <div className="stats-item">
          <span className="stats-value">{stats.streak}d</span>
          <span className="stats-label">连续</span>
        </div>
      </div>

      <div className="stats-progress">
        <div className="stats-progress-bar">
          <div
            className="stats-progress-fill"
            style={{ width: `${(stats.total / totalVerbs) * 100}%` }}
          />
        </div>
        <span className="stats-progress-text">
          {stats.total} / {totalVerbs}
        </span>
      </div>

      <div className="stats-chart">
        <span className="stats-chart-title">最近 7 天</span>
        <div className="stats-bars">
          {stats.last7.map((count, i) => (
            <div key={i} className="stats-bar-col">
              <div className="stats-bar-wrapper">
                <div
                  className="stats-bar"
                  style={{ height: `${(count / maxDaily) * 100}%` }}
                />
              </div>
              <span className="stats-bar-label">{reorderedLabels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
