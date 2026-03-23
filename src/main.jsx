import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/routes.jsx';
import { ThemProvider } from './Provider/ThemProvider.jsx';
import { AuthProvider } from './Provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemProvider>
  </StrictMode>
)
