const userInput         = document.querySelector('input');
const button            = document.querySelector('button');
const form              = document.querySelector('form');
const heroSection       = document.getElementById('hero-section');
const resultContainer   = document.getElementById('result-container');
const closePopupBtn     = document.getElementById('close-popup');


// user bio details
const userAvatar        = document.getElementById('avatar-img');
const username          = document.getElementById('name');
const loginUserid       = document.getElementById('userid')
const githubLink        = document.getElementById('github-link');
const userBio           = document.getElementById('bio');
const followersCount    = document.getElementById('followers-count');
const followingCount    = document.getElementById('following-count');
const userLocation      = document.getElementById('location');
const createdAt         = document.getElementById('created-at');
const hireable          = document.getElementById('hireable');
const totalRepositories = document.getElementById('total-repositories');
const thanksMsg         = document.getElementById('thanks-msg-name');




const api = `https://api.github.com/users/{userName}`

form.addEventListener('submit', (e) => {    
    e.preventDefault();

    fetch(`https://api.github.com/users/${userInput.value}`)
  .then(response => response.json())
  .then(data => {


    const creationDate            = new Date(data.created_at);
    const day                     = String(creationDate.getDate()).padStart(2, '0');
    const month                   = String(creationDate.getMonth() + 1).padStart(2, '0');
    const year                    = creationDate.getFullYear();
    const formattedDate           = `${day}-${month}-${year}`;

    userAvatar.src                = data.avatar_url;
    username.textContent          = data.name;
    loginUserid.textContent       =`@${data.login}`;
    githubLink.href               = data.html_url
    userBio.textContent           = data.bio;
    followersCount.textContent    = data.followers;
    followingCount.textContent    = data.following;
    userLocation.textContent      = data.location;
    createdAt.textContent         = formattedDate;
    hireable.textContent          = data.hireable;
    totalRepositories.textContent = data.public_repos;
    thanksMsg.textContent         = data.name;

    resultContainer.style.display = 'block';
    heroSection.classList.add('blurred');



  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });    
})



closePopupBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    heroSection.classList.remove('blurred');
});