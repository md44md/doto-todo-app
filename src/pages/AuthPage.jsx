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
  <div className="auth-page">
    <div className="auth-card">
      <h1 className="app-header">Doto Todo app</h1>

      <button className="btn-google" onClick={handleGoogle}>
        Continue with Google
      </button>

      <div className="auth-divider">
        <span>or</span>
      </div>

      <div className="form">
        <div className="form-field">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Sign in'}
        </button>
      </div>

      <p className="auth-toggle">
        {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
        <button
          className="btn-link"
          onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError('') }}
        >
          {mode === 'signin' ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  </div>
)}

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