import type { VerbEntry } from '../types';
import { enrichedData } from '../data/enriched-data';
import SpeakButton from './SpeakButton';

interface Props {
  verb: VerbEntry;
  isToday: boolean;
  speak: (text: string, id: string, rate?: number) => void;
  currentId: string | null;
}

export default function VerbCard({ verb, isToday, speak, currentId }: Props) {
  const enriched = enrichedData[verb.verb];

  return (
    <div className="verb-card">
      {isToday && <span className="today-badge">Today's Verb</span>}

      <div className="verb-header-row">
        <h1 className="verb-word">{verb.verb}</h1>
        <SpeakButton
          isPlaying={currentId === `word-${verb.verb}`}
          onClick={() => speak(verb.verb, `word-${verb.verb}`, 0.75)}
          size="md"
        />
      </div>
      <p className="verb-phonetic">{verb.phonetic}</p>

      {enriched && (
        <div className="pronunciation-section">
          <h4 className="pronunciation-title">🗣 发音拆解 Pronunciation</h4>
          <table className="pronunciation-table">
            <thead>
              <tr><th>音节</th><th>音标</th><th>近似音</th></tr>
            </thead>
            <tbody>
              {enriched.pronunciation.map((syl, i) => (
                <tr key={i} className={syl.stress ? 'pronunciation-stress' : ''}>
                  <td>{syl.stress ? <strong>{syl.s}</strong> : syl.s}</td>
                  <td>/{syl.ipa}/</td>
                  <td>{syl.stress ? <strong>{syl.zh}</strong> : syl.zh}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pronunciation-hint">
            重音在{enriched.pronunciation.findIndex(s => s.stress) + 1 > 0
              ? `第 ${enriched.pronunciation.findIndex(s => s.stress) + 1} 音节`
              : '第 1 音节'}：
            {enriched.pronunciation.map((syl, i) => (
              <span key={i}>{i > 0 ? '-' : ''}{syl.stress ? syl.s.toUpperCase() : syl.s}</span>
            ))}
          </div>
        </div>
      )}

      <div className="verb-meanings">
        {verb.meanings.map((m, i) => (
          <span key={i} className="meaning-tag">{m}</span>
        ))}
      </div>

      <div className="verb-forms">
        <div className="form-item">
          <span className="form-label">Past</span>
          <span className="form-value">{verb.forms.past}</span>
        </div>
        <div className="form-item">
          <span className="form-label">Past Participle</span>
          <span className="form-value">{verb.forms.pastParticiple}</span>
        </div>
        <div className="form-item">
          <span className="form-label">Present Participle</span>
          <span className="form-value">{verb.forms.presentParticiple}</span>
        </div>
        <div className="form-item">
          <span className="form-label">3rd Person</span>
          <span className="form-value">{verb.forms.thirdPerson}</span>
        </div>
        {enriched?.nounForm && (
          <div className="form-item">
            <span className="form-label">Noun</span>
            <span className="form-value">{enriched.nounForm}</span>
          </div>
        )}
        {enriched?.adjForm && (
          <div className="form-item">
            <span className="form-label">Adjective</span>
            <span className="form-value">{enriched.adjForm}</span>
          </div>
        )}
      </div>

      <div className="verb-examples">
        <div className="section-header-row">
          <h3>Examples</h3>
          <SpeakButton
            isPlaying={currentId === `examples-${verb.verb}`}
            onClick={() => speak(verb.examples.join('. '), `examples-${verb.verb}`)}
            size="sm"
          />
        </div>
        <ul>
          {verb.examples.map((ex, i) => (
            <li key={i}>
              <span className="example-text">{ex}</span>
              <SpeakButton
                isPlaying={currentId === `ex-${verb.verb}-${i}`}
                onClick={() => speak(ex, `ex-${verb.verb}-${i}`)}
                size="sm"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
