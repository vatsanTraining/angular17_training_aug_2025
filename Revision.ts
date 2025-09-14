// Promise

// Async await

// Reducer 


import { filter, map, of, from } from "rxjs";


let data = [1, 2, 3];

 let numbers$ = from(data);

 numbers$.subscribe((v) => console.log(v));

 numbers$.subscribe({
    next:v => console.log(v)
 },

)

console.log('observable with pipe of(map,filter) and subscribe')
numbers$.pipe(map((v)=>v*2),filter(v=> v>4)).subscribe( (v)=>console.log(v));

// Now Promise

 const promisefunction = () =>
  { 
  
    return new Promise(resolve => setTimeout(() => resolve('I will give Rs.1000'), 3000));
  }


//const promisefunction = () => Promise.reject("I am not in a postion to pay 1000");


 const callme =async () => {
    

         promisefunction().then( v=> console.log(v))
                       .catch((e) => console.log(e));
        
                    console.log('lines below await')
 }

 console.log('understood promise')

 callme()