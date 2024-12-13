import { useEffect, useState } from 'react';
import { auth, provider } from '../../services/firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { User } from '../../types'; 

const Auth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-4">
      {user ? (
        <div>
          <p className="text-gray-800">Bienvenido, {user.displayName}</p>
          <button onClick={handleSignOut} className="mt-2 px-4 py-2 bg-red-600 text-white rounded">
          Cerrar sesión
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
};

export default Auth;