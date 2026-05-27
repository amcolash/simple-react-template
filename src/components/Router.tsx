import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppPage } from 'pages/AppPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}
