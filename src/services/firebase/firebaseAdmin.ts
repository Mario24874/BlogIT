// src/services/firebase/firebaseAdmin.ts
import * as admin from 'firebase-admin';

// Verifica si la app ya está inicializada
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
      privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const messaging = admin.messaging();