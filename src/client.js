import './resources/css/styles.css';
export default class Client {
  loadAds() {
    setTimeout(() => {
      // eslint-disable-next-line
      if (typeof _codefund !== 'undefined' && _codefund.serve) {
        // eslint-disable-next-line
        _codefund.serve();
      }
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, 10);
  }

  trackPageView() {
    const { ga } = window;
    if (typeof ga !== 'undefined' && ga) {
      ga('send', {
        hitType: 'pageview',
        page: window.location.pathname,
      });
    }
  }

  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise('InitAds', async () => {
      this.loadAds();
    });
    clientHandler.hooks.renderComplete.tap('InitTracking', () => {
      window.ga = window.ga || function () {
        (window.ga.q = window.ga.q || []).push(arguments);
      };
      window.ga.l = +new Date;
      window.ga('create', 'UA-108804791-1', 'auto');
      window.ga('send', 'pageview', window.location.pathname);
    });
    clientHandler.hooks.locationChange.tapPromise('ReInitAds', async () => {
      this.loadAds();
      this.trackPageView();
    });
  }
}
