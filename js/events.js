//define functions here

$(document).ready(function(){
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('input').on('keydown', pressIt);
  $('form').on('submit', submitIt);
});

function getIt() {
  alert('Hey!');
}

function frameIt() {
  this.addClass('tasty')
}

function pressIt() {
  if(this.key == 71) {
    alert('You pressed G!')
  }
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}