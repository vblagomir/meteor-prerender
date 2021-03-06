Package.describe({
  name: 'dferber:prerender',
  summary: 'Node wrapper for prerender',
  version: '2.2.2_3',
  git: 'https://github.com/dferber90/meteor-prerender',
});

Npm.depends({
  'prerender-node': '2.2.2',
});

Package.onUse(function packageConfiguration(api) {
  api.use(['templating'], 'client');
  api.use(['webapp'], 'server');
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('server/prerender.js', 'server');
  api.addFiles('client/prerender.html', 'client');
});
