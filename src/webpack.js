export default class ProjectWebpack {
  apply(webpackHandler) {
    const babelCssRule = webpackHandler.getBabelCssRule();
    webpackHandler.hooks.beforeConfig.tap('AddWebpackSassLoader', (env, type, config) => {
      try {
        let conf = config;

        if (!Array.isArray(config)) {
          conf = [config];
        }
        conf.forEach((c) => {
          const moduleRules = c.module.rules;

          let cssRules = moduleRules.filter(rule => rule.test.test('.css'));
          if (!cssRules.length) {
            cssRules = babelCssRule();
          }

          cssRules.forEach((cssRule) => {
            // eslint-disable-next-line
            let {test, use,...others} = cssRule;
            const newUse = cssRule.use.slice(0);

            const postCSSLoader = cssRule.use.find(u => u.loader === 'postcss-loader');
            if (postCSSLoader) return false;

            newUse.push({
              loader: 'postcss-loader',
              options: {
                config: {
                  path: process.env.PROJECT_ROOT,
                },
              },
            });
            // eslint-disable-next-line
            return cssRule.use = newUse;
          });
        });
      } catch (ex) {
        // eslint-disable-next-line
        console.log(ex);
      }
    });
  }
}
