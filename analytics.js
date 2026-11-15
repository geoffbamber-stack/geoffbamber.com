/* Google Analytics 4 with a consent bar.
   Nothing is loaded from Google, and no cookie is set, until a visitor accepts.
   The choice is remembered in localStorage and can be changed from the
   "Cookie preferences" link in the footer.
   TAG_ID is the Google tag container and GA_ID the GA4 measurement ID it
   reports to. Both come from Analytics > Admin > Data streams. Every page
   includes this file. */
(function () {
  var TAG_ID = 'GTM-5S2GHWW4';
  var GA_ID = 'G-6HG5FRV9HE';
  var KEY = 'gb-analytics-consent';

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  var loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;
    window['ga-disable-' + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(TAG_ID);
    document.head.appendChild(s);
  }

  function clearGACookies() {
    var names = document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); });
    var host = location.hostname;
    names.forEach(function (name) {
      if (name === '_ga' || name.indexOf('_ga_') === 0) {
        var expire = name + '=; Max-Age=0; path=/';
        document.cookie = expire;
        document.cookie = expire + '; domain=' + host;
        document.cookie = expire + '; domain=.' + host;
      }
    });
  }

  var bar = null;
  function hideBar() {
    if (bar) { bar.remove(); bar = null; }
  }
  function showBar() {
    if (bar) return;
    bar = document.createElement('div');
    bar.className = 'consent-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML =
      '<p>This site would like to use Google Analytics cookies to count visits. ' +
      'Nothing is set unless you accept.</p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="consent-btn" data-consent="denied">Decline</button>' +
      '<button type="button" class="consent-btn consent-btn-accept" data-consent="granted">Accept</button>' +
      '</div>';
    bar.addEventListener('click', function (e) {
      var choice = e.target && e.target.getAttribute('data-consent');
      if (!choice) return;
      save(choice);
      hideBar();
      if (choice === 'granted') {
        loadGA();
      } else {
        window['ga-disable-' + GA_ID] = true;
        clearGACookies();
      }
    });
    document.body.appendChild(bar);
  }

  function addPreferencesLink() {
    var foot = document.querySelector('.foot .social') || document.querySelector('.foot');
    if (!foot || foot.querySelector('.consent-link')) return;
    var link = document.createElement('button');
    link.type = 'button';
    link.className = 'consent-link';
    link.textContent = 'Cookie preferences';
    link.addEventListener('click', showBar);
    foot.appendChild(link);
  }

  function init() {
    addPreferencesLink();
    var choice = read();
    if (choice === 'granted') loadGA();
    else if (choice !== 'denied') showBar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
