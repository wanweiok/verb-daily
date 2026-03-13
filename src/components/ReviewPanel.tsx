import type { ReviewGrade, StudyRecord } from '../hooks/useStudyRecord';

interface Props {
  verb: string;
  record: StudyRecord | undefined;
  onReview: (verb: string, grade: ReviewGrade) => void;
  onToggleFavorite: (verb: string) => void;
}

const GRADE_OPTIONS: { grade: ReviewGrade; label: string; emoji: string }[] = [
  { grade: 1, label: '完全忘记', emoji: '😵' },
  { grade: 2, label: '模糊', emoji: '😟' },
  { grade: 3, label: '犹豫', emoji: '🤔' },
  { grade: 4, label: '记得', emoji: '😊' },
  { grade: 5, label: '轻松', emoji: '🎯' },
];

function formatNextReview(nextReview: number): string {
  const diff = nextReview - Date.now();
  if (diff <= 0) return '现在';
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export default function ReviewPanel({ verb, record, onReview, onToggleFavorite }: Props) {
  const isDue = record ? record.nextReview <= Date.now() : true;
  const isFavorite = record?.favorite ?? false;

  return (
    <div className="review-panel">
      <div className="review-header">
        <span className="review-label">📝 Study Status</span>
        <button
          className={`review-fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(verb)}
          title={isFavorite ? '取消收藏' : '收藏'}
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      </div>

      {record && (
        <div className="review-status-row">
          <span className={`review-status-badge ${isDue ? 'due' : 'ok'}`}>
            {isDue ? '待复习' : `下次: ${formatNextReview(record.nextReview)}`}
          </span>
          <span className="review-count">
            已复习 {record.reviewCount} 次
          </span>
        </div>
      )}

      <div className="review-grades">
        <span className="review-grades-label">你记住了吗？</span>
        <div className="review-grade-btns">
          {GRADE_OPTIONS.map(({ grade, label, emoji }) => (
            <button
              key={grade}
              className="review-grade-btn"
              onClick={() => onReview(verb, grade)}
              title={label}
            >
              <span className="review-grade-emoji">{emoji}</span>
              <span className="review-grade-text">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
