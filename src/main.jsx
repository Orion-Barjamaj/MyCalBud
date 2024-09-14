import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import GetStarted from './pages/GetStarted.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import CalorieCalculator from './pages/CaloriePage.jsx';
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'Calorie-Calculator',
    element: <GetStarted />,
  },
  {
    path: 'Daily-Calorie-Intake',
    element: <CalorieCalculator />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)