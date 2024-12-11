declare const responsiveVoice: {
    speak: (text: string, voice?: string, options?: any) => void;
    pause: () => void;
    resume: () => void;
    cancel: () => void;
  };