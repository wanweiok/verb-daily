import type { VerbEntry } from '../types';
import { highlightVerb } from '../utils/highlight';
import { enrichedData } from '../data/enriched-data';
import SpeakButton from './SpeakButton';

interface Props {
  verb: VerbEntry;
  speak: (text: string, id: string, rate?: number) => void;
  currentId: string | null;
}

export default function PassageBlock({ verb, speak, currentId }: Props) {
  const { passage } = verb;
  const enriched = enrichedData[verb.verb];

  return (
    <div className="passage-wrapper">
      <blockquote className="passage-block">
        <div className="passage-header-row">
          <span className="passage-label">📜 Classic Passage · 经典段落</span>
          <SpeakButton
            isPlaying={currentId === `passage-${verb.verb}`}
            onClick={() => speak(passage.text, `passage-${verb.verb}`, 0.85)}
            size="md"
            label="Read"
          />
        </div>
        <p className="passage-text">
          &ldquo;{highlightVerb(passage.text, verb.verb, verb.forms)}&rdquo;
        </p>
        <footer className="passage-source">
          <span className="source-author">&mdash; {passage.source}</span>
          {passage.year && (
            <span className="source-year">
              {passage.year < 0 ? `${Math.abs(passage.year)} BC` : passage.year}
            </span>
          )}
        </footer>
      </blockquote>

      {enriched && (
        <div className="passage-enriched">
          <div className="passage-translation">
            <span className="passage-enriched-label">中文翻译</span>
            <p>{enriched.passageZh}</p>
          </div>
          <div className="passage-analysis">
            <span className="passage-enriched-label">💡 修辞分析</span>
            <p>{enriched.passageAnalysis}</p>
          </div>
        </div>
      )}
    </div>
  );
}
