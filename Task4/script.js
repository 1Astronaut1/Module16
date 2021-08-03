let loadBtn = document.getElementsByClassName('container_button')[0],
dataJSON,
xhr = new XMLHttpRequest();

//Парсим JSON

xhr.onload = function () {
dataJSON = JSON.parse(xhr.response);
}
xhr.open('get', 'practic.json', true);
dataJSON = xhr.send();
function showSum() {
let year = document.getElementsByClassName('container_year')[0].value;
let sumBlocks = document.getElementsByClassName('container_sum');
let dataContainer = document.getElementsByClassName('container_data')[0];
let container = document.querySelector('.container');
dataContainer.style.display = 'flex';
//Перебираем значения и вводим в блоки
for (i = 0; i < dataJSON.length; i++) {
  if (dataJSON[i].year == year) {
    for (j = 0; j < sumBlocks.length; j++) {
      sumBlocks[j].textContent = dataJSON[i].sales[`q${j+1}`];
    }
  }
}
let a = document.createElement("a");
a.href = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${year} год',data:[${sumBlocks[0].textContent},${sumBlocks[1].textContent},${sumBlocks[2].textContent},${sumBlocks[3].textContent}]}]}}`;
a.textContent = 'График';
if (!document.querySelector('.container a')) 
{ 
  container.appendChild(a);
}
else
{
  document.querySelector('.container a').href = a.href;
}
}
loadBtn.addEventListener('click', () => {
showSum()
})