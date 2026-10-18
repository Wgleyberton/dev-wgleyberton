import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Links de e-mail do Supabase (PKCE) voltam como /?next=/app/...&code=...
// Converte para a rota do HashRouter mantendo o ?code= para o SDK trocar pela sessão
const next = new URLSearchParams(window.location.search).get('next')
if (next?.startsWith('/app') && !window.location.hash) {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${next}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
