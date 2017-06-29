'use strict';

const lewig = fetch('https://api.github.com/users/lewi-g');
const mscottcam = fetch('https://api.github.com/users/mscottcam');
const daviddinnison = fetch('https://api.github.com/users/daviddinnison');


Promise.all([lewig, mscottcam, daviddinnison])
  .then(response => {
    if (!response.every(response => response.ok)) {
      return Promise.reject(response.statusText);
    }
    let results = response.map(stream => stream.json());
    return Promise.all(results);
  })
  .then(data => {
    let publicRepos = data.map(person => person.public_repos);
    console.log(publicRepos);
  })
  .catch(err => {
    console.error(err);
  });