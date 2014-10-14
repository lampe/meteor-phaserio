Package.describe({
  name: 'lampe:phaserio',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('lampe:phaserio.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lampe:phaserio');
  api.addFiles('lampe:phaserio-tests.js');
});
