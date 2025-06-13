"use strict" 

const account1 = {
    owner : "Mark Shmedtman" , 
    movements : [200,450,-400,3000,-650,-130,70,1300] ,
    interestRate : 1.2 , 
    pin : 1111
}


const account2 = {
    owner : "jessica davis" , 
    movements : [5000,3400,-150,-790,-3210,1000,8500,-30] ,
    interestRate : 1.5 , 
    pin : 2222
}

const account3 = {
    owner : "Park Thomas Williams" , 
    movements : [200,-200,340,-300,-20,50,400,-460,100,-400] ,
    interestRate : 0.7 , 
    pin : 3333
}

const account4 = {
    owner : "Sarah Smith" , 
    movements : [430,1000,700,50,90] ,
    interestRate : 1 , 
    pin : 4444
}


const accounts = [account1 , account2 ,account3 ,account4]

///// import elements :: 

const movementContainer = document.querySelector(".left")

const dispalyMovements = function (arr) {
    movementContainer.innerHTML = "" ;

    arr.forEach((mov,i) => {
        let type = mov > 0 ? "deposit"  : "withdraw"
     
        let html = `
            <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}"> ${i+1} ${type}</span>
     
            </div>
            <p class="${type}-amount">
             ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
             <hr />
        `


        movementContainer.insertAdjacentHTML("afterbegin",html)
    })
}

dispalyMovements(account1.movements)


















/////////////////// lecture  ::: ////////////////////////

///// section : data transformation :: 

//// map : (return new array )  ; 


// with forEACH
// const arr = [3,1,4,3,2] ; 
// console.log(arr)

// const result = [] ;

// arr.forEach(function(ele){
//     result.push(ele*2)
// })

// console.log(result)


//// with map :: 

//// first exemple :: 
// const arr = [3,1,4,3,2] ; 
// console.log(arr)

// const resultWithMap = arr.map((num)=> num*2)
// console.log(resultWithMap)


///// second exemple :: 

// const euro = [100,50,10,5,25] ; 
// console.log("euro" , euro)
// const toTunisianDinar = 3.3

// const dinar = euro.map((num)=> num * toTunisianDinar)

// console.log("dinar:" , dinar)



//// with for loop :: 

// const dinar = [] 

// for (let i =0 ; i< euro.length ; i++) {
//     dinar.push(euro[i]*toTunisianDinar)
// }

// console.log("dinar of for loop :" , dinar )

//// third exemple :: 
// const movements = [5000,3400,-150,-790,-3210,1000,8500,-30]  ; 

//  movements.map((mov , i )=> {
//     const message = mov > 0 ? "deposit" : "withdraw" 
//     console.log(` movement ${i+1} : you ${message} ${mov} `)
// })



const user = "Park Thomas Williams"    //// ==> ptw


// const userName = user.toLowerCase()   /// park thomas williams  (string)


// const userName2 = userName.split(" ")   ///// transform string to array ()  ['park', 'thomas', 'williams']
// console.log( userName2) 


// const userName3 = userName2.map((nom)=> nom[0])
// //  ===> userName3 = [p , t , w]

// const result = userName3.join("")   //// transform array to string ===>  ptw
// console.log(result)

//// chaining :: 

// const result = user.toLowerCase().split(" ").map((nom)=>nom[0]).join("")

// console.log(result)


////// filter :: 

// const x = [3,1,4,3,2] 

// const numbersGreaterThanTwo = x.filter(function(ele){
// return ele > 2 
// })

// const numbersGreaterThanTwo = x.filter((ele)=> ele > 2  )

// console.log(numbersGreaterThanTwo)


/// with for loop :: 

// const numbersGreaterThanTwo = [] ; 

// for (let i = 0 ; i <x.length ; i++) {
//     if (x [i] > 2) {
//         numbersGreaterThanTwo.push(x[i])
//     }
// }

// console.log(numbersGreaterThanTwo)


//////// reduce // 

// const x = [3,1,4,3,2]  ; 

// const sum = x.reduce(function(acc , num , i ){
// return acc + num
// },0)

// ///// 1

// console.log(sum)

////// with forEach :: 

// let sum = 0 ; 

// x.forEach((ele)=> {
//     sum += ele 
//     //// sum = sum +ele 
  
// })
// console.log(sum)

// const x = [3,1,4,3,2]  ;   


// const multiple = x.reduce((acc,num)=>{
// return num*acc
// },1)

// console.log(multiple)

const y = [50,300,1000,200,2000,10]

//// get max using reduce ::

const max = y.reduce((acc,ele, i)=> {
    console.log(`${i} : ${acc}` )
    if (acc > ele){
        return acc
    } 
    else return ele ; 
},y[0])

console.log(max)

/////  challange  ::: 


const account = [200,450,-400,3000,-650,-130,70,1300]
const euroToDinar = 3.3 ; 

///// sum of deposit on tunisian dinar .... 
