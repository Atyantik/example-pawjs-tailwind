import React from 'react';
import FavIcon from './resources/img/favicon.ico';

export default class Server {
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tap('AddFontAwesomeIcons', (Application) => {
      Application.htmlProps.head.push(
        <script key="Font-Awesome Icons" async src="https://use.fontawesome.com/releases/v5.0.3/js/all.js" />,
        <link key="favicon" rel="shortcut icon" type="image/x-icon" href={FavIcon} />,
        <script key="addGoogleAnalytics" async src="https://www.google-analytics.com/analytics.js" />,
      );
      return Application;
    });
  }
}
