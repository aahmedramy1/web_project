import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WebResult from './Pages/WebResult';
import { QueryClient, QueryClientProvider } from 'react-query'
import ImagesResult from './Pages/ImagesResult';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/images",
    element: <App isImage={true} />
  },
  {
    path: "/web/:query",
    element: <WebResult />
  },
  {
    path: "/images/:query",
    element: <ImagesResult />
  }

]);

const queryClient = new QueryClient()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);