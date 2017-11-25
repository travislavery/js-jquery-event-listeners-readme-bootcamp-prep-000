//define functions here

$(document).ready(function(){
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('form').on('submit', submitIt);
});
$('#typing').on('keydown', pressIt);
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