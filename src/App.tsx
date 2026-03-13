import { useState, useEffect, useCallback } from 'react';
import { useVerb } from './hooks/useVerb';
import { useSpeech } from './hooks/useSpeech';
import { useStudyRecord } from './hooks/useStudyRecord';
import VerbCard from './components/VerbCard';
import PassageBlock from './components/PassageBlock';
import DeepLearnPanel from './components/DeepLearnPanel';
import ReviewPanel from './components/ReviewPanel';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import ThemeToggle from './components/ThemeToggle';
import WordIndex from './components/WordIndex';
import StatsPanel from './components/StatsPanel';

type Page = 'home' | 'index';

function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('verb-daily-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [page, setPage] = useState<Page>('home');

  const {
    verb,
    currentIndex,
    total,
    learnedCount,
    learned,
    isToday,
    goNext,
    goPrev,
    goRandom,
    goToday,
    goTo,
  } = useVerb();

  const study = useStudyRecord();

  const { speak, stop, currentId } = useSpeech();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('verb-daily-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    stop();
    study.markSeen(verb.verb);
  }, [currentIndex, stop, verb.verb, study]);

  const handleSelectFromIndex = useCallback((index: number) => {
    goTo(index);
    setPage('home');
  }, [goTo]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
    if (page === 'home') {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'r' || e.key === 'R') goRandom();
      else if (e.key === 't' || e.key === 'T') goToday();
    }
    if (e.key === 'Escape' && page !== 'home') setPage('home');
  }, [page, goPrev, goNext, goRandom, goToday]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h2 className="app-title">Daily English Verb</h2>
          <span className="app-subtitle">One verb a day, wisdom on the way</span>
        </div>
        <div className="header-right">
          <button
            className={`nav-page-btn ${page === 'index' ? 'active' : ''}`}
            onClick={() => setPage(p => p === 'index' ? 'home' : 'index')}
            title={page === 'index' ? '返回首页' : '词表索引'}
          >
            {page === 'index' ? '🏠' : '📖'}
          </button>
          <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
        </div>
      </header>

      <main className="app-main">
        {page === 'home' ? (
          <div className="card-container" key={currentIndex}>
            <VerbCard verb={verb} isToday={isToday} speak={speak} currentId={currentId} />
            <ReviewPanel
              verb={verb.verb}
              record={study.getRecord(verb.verb)}
              onReview={study.review}
              onToggleFavorite={study.toggleFavorite}
            />
            <DeepLearnPanel verb={verb} speak={speak} currentId={currentId} />
            <PassageBlock verb={verb} speak={speak} currentId={currentId} />
          </div>
        ) : (
          <>
            <StatsPanel stats={study.getStats()} totalVerbs={total} />
            <WordIndex
              learned={learned}
              records={study.records}
              onSelect={handleSelectFromIndex}
            />
          </>
        )}
      </main>

      {page === 'home' && (
        <footer className="app-footer">
          <ProgressBar learnedCount={learnedCount} total={total} />
          <Navigation
            currentIndex={currentIndex}
            total={total}
            isToday={isToday}
            onPrev={goPrev}
            onNext={goNext}
            onRandom={goRandom}
            onToday={goToday}
          />
          <p className="keyboard-hint">
            Keyboard: ← → navigate &middot; R random &middot; T today
          </p>
        </footer>
      )}
    </div>
  );
}

export default App;
