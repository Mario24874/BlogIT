import React, { useState, useEffect } from 'react';
import { messaging } from '../services/firebase/firebase';
import { getToken, onMessage } from 'firebase/messaging';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
          });
          setToken(token);
          console.log('Notification token:', token);
          // Guarda el token en tu base de datos para usarlo más tarde
        } else {
          console.log('Notification permission denied');
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };

    requestNotificationPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Verifica si payload.notification existe y tiene las propiedades necesarias
      if (payload.notification && payload.notification.title && payload.notification.body) {
        new Notification(payload.notification.title, {
          body: payload.notification.body,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">¡Subscribe to receive notifications about news and new articles.!</h2>
        <p className="text-gray-600 mb-6">
        Would you like to receive notifications about news and new articles?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Not now
          </button>
          <button
            onClick={() => {
              console.log('Token:', token);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;