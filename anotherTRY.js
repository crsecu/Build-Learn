//object factories that allows you to create a to do list

class TodoCreator {
	constructor(title, description, dueDate, priority) {
		this.goal = goal;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}

const incompleteTodo = [];
const completed = [];
//When completing the todo


//grab input from "Goal"
const submitBTN = document.getElementById('submitBTN');
submitBTN.addEventListener('click', message);



//function that posts the goal on the page
function message(e) {
  e.preventDefault();
  var input1 = document.getElementById('form');
  var checkStatus = form.checkValidity();
  form.reportValidity();
  if (checkStatus) {
	const inputGoal = document.getElementsByClassName('name1')[0].value;
	//console.log('I am clicked!!');
  const goalDescript1 = document.getElementsByClassName('lbsDown')[0].value;

 
  const dueDate1 = document.getElementsByClassName('dueDate')[0].value;

  const display = document.getElementsByClassName('result')[0];
  display.innerHTML = `Hello ${inputGoal}. It looks like you are trying to loose ${goalDescript1} pounds by ${dueDate1}. Based the data provided, it is recommended to not loose more than 1 pound per week. Good luck!`
 }
}

function timeNeeded(){

}

const dueDate = document.getElementsByClassName('dueDate')[0];
dueDate.addEventListener('keypress', message2);








