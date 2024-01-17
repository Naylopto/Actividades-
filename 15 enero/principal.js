const btn = document.getElementById('btn-1');

console.log(typeof btn);

//get attribute
console.log(btn.id);

//get data displayed
console.log(btn.innerHTML)

// se usaran on click  et on change 

btn.addEventListener('click', (e) => {
    console.log('hola');
})


document.getElementById('input-1').addEventListener('input', (e) => {
 document.getElementById('username').innerHTML = e.target.value;

const elements = document.getElementsByClassName('user-info');

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = e.target.value;
    
}
} )


const input = document.getElementById('input-1');

input.addEventListener("change", (e) => {            // a zab no lo dejo, pero se puede cambiar change por input
    console.log(e.target.value);
})