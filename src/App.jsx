import { useAuth } from './lib/AuthContext'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'


export default function App() {
  const { user } = useAuth()

  if (user === undefined) return <p>Loading...</p>
  if (user === null) return <AuthPage /> 
  return <HomePage />
}