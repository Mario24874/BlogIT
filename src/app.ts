import makeWASocket, { DisconnectReason } from '@adiwajshing/baileys';
import { Boom } from '@hapi/boom';
import { TranslationService } from './services/translation/translation';
import * as dotenv from 'dotenv';

dotenv.config();

async function connectToWhatsApp() {
    const sock = makeWASocket({
        printQRInTerminal: true
    });

    const translationService = new TranslationService(process.env.HUGGINGFACE_TOKEN || '');

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        }
    });

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const message = messages[0];
        if (!message.key.fromMe && message.message) {
            const text = message.message.conversation || '';
            
            if (text.toLowerCase().startsWith('hola')) {
                await sock.sendMessage(message.key.remoteJid!, {
                    text: '👋 ¡Hola! Soy tu asistente virtual. Puedo ayudarte con:\n1. Traducir textos (usa "traducir: texto")\n2. Responder preguntas generales'
                });
            } else if (text.toLowerCase().startsWith('traducir:')) {
                const textToTranslate = text.substring(9).trim();
                try {
                    const translation = await translationService.translate(textToTranslate);
                    await sock.sendMessage(message.key.remoteJid!, {
                        text: `Traducción: ${translation}`
                    });
                } catch (error) {
                    await sock.sendMessage(message.key.remoteJid!, {
                        text: 'Lo siento, hubo un error con la traducción.'
                    });
                }
            }
        }
    });
}

connectToWhatsApp();