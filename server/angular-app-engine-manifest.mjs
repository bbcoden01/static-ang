
export default {
  basePath: 'https://bbcoden01.github.io/static-ang',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
