import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config.js'

export async function createUserProfile(user) {
  if (!user) return

  const userRef = doc(db, 'users', user.uid)

  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email ?? '',
      name: user.displayName || user.email?.split('@')[0] || 'User',
      photoURL: user.photoURL ?? '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  }
}