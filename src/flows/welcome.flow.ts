import { addKeyword } from '@bot-whatsapp/bot';

export const welcomeFlow = addKeyword(['hola', 'hi', 'hello'])
    .addAnswer('👋 ¡Hola! Soy tu asistente virtual. Puedo ayudarte con:')
    .addAnswer('1. Traducir textos (usa "traducir: texto")')
    .addAnswer('2. Responder preguntas generales');