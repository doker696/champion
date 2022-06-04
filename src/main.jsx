import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Analysis from './pages/Analysis';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route index element={<Home />} />
            <Route path='events' element={<Events />} />
            <Route path='analysis' element={<Analysis />} />
          </Route>
          <Route path='*' element={<h1>Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
);
