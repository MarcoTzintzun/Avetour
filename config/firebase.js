import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth"; // Importa initializeAuth y getReactNativePersistence
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importa AsyncStorage si no lo has hecho

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
//const db = getFirestore(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { app, auth, db };
