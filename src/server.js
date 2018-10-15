import React from 'react';

export default class Server {
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tap('AddFontAwesomeIcons', (Application) => {
      Application.htmlProps.head.push(
        <script key="Font-Awesome Icons" async src="https://use.fontawesome.com/releases/v5.0.3/js/all.js" />,
      );
      return Application;
    });
  }
}
