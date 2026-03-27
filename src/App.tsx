import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Support from './pages/Support';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
