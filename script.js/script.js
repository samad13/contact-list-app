//get input element
let filterInput = document.querySelector("#filterInput")
// add event listner
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
let filterValue = document.querySelector('#filterInput').value.toUpperCase() 
// get names ul
let ul = document.querySelector("#names")
//get lis from uls
let li = ul.querySelectorAll("li.collection-item")
//loop through collection items lis
for(let i = 0;i < li.length; i++){
   let a = li[i].getElementsByTagName('a')[0];
   //if matched
  if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.background = "black";
  } else {
    li[i].style.display = "none"
  }
    
}


};


