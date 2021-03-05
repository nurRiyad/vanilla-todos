//Deleting todo from the list 
const list = document.querySelector("#work-list ul");

list.addEventListener('click',function(event){
    if(event.target.className == 'delete'){
        const li = event.target.parentElement;
        li.parentElement.removeChild(li);
    }
});


//Adding new task to the list 
const form = document.forms['add-task'];

form.addEventListener('submit',function(event){
    event.preventDefault();
    let input = form.querySelector('input[type="text"]');
    let value = input.value;

    //create new element 
    let li = document.createElement('li');
    let bookName = document.createElement('span');
    let deleteButton = document.createElement('span');

    //add the new element to the list
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);

    //set value and attribute to the appended element
    bookName.textContent = value;
    deleteButton.textContent = "Delete";
    bookName.setAttribute('class','name');
    deleteButton.setAttribute('class','delete');
    let checkDisplay = document.querySelector('#work-list');
    checkDisplay.style.display = 'block';
    document.forms['add-task'].reset()
});

//Delete all thing 
const hideContent = form.querySelector('input[type="checkbox"]');

hideContent.addEventListener('change',function(event){
    let li = document.querySelector('#work-list');
    if(hideContent.checked){
        li.style.display = 'none';
    }
    else{
        li.style.display = 'block';
    }
});

//searching filter in the list 
let search = document.forms['search-list'];
let input = search.querySelector('input');

input.addEventListener('keyup',function(event){
    let SearchValue = event.target.value;
    SearchValue = SearchValue.toLowerCase();
    let li = document.getElementsByTagName('li');
    Array.from(li).forEach(function(eachList){
        let liValue = eachList.firstElementChild.textContent;
        liValue = liValue.toLowerCase();
        if(liValue.indexOf(SearchValue) != -1){
            eachList.style.display = 'block';
        }
        else{
            eachList.style.display = 'none';
        }
    });
});
