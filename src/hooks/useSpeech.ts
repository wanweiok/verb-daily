import { useState, useCallback, useEffect, useRef } from 'react';

const PREFERRED_VOICES = ['Google US English', 'Google UK English Female', 'Microsoft Zira', 'Samantha', 'Alex'];

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const english = voices.filter(v => v.lang.startsWith('en'));
  for (const name of PREFERRED_VOICES) {
    const found = english.find(v => v.name.includes(name));
    if (found) return found;
  }
  return english[0] ?? voices[0];
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | undefined>(undefined);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (!supported) return;
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) voiceRef.current = pickVoice(voices);
    };
    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, [supported]);

  const speak = useCallback((text: string, id: string, rate = 0.9) => {
    if (!supported) return;

    if (speaking && currentId === id) {
      speechSynthesis.cancel();
      setSpeaking(false);
      setCurrentId(null);
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    if (voiceRef.current) utterance.voice = voiceRef.current;

    utterance.onstart = () => {
      setSpeaking(true);
      setCurrentId(id);
    };
    utterance.onend = () => {
      setSpeaking(false);
      setCurrentId(null);
    };
    utterance.onerror = () => {
      setSpeaking(false);
      setCurrentId(null);
    };

    speechSynthesis.speak(utterance);
  }, [supported, speaking, currentId]);

  const stop = useCallback(() => {
    if (!supported) return;
    speechSynthesis.cancel();
    setSpeaking(false);
    setCurrentId(null);
  }, [supported]);

  return { speak, stop, speaking, currentId, supported };
}
