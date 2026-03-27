import { Outlet } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="container">
        <LanguageSwitcher />
        <Outlet />
      </div>
    </>
  );
}
