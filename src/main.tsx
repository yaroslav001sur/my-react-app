import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import './assets/styles/normalize.css'
import './assets/styles/reset.css'
import './assets/styles/responsive.css'
<<<<<<< HEAD
import App from './App'
=======
import App from './App.tsx'
>>>>>>> d889c2923708192c984468de1f001272828abddd

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)