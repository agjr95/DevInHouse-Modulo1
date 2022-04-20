fetchApi();
async function fetchApi() {
  try {
    const randomUserData = await fetch('https://randomuser.me/api/?results=4');
    const dataTreated = await randomUserData.json();
    const user = dataTreated.results;
    showUser(user);
  } catch (error) {
    console.log(error);
  }
}
function showUser(user) {
  const ul = document.querySelector('ul');
  user.forEach(e => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const email = document.createElement('h3');
    const adress = document.createElement('h4');

    ul.append(li);
    li.append(img);
    li.append(div);
    div.append(name);
    div.append(email);
    div.append(adress);

    img.src = `${e.picture.large}`;
    name.innerText = `${e.name.title}. ${e.name.first} ${e.name.last}`;
    email.innerText = e.email;
    adress.innerText = `${e.location.street.name} - ${e.location.street.number} ${e.location.city}, ${e.location.state} - ${e.location.country}`;
  });
}
