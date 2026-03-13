import type { ReactNode } from 'react';

interface VerbForms {
  past: string;
  pastParticiple: string;
  presentParticiple: string;
  thirdPerson: string;
}

export function highlightVerb(
  text: string,
  verb: string,
  knownForms?: VerbForms,
): ReactNode[] {
  const forms = knownForms
    ? getFormsFromKnown(verb, knownForms)
    : guessRegularForms(verb);

  const escaped = forms.map(f => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <mark key={match.index} className="verb-highlight">
        {match[0]}
      </mark>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function getFormsFromKnown(verb: string, forms: VerbForms): string[] {
  return [...new Set([
    verb,
    forms.past,
    forms.pastParticiple,
    forms.presentParticiple,
    forms.thirdPerson,
  ].filter(Boolean))];
}

function guessRegularForms(verb: string): string[] {
  const forms = [verb];

  if (verb.endsWith('e')) {
    forms.push(verb + 'd', verb + 's', verb.slice(0, -1) + 'ing');
  } else if (verb.endsWith('y') && !isVowel(verb[verb.length - 2])) {
    forms.push(verb.slice(0, -1) + 'ied', verb + 's', verb + 'ing');
  } else {
    forms.push(verb + 'ed', verb + 's', verb + 'ing');
    if (shouldDoubleConsonant(verb)) {
      const doubled = verb + verb[verb.length - 1];
      forms.push(doubled + 'ed', doubled + 'ing');
    }
  }

  return [...new Set(forms)];
}

function isVowel(char: string): boolean {
  return 'aeiou'.includes(char?.toLowerCase() ?? '');
}

function shouldDoubleConsonant(verb: string): boolean {
  if (verb.length < 3) return false;
  const last = verb[verb.length - 1];
  const secondLast = verb[verb.length - 2];
  const thirdLast = verb[verb.length - 3];
  return !isVowel(last) && isVowel(secondLast) && !isVowel(thirdLast);
}
