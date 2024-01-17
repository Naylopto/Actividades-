// async function f () {return 1}
// console.log(f())

// f().then(console.log('reponse'))

// f().then((res) => console.log(res));  
// f().then(function(res){ console.log(res)}) 

/** las dos funciones de arriba son equivalentes
 * solo cambian la funcion una es clasica y la 
 * segunda es funcion flecha.
 * */

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('si que si'), 3000)
    })
    let result = await promise;
    console.log(result)
}

async function b(){
    let promise = new Promise((res, rej) => setTimeout(() => res('done'), 5000))
    console.log(await promise);
}

f()
b()