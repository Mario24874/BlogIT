// src/services/firebase/sendNotification.ts
import { messaging } from './firebaseAdmin';

export const sendPushNotification = async (token: string, title: string, body: string) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    const response = await messaging.send(message);
    console.log('Notificación enviada correctamente:', response);
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
  }
};