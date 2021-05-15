import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'Dogehouse',
  repo: 'fuwwy/moonstone',
  defaultTag: 'main',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});
