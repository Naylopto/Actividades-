const IMAGE_URL = 'https://placehold.co/200'

const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');

 const DATA = {
     id: 1,
     user_name: 'username',
     description: 'lorem ipsum dolor',
     age: '23',
}

//user data
const user = {
    id: 1,
    user_name: ' user 2',
    desc: 'lorem 2',
    age: 30,
    fav_music: {
    bands: ['temerarios', 'tigres del norte', ' grupo frontera']
    },
}

//create image 
const image = document.createElement('img');
image.src = IMAGE_URL;
image.alt = 'user profile photo';
image.width = 200

//user info
const user_name = document.createElement('h3')
const user_desc = document.createElement('p');
const user_age = document.createElement('p');

//element + data 
user_name.innerHTML = DATA.user_name;
user_desc.innerHTML = DATA.description;
user_age.innerHTML = DATA.age;

console.log(user_age, user_name, user_desc)

// render elements
IMAGE_CONTAINER.append(image);
INFO_CONTAINER.append(user_name, user_desc, user_age);