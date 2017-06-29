
const url = 'https://api.github.com/users/cklanac';

fetch(url)
  .then(response => {
    let res = response.json();
    return res;
  })
  .then(json => {
    console.log(json.login);
    console.log(json.followers)
  })
  .catch(err => {
    console.log(err);
  });
