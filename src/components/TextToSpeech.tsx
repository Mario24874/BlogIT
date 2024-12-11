import React, { useState, useEffect } from 'react';

interface TextToSpeechProps {
  text: string; 
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState('UK English Female'); 
  const [pitch, setPitch] = useState(1); 
  const [rate, setRate] = useState(1); 

  // Función para iniciar o detener la lectura
  const handleSpeech = () => {
    if (isSpeaking) {
      responsiveVoice.cancel(); 
      setIsSpeaking(false);
    } else {
      responsiveVoice.speak(text, voice, { pitch, rate });
      setIsSpeaking(true);
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleSpeech}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isSpeaking ? 'Stop Reading' : 'Shall I read it for you?'}
        </button>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="UK English Female">UK English Female</option>
          <option value="UK English Male">UK English Male</option>
          <option value="Spanish Female">Spanish Female</option>
          <option value="Spanish Male">Spanish Male</option>
        </select>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2">
          <span>Speed:</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-24"
          />
          <span>{rate.toFixed(1)}x</span>
        </label>
        <label className="flex items-center space-x-2">
          <span>Pitch:</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-24"
          />
          <span>{pitch.toFixed(1)}x</span>
        </label>
      </div>
    </div>
  );
};

export default TextToSpeech;