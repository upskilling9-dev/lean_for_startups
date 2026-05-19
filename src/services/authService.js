import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase/config.js'
const googleProvider = new GoogleAuthProvider()

export function mapFirebaseUser(firebaseUser) {
  if (!firebaseUser) return null

  const email = firebaseUser.email ?? ''
  return {
    uid: firebaseUser.uid,
    email,
    name: firebaseUser.displayName || email.split('@')[0] || 'User',
    emailVerified: firebaseUser.emailVerified,
  }
}

export function signUpWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signInWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signOutUser() {
  return signOut(auth)
}

export function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider)
}

export function getAuthErrorMessage(error) {
  const messages = {
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/operation-not-allowed': 'Email/password sign-in is not enabled for this project.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
  }

  return messages[error?.code] ?? error?.message ?? 'Something went wrong. Please try again.'
}
