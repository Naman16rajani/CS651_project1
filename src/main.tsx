import { StrictMode } from 'react'; // Enables additional checks and warnings in development mode
import { createRoot } from 'react-dom/client'; // React 18+ way to create the root
import App from './App.tsx'; // Main application component
import './index.css'; // Import global styles

// Mount the React app to the root element in the HTML file
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* Render the main App component inside StrictMode for better debugging */}
  </StrictMode>
);
