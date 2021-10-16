console.log('20183854-Nguyen Son Tung-IT2')
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
var tmp = '12345';

var result = tmp.split('');

console.log('Số ban đầu ' + tmp);

shuffle(result);

console.log('Số khi được tráo đổi: ' + result.join('').toString());