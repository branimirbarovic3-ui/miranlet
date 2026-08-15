/**
 * Meta Pixel Privacy-Compliant Manager
 * Pixel ID: 4543408365938248
 * Only loads and fires events if the user has given consent for marketing cookies.
 */

const PIXEL_ID = '4543408365938248';
let isInitialized = false;

export const initMetaPixel = () => {
  if (typeof window === 'undefined' || isInitialized) return;

  const consent = localStorage.getItem('miranlet_cookie_consent');
  if (consent !== 'accepted' && consent !== 'custom_marketing') {
    return;
  }

  // Standard Meta Pixel initialization script
  /* eslint-disable */
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  if (window.fbq) {
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    isInitialized = true;
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq && isInitialized) {
    window.fbq('track', 'PageView');
  }
};

export const trackViewContent = (data = {}) => {
  if (typeof window !== 'undefined' && window.fbq && isInitialized) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Miran Let Digitalni Protokol',
      content_category: 'Digital Guide and Audio',
      content_ids: ['miran-let-1999'],
      currency: 'EUR',
      value: 19.99,
      ...data
    });
  }
};

export const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq && isInitialized) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Miran Let Digitalni Protokol',
      currency: 'EUR',
      value: 19.99
    });
  }
};
