import { useState, useCallback } from 'react';

export interface StudyRecord {
  firstSeen: number;
  lastReviewed: number;
  reviewCount: number;
  ease: number;
  interval: number;
  nextReview: number;
  favorite: boolean;
}

export type ReviewGrade = 1 | 2 | 3 | 4 | 5;

const STORAGE_KEY = 'verb-daily-study-records';
const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

function loadRecords(): Record<string, StudyRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return {};
}

function saveRecords(records: Record<string, StudyRecord>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function sm2(record: StudyRecord, grade: ReviewGrade): Partial<StudyRecord> {
  const now = Date.now();
  let { ease, interval, reviewCount } = record;

  if (grade < 3) {
    interval = 1;
    reviewCount = 0;
  } else {
    if (reviewCount === 0) {
      interval = 1;
    } else if (reviewCount === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
    reviewCount += 1;
  }

  ease = ease + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  if (ease < MIN_EASE) ease = MIN_EASE;

  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return { ease, interval, reviewCount, lastReviewed: now, nextReview };
}

export function useStudyRecord() {
  const [records, setRecords] = useState<Record<string, StudyRecord>>(loadRecords);

  const getRecord = useCallback((verb: string): StudyRecord | undefined => {
    return records[verb];
  }, [records]);

  const markSeen = useCallback((verb: string) => {
    setRecords(prev => {
      if (prev[verb]) return prev;
      const now = Date.now();
      const next = {
        ...prev,
        [verb]: {
          firstSeen: now,
          lastReviewed: now,
          reviewCount: 0,
          ease: DEFAULT_EASE,
          interval: 1,
          nextReview: now + 24 * 60 * 60 * 1000,
          favorite: false,
        },
      };
      saveRecords(next);
      return next;
    });
  }, []);

  const review = useCallback((verb: string, grade: ReviewGrade) => {
    setRecords(prev => {
      const existing = prev[verb];
      if (!existing) return prev;
      const updates = sm2(existing, grade);
      const next = { ...prev, [verb]: { ...existing, ...updates } };
      saveRecords(next);
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((verb: string) => {
    setRecords(prev => {
      const existing = prev[verb];
      if (!existing) {
        const now = Date.now();
        const next = {
          ...prev,
          [verb]: {
            firstSeen: now,
            lastReviewed: now,
            reviewCount: 0,
            ease: DEFAULT_EASE,
            interval: 1,
            nextReview: now + 24 * 60 * 60 * 1000,
            favorite: true,
          },
        };
        saveRecords(next);
        return next;
      }
      const next = { ...prev, [verb]: { ...existing, favorite: !existing.favorite } };
      saveRecords(next);
      return next;
    });
  }, []);

  const getDueVerbs = useCallback((): string[] => {
    const now = Date.now();
    return Object.entries(records)
      .filter(([, r]) => r.nextReview <= now)
      .sort(([, a], [, b]) => a.nextReview - b.nextReview)
      .map(([verb]) => verb);
  }, [records]);

  const getFavorites = useCallback((): string[] => {
    return Object.entries(records)
      .filter(([, r]) => r.favorite)
      .map(([verb]) => verb);
  }, [records]);

  const getStats = useCallback(() => {
    const now = Date.now();
    const entries = Object.values(records);
    const total = entries.length;
    const mastered = entries.filter(r => r.reviewCount >= 3 && r.nextReview > now).length;
    const due = entries.filter(r => r.nextReview <= now).length;
    const favorites = entries.filter(r => r.favorite).length;

    const dayMs = 24 * 60 * 60 * 1000;
    const last7 = Array.from({ length: 7 }, (_, i) => {
      const dayStart = new Date();
      dayStart.setHours(0, 0, 0, 0);
      const start = dayStart.getTime() - (6 - i) * dayMs;
      const end = start + dayMs;
      return entries.filter(r => r.lastReviewed >= start && r.lastReviewed < end).length;
    });

    const streakKey = 'verb-daily-streak';
    let streak = 0;
    try {
      const saved = JSON.parse(localStorage.getItem(streakKey) || '{}');
      const today = new Date().toDateString();
      if (saved.date === today) {
        streak = saved.count;
      } else if (saved.date === new Date(Date.now() - dayMs).toDateString()) {
        streak = saved.count + 1;
        localStorage.setItem(streakKey, JSON.stringify({ date: today, count: streak }));
      } else {
        streak = 1;
        localStorage.setItem(streakKey, JSON.stringify({ date: today, count: 1 }));
      }
    } catch { streak = 0; }

    return { total, mastered, due, favorites, last7, streak };
  }, [records]);

  return {
    records,
    getRecord,
    markSeen,
    review,
    toggleFavorite,
    getDueVerbs,
    getFavorites,
    getStats,
  };
}
