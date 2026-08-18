import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the window scroll position on every route change.
 *
 * Without this, navigating from a link near the bottom of a long page
 * (e.g. the footer) lands the user at the same offset on the next page.
 * Renders nothing - must be mounted inside the Router.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' so a route change never animates a long scroll back up.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
