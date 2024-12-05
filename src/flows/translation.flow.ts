import { addKeyword } from '@bot-whatsapp/bot';
import { TranslationService } from '../services/translation.service';
import { config } from '../config';

const translationService = new TranslationService(config.huggingFaceToken);

export const translationFlow = addKeyword('traducir:')
    .addAction(async (ctx, { flowDynamic }) => {
        const text = ctx.body.substring(9).trim();
        try {
            const translation = await translationService.translate(text);
            await flowDynamic(`Traducción: ${translation}`);
        } catch (error) {
            await flowDynamic('Lo siento, hubo un error con la traducción.');
        }
    });