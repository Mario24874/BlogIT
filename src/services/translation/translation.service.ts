import axios from 'axios';

export class TranslationService {
    private apiToken: string;
    private baseUrl = 'https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt';

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    async translate(text: string, targetLang: string = 'es'): Promise<string> {
        try {
            const response = await axios.post(
                this.baseUrl,
                {
                    inputs: text,
                    parameters: { target_language: targetLang }
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data && response.data[0]) {
                return response.data[0].translation_text;
            }
            throw new Error('Invalid translation response');
        } catch (error) {
            console.error('Translation error:', error);
            throw error;
        }
    }
}