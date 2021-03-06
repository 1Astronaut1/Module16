  
const btnSearch = document.getElementsByTagName('button')[0],
  idBlock = document.getElementsByTagName('idBlick')[0],
  userInfo = document.getElementsByTagName('td');

//поиск пользователя бинарным поиском

function binarSearch(userData) {
  console.log(userData);
  let idLabel = document.getElementsByClassName('input_label')[0],
    id = idLabel.value;
  //исключение
  if (id < userData[0].id || id > userData[userData.length - 1].id) {
    idLabel.value = '';
    idLabel.placeholder = 'Пользователь не найден'
    setTimeout(() => {
      idLabel.placeholder = '...'
    }, 2000)
    return false
  };
  fullLabel(userData[id - userData[0].id]);
}

function fullLabel(obj) {
  userInfo[0].textContent = obj.id;
  userInfo[1].textContent = obj.userId;
  userInfo[2].textContent = obj.title;
  obj.completed ? userInfo[3].textContent = 'Выполнено' : userInfo[3].textContent = 'Не выполено';
  document.getElementsByClassName('table_container')[0].style.display = 'flex'
}

//получение json
function getJson() {
  fetch('https://jsonplaceholder.typicode.com/users/3/todos')
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      binarSearch(data)
    })
    .catch((error) => {
      console.log('Ошибка:', error);
    })
}

btnSearch.addEventListener('click', () => {
  getJson()
});