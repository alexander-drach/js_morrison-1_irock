window.addEventListener('load', () => {
  const irock = document.querySelector('.irock-wrapper img');

   setTimeout(() => {
    alert('Hello, I am your pet rock');
   }, 2000);

   irock.addEventListener('click', () => {
    let userName = prompt('what is your name?', '');
    alert(`it is good to meet you, ${userName}`);
    irock.src = './images/irock-smile.png';
   })
})