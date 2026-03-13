import { useState, useCallback, useEffect } from 'react';
import verbsData from '../data/verbs.json';
import type { VerbEntry } from '../types';

const verbs = verbsData as VerbEntry[];
const STORAGE_KEY = 'verb-daily-learned';

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getTodayIndex(): number {
  return getDayOfYear() % verbs.length;
}

function loadLearned(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return new Set(JSON.parse(raw) as number[]);
  } catch { /* ignore */ }
  return new Set();
}

function saveLearned(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useVerb() {
  const [currentIndex, setCurrentIndex] = useState(getTodayIndex);
  const [learned, setLearned] = useState<Set<number>>(loadLearned);

  const verb = verbs[currentIndex];
  const total = verbs.length;
  const todayIndex = getTodayIndex();

  useEffect(() => {
    const next = new Set(learned);
    next.add(currentIndex);
    setLearned(next);
    saveLearned(next);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex(i => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + total) % total);
  }, [total]);

  const goRandom = useCallback(() => {
    let next: number;
    do {
      next = Math.floor(Math.random() * total);
    } while (next === currentIndex && total > 1);
    setCurrentIndex(next);
  }, [currentIndex, total]);

  const goToday = useCallback(() => {
    setCurrentIndex(getTodayIndex());
  }, []);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < total) setCurrentIndex(index);
  }, [total]);

  return {
    verb,
    currentIndex,
    todayIndex,
    total,
    learnedCount: learned.size,
    learned,
    isToday: currentIndex === todayIndex,
    goNext,
    goPrev,
    goRandom,
    goToday,
    goTo,
  };
}
