fetch('https://api.github.com/users/leeCarter25/events',{headers: {'Authorization': 'GITHUB_TOKEN'}}).then(resp => resp.json()).then(data => console.log(data));


(() => {
const lastCommit = (username) => {
 fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'GITHUB_TOKEN'}}).then(resp => resp.json()).then
 (data => {
  // console.log(data)
  const commit = data.filter(event => event.type === 'PushEvent');
  console.log(`${username} had their last commit on ${commit[0].created_at}. `)
 });
}

lastCommit('leeCarter25');


const wait = ms => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (!isNaN(parseInt(ms))) {
    resolve(`You'll see this after ${ms/1000} second(s).`);
   } else {
    reject(`Failure to include proper numeric input.`)
   }
  }, ms);
 });
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));

})();
