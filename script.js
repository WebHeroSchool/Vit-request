let body = document.body;
let url = window.location.toString();

let getName = (url) => {
	let urlMas = url.split('=');
	let name = urlMas[1];	
	if(name == undefined) {
		name = 'WhitcherX';
 	}
 	return name;
}

let name = getName(url);
console.log('https://api.github.com/users/' + name);
fetch('https://api.github.com/users/' + name)
	.then(res => res.json())
	.then(json => {
		avatar = json.avatar_url;
		userName = json.name;
		description = json.bio;
		url = json.url;
		let addName = () => {
			let userName = document.createElement('h1');
			userName.innerHTML = name;
			body.appendChild(userName);
		}
		let addDescription = () => {
			let userDescription = document.createElement('h2');
			userDescription.innerHTML = description;
			body.appendChild(userDescription);
		}
		let addAvatar = () => {
			let userAvatar = document.createElement('img');
			let newString = document.createElement('br');
			userAvatar.src = avatar;
			body.appendChild(userAvatar);
			body.appendChild(newString);
		}
		let addUrl = () => {
			let userUrl = document.createElement('a');
			let text = document.createTextNode('profile');
			userUrl.appendChild(text);
			userUrl.href = 'https://github.com/' + name;
			body.appendChild(userUrl);
		}
		addName();
		addDescription();
		addAvatar();
		addUrl();
	}).catch(err => alert(err + 'Информация о пользователе не доступна'));