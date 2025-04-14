let a = document.querySelector("#num")
let add = document.querySelector("#increase")
let remove = document.querySelector("#decrease")
let count = 0;
add.addEventListener("click", function(){
    count = count + 1;
    a.innerHTML = count;
})
remove.addEventListener("click", function(){
    count = count - 1;
    a.innerHTML = count;
})