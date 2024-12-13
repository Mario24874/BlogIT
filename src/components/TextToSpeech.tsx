import React, { useState, useEffect } from 'react';

interface TextToSpeechProps {
  text: string; // El texto que se leerá
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState('Spanish Female'); // Voz predeterminada en español
  const [pitch, setPitch] = useState(1); // Tono de voz (1 es el valor predeterminado)
  const [rate, setRate] = useState(1); // Velocidad de lectura (1 es el valor predeterminado)

  // Función para iniciar o detener la lectura
  const handleSpeech = () => {
    if (isSpeaking) {
      responsiveVoice.cancel(); // Detener la lectura
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
          {isSpeaking ? 'Detener Lectura' : '¿Te lo leo?'}
        </button>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Spanish Female">Español Femenino</option>
          <option value="Spanish Male">Español Masculino</option>
          <option value="Spanish Latin American Female">Español Latino Femenino</option>
          <option value="Spanish Latin American Male">Español Latino Masculino</option>
        </select>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2">
          <span>Velocidad:</span>
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
          <span>Tono:</span>
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