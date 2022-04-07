const userPreferences = localStorage.getItem('userPreferences');
let preferences = [];
let currentColor = 0;
if (userPreferences != null) {
  const content = JSON.parse(userPreferences);
  preferences = content;
  colorChange();
}

function colorChange() {
 
  document.body.style.backgroundColor = preferences[currentColor].background;
  setTimeout(() => {
    currentColor++;
    if (currentColor === preferences.length) {
     currentColor = 0;
    }
      colorChange();
    
  }, preferences[currentColor].timer * 1000);
}


const sendBtn = document.querySelector('#btn__saveUserPref');
sendBtn.addEventListener('click', () => {
  const color = document.querySelector('.color__picker--input').value;
  const colorTimer = parseInt(
    document.querySelector('.color__timer--input').value
  );
  // document.querySelector('.color__timer--input').value = "";
  // document.querySelector('.color__picker--input').value = '#000000';

  const userPackage = {
    background: color,
    timer: colorTimer
  };
  preferences.push(userPackage);
  const userPackToString = JSON.stringify(preferences);
  localStorage.setItem('userPreferences', userPackToString);
});
