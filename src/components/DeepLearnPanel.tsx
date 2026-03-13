import type { VerbEntry } from '../types';
import { deepData } from '../data/deep-data';
import { enrichedData } from '../data/enriched-data';
import type { DeepData } from '../data/deep-data';
import SpeakButton from './SpeakButton';

interface Props {
  verb: VerbEntry;
  speak: (text: string, id: string, rate?: number) => void;
  currentId: string | null;
}

export default function DeepLearnPanel({ verb, speak, currentId }: Props) {
  const data: DeepData | undefined = deepData[verb.verb];
  const enriched = enrichedData[verb.verb];

  if (!data) return null;

  return (
    <div className="deep-panel">
      {data.etymology && (
        <section className="deep-section">
          <h4 className="deep-section-title">📖 词根溯源 Etymology</h4>
          <div className="deep-etymology-box">
            <div className="deep-etymology-roots">{data.etymology.roots}</div>
            <div className="deep-etymology-origin">{data.etymology.origin}</div>
          </div>
          <div className="deep-etymology-mnemonic">{data.etymology.mnemonic}</div>
        </section>
      )}

      {data.cognates && data.cognates.length > 0 && (
        <section className="deep-section">
          <h4 className="deep-section-title">🌿 同根词族 Cognates</h4>
          <div className="deep-cognates">
            {data.cognates.map((c, i) => (
              <span key={i} className="deep-cognate-tag">
                <span className="deep-cognate-word">{c.word}</span>
                <span className="deep-cognate-meaning">{c.meaning}</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {data.layers && data.layers.length > 0 && (
        <section className="deep-section">
          <h4 className="deep-section-title">🎯 三层释义 Layered Meanings</h4>
          <div className="deep-layers">
            {data.layers.map((l, i) => (
              <div key={i} className="deep-layer-row">
                <span className="deep-layer-label">{l.level}</span>
                <div className="deep-layer-content">
                  <div className="deep-layer-meaning">{l.meaning}</div>
                  <div className="deep-layer-example">
                    {l.example}
                    <SpeakButton
                      isPlaying={currentId === `layer-${verb.verb}-${i}`}
                      onClick={() => speak(l.example, `layer-${verb.verb}-${i}`)}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.collocations && data.collocations.length > 0 && (
        <section className="deep-section">
          <h4 className="deep-section-title">🔗 常用搭配 Collocations</h4>
          <table className="deep-table">
            <thead>
              <tr><th>搭配</th><th>例句</th></tr>
            </thead>
            <tbody>
              {data.collocations.map((c, i) => (
                <tr key={i}>
                  <td>{c.pattern}</td>
                  <td>{c.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {data.synonyms && data.synonyms.length > 0 && (
        <section className="deep-section">
          <h4 className="deep-section-title">⚖️ 近义词辨析 Synonyms</h4>
          <table className="deep-table">
            <thead>
              <tr><th>词</th><th>差异</th><th>语体</th></tr>
            </thead>
            <tbody>
              {data.synonyms.map((s, i) => (
                <tr key={i}>
                  <td>{s.word}</td>
                  <td>{s.nuance}</td>
                  <td>{s.formality}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {enriched?.synonymSentence && (
            <div className="deep-synonym-sentence">
              <span className="deep-synonym-sentence-label">一句话感受差异：</span>
              <p className="deep-synonym-sentence-text">{enriched.synonymSentence}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
