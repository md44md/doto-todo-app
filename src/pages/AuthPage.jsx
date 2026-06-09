import { useState } from 'react'
import { auth } from '../lib/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

export default function AuthPage() {
  const [mode, setMode] = useState('signin')   // toggles between 'signin' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setError('')
    setLoading(true)
    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setError('')
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (err) {
      setError(friendlyError(err.code))
    }
  }

  return (
    <div>
      <h1>Doto Todo app</h1>

      {/* Google sign in */}
      <button onClick={handleGoogle}>Continue with Google</button>

      <p>or</p>

      {/* Email + password form */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Show error if any */}
      {error && <p>{error}</p>}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Sign in'}
      </button>

      {/* Toggle between sign in and sign up */}
      <p>
        {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError('') }}>
          {mode === 'signin' ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  )
}

function friendlyError(code) {
  const errors = {
    'auth/email-already-in-use': 'That email is already registered.',
    'auth/invalid-email': 'Please enter a valid email.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/popup-closed-by-user': 'Sign-in window was closed.',
  }
  return errors[code] || 'Something went wrong. Please try again.'
}