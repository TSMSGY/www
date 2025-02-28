import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <div
        className="
              absolute inset-0 -z-10 opacity-5 
              bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
              bg-[size:6rem_4rem]
              bg-fixed" // Add this class
      />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
