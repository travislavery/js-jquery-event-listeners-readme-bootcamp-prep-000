//define functions here

$(document).ready(function(){
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('#typing').on('keydown', pressIt);
  $('form').on('submit', submitIt);
});

function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  if(event.key == 'g') {
    alert('You pressed G!')
  }
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}