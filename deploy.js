const ghpages = require('gh-pages');
const path = require('path');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/charluna/portfolio.git',
  dotfiles: true,
  git: 'git',
  depth: 1,
  singleBranch: true,
  push: true,
  message: 'Deploy React app to GitHub Pages'
};

ghpages.publish(path.join(__dirname, 'build'), options, function(err) {
  if (err) {
    console.error('Deployment error:', err);
  } else {
    console.log('Deployment successful!');
  }
}); 