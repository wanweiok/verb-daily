import { useState, useMemo } from 'react';
import verbsData from '../data/verbs.json';
import type { VerbEntry } from '../types';
import type { StudyRecord } from '../hooks/useStudyRecord';

const verbs = verbsData as VerbEntry[];

type Filter = 'all' | 'learned' | 'unlearned' | 'favorite' | 'due';
type Sort = 'alpha' | 'index';

interface Props {
  learned: Set<number>;
  records: Record<string, StudyRecord>;
  onSelect: (index: number) => void;
}

export default function WordIndex({ learned, records, onSelect }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('alpha');

  const indexed = useMemo(() =>
    verbs.map((v, i) => ({ verb: v, index: i })),
    [],
  );

  const filtered = useMemo(() => {
    let list = indexed;

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(({ verb }) =>
        verb.verb.toLowerCase().includes(q) ||
        verb.meanings.some(m => m.toLowerCase().includes(q)),
      );
    }

    if (filter === 'learned') {
      list = list.filter(({ index }) => learned.has(index));
    } else if (filter === 'unlearned') {
      list = list.filter(({ index }) => !learned.has(index));
    } else if (filter === 'favorite') {
      list = list.filter(({ verb }) => records[verb.verb]?.favorite);
    } else if (filter === 'due') {
      const now = Date.now();
      list = list.filter(({ verb }) => {
        const r = records[verb.verb];
        return r && r.nextReview <= now;
      });
    }

    if (sort === 'alpha') {
      list = [...list].sort((a, b) => a.verb.verb.localeCompare(b.verb.verb));
    }

    return list;
  }, [indexed, query, filter, sort, learned, records]);

  return (
    <div className="word-index">
      <div className="word-index-header">
        <h2 className="word-index-title">📖 Word Index</h2>
        <span className="word-index-count">
          {filtered.length} / {verbs.length}
        </span>
      </div>

      <div className="word-index-controls">
        <input
          className="word-index-search"
          type="text"
          placeholder="Search verb or meaning..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="word-index-filters">
          {([
            ['all', '全部'],
            ['learned', '已学'],
            ['unlearned', '未学'],
            ['favorite', '⭐ 收藏'],
            ['due', '📝 待复习'],
          ] as [Filter, string][]).map(([f, label]) => (
            <button
              key={f}
              className={`word-index-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {label}
            </button>
          ))}
          <button
            className="word-index-sort-btn"
            onClick={() => setSort(s => s === 'alpha' ? 'index' : 'alpha')}
            title={sort === 'alpha' ? '按字母排序' : '按编号排序'}
          >
            {sort === 'alpha' ? 'A→Z' : '#'}
          </button>
        </div>
      </div>

      <div className="word-index-grid">
        {filtered.map(({ verb, index }) => (
          <button
            key={verb.verb}
            className={`word-index-card ${learned.has(index) ? 'learned' : ''}`}
            onClick={() => onSelect(index)}
          >
            <span className="word-index-card-verb">{verb.verb}</span>
            <span className="word-index-card-phonetic">{verb.phonetic}</span>
            <span className="word-index-card-meaning">
              {verb.meanings[0]?.replace(/^(vt\.|vi\.|v\.) ?/, '')}
            </span>
            {records[verb.verb]?.favorite && (
              <span className="word-index-card-fav">⭐</span>
            )}
            {learned.has(index) && (
              <span className="word-index-card-badge">✓</span>
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="word-index-empty">No matching verbs found.</p>
        )}
      </div>
    </div>
  );
}
