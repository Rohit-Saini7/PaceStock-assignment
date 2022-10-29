import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBdSNKCH0dc2m864P_rDrGmyL3zaiRGlUk',
  authDomain: 'web-internship-assignment.firebaseapp.com',
  projectId: 'web-internship-assignment',
  storageBucket: 'web-internship-assignment.appspot.com',
  messagingSenderId: '500076193300',
  appId: '1:500076193300:web:fa5aefc4b397fcce7d6901',
  measurementId: 'G-4F27VQLHM1',
};
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
