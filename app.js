/*
	Add code to do the following:

	1. When you click on an `li` it selects it.
  2. If the `li` is already selected, it unselects it.
  3. After each click, update the total count of selected `li`s in the H1.
*/
document.addEventListener('DOMContentLoaded', ()=>{
 let list = document.querySelectorAll("li")
 for (let i = 1; i < list.length; i++){
 	list[i].classList.add("selected")

 }
console.log(list)
document.addEventListener("click", ()=>{
for (let j = 0; j < list.length; j ++){
list[i].classList.add("unselected")
list[i].style.color = "black"
}

})





}) 
