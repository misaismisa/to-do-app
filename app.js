function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li and checkbox
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //delete button
    let deleteBtn = document.createElement('button') // new line
    deleteBtn.innerHTML = '<span>Delete</span>'; // new line

    // set title
    newLi.innerHTML = title; //changed textcontent to innerHTML

    //attach to ul
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    //empty the input
    newToDoText.value = '';

    deleteBtn.addEventListener('click', function() { // new line
      newLi.parentNode.removeChild(newLi); // new line
    }) // new line
  });
}

window.onload = function() {
  onReady();
}
