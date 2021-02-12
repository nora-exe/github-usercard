/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// install axios with npm install axios

import axios from 'axios'

// check & log data

/*
const dataCheck = axios.get(`https://api.github.com/users/nora-exe`)

console.log(dataCheck);
*/

const followersArray = ['tetondan',  'dustinmyers',  'justsml',  'luishrd',  'bigknell'];

axios
.get(`https://api.github.com/users/nora-exe`)
.then(res => {
  console.log(res);
  document.querySelector('.cards').appendChild(profileMaker(res.data));
})
.catch(err => {
  console.log(err, 'Uh-oh, you found an error!');
})
.then(() => {
  followersArray.forEach(user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(res => {
    console.log(res);
    document.querySelector('.cards').appendChild(profileMaker(res.data));
  })
  .catch(err => {
    console.log(err, 'Uh-oh, you found an error!');
  })
  .then(() => {
    console.log('Success.');
})
})

  console.log('Success.');
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

  // DATA

  avatar_url: "https://avatars.githubusercontent.com/u/34663084?v=4"
  bio: "Student (Web Development)"
  blog: ""
  company: null
  created_at: "2017-12-18T21:26:33Z"
  email: null
  events_url: "https://api.github.com/users/nora-exe/events{/privacy}"
  followers: 0
  followers_url: "https://api.github.com/users/nora-exe/followers"
  following: 0
  following_url: "https://api.github.com/users/nora-exe/following{/other_user}"
  gists_url: "https://api.github.com/users/nora-exe/gists{/gist_id}"
  gravatar_id: ""
  hireable: null
  html_url: "https://github.com/nora-exe"
  id: 34663084
  location: "Wisconsin, United States"
  login: "nora-exe"
  name: "Nora"
  node_id: "MDQ6VXNlcjM0NjYzMDg0"
  organizations_url: "https://api.github.com/users/nora-exe/orgs"
  public_gists: 0
  public_repos: 18
  received_events_url: "https://api.github.com/users/nora-exe/received_events"
  repos_url: "https://api.github.com/users/nora-exe/repos"
  site_admin: false
  starred_url: "https://api.github.com/users/nora-exe/starred{/owner}{/repo}"
  subscriptions_url: "https://api.github.com/users/nora-exe/subscriptions"
  twitter_username: "noco_EXE"
  type: "User"
  updated_at: "2021-02-12T03:05:13Z"
  url: "https://api.github.com/users/nora-exe"

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


// ^^^^^ MOVING THIS ABOVE TO .THEN ^^^^^


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// create elements

function profileMaker(profileObj) {
const card = document.createElement('div');
const cardImg = document.createElement('img');
const cardInfo = document.createElement('div');
const userName = document.createElement('h3');
const username = document.createElement('p'); // they're different variables, okay. this is valid. fight me
const userLocation = document.createElement('p');
const profile = document.createElement('p');
const profileURL = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

// define classes

card.classList.add('card');
cardInfo.classList.add('card-info');
userName.classList.add('name');
username.classList.add('username');

// add content

cardImg.setAttribute('src', profileObj.avatar_url);
profileURL.setAttribute('href', profileObj.html_url);
profileURL.textContent = profileObj.html_url;
userName.textContent = profileObj.name;
username.textContent = profileObj.login;
userLocation.textContent = `Location: ${profileObj.location}`;
profile.textContent = 'Profile: ';
followers.textContent = `Followers: ${profileObj.followers}`;
following.textContent = `Following: ${profileObj.following}`;
bio.textContent = `Bio: ${profileObj.bio}`;

// append elements

card.appendChild(cardImg);
card.appendChild(cardInfo);
cardInfo.appendChild(userName);
cardInfo.appendChild(username);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(profile);
profile.appendChild(profileURL);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);


// return!

return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
