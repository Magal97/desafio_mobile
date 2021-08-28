import React, { createContext, useState, useContext, useEffect } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Toast from 'react-native-toast-message';

interface AuthContextData {
  user: FirebaseAuthTypes.User | null;
  readonly loading: boolean;
  defaultSignUpUser({
    email,
    password,
  }: SingUpCredentials): void;
  defaultSignIn({
    email,
    password,
  }: SingInCredentials): void;
}


interface SingInCredentials {
  email: string;
  password: string;
}

interface SingUpCredentials {
  password: string;
  email: string;
}

const firebaseConfig = {
  apiKey: 'AIzaSyBslpyhhG2MLBq6aPefoH_fXZHXFXyTI8A',
  authDomain: 'bycodersapp.firebaseapp.com',
  appId: '1:122503354261:android:bf1b73ef2abff94514489c',
  projectId: 'bycodersapp',
};


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    async function initializeAll() {
      await !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
    }
    initializeAll();
    firebase.auth().onAuthStateChanged((userState) => {
      console.log("userState", userState);
      setUser(userState);
      setLoading(false);
    });
  }, []);

  const defaultSignUpUser = async ({
    email,
    password,
  }: SingUpCredentials) => {
    try {
      const responseSignUp = await auth().createUserWithEmailAndPassword(email, password);

      console.log('res', responseSignUp);
    } catch (err) {
      console.log("defaultSignUpUser err:", err);

      if (err.code == "auth/email-already-in-use") {
        return Toast.show({
          text1: "Este E-mail já está sendo utilizado.",
          type: "error",
        });
      }

      return false;
    }
  };

  const defaultSignIn = async ({ email, password }: SingInCredentials) => {
    const response = await auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("erros", error.code);

        if (error.code === "auth/wrong-password") {
          Toast.show({
            text1: "E-mail ou senha inválido.",
            type: "error",
          });
        }

        if (error.code === "auth/user-not-found") {
          Toast.show({
            text1: "E-mail ou senha inválido.",
            type: "error",
          });
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        defaultSignUpUser,
        defaultSignIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used whitin an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
