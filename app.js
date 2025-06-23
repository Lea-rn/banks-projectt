"use strict";

const account1 = {
  owner: "Mark Shmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "jessica davis",
  movements: [5000, 3400, -150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

///// import elements ::

const movementContainer = document.querySelector(".left");
const balanceAccount = document.querySelector(".amount");
const inComes = document.querySelector(".mov-average-in");
const outMoney = document.querySelector(".mov-average-out");
const interest = document.querySelector(".mov-average-interset");
const app = document.querySelector("main");

///// login element

const userNameInput = document.querySelector(".username");
const pinInput = document.querySelector(".pin");
const btnLogin = document.querySelector(".auth-btn");
const welcomeMessage = document.querySelector(".welcome");

////// import transfert element :
const transferToInput = document.querySelector(".transfert-user");
const transferAmountInput = document.querySelector(".amount-transfert-input");
const transfertButton = document.querySelector(".transfert-button");

/////// update ui function ::
const updateUi = function (cur) {
  dispalyMovements(cur);
  displayBalance(cur);
  calcDispalySummary(cur);
};

//////// transfert functionnality :
transfertButton.addEventListener("click", function (event) {
  event.preventDefault();
  const reciever = accounts.find(
    (acc) => acc.userName === transferToInput.value
  );
  const amount = Number(transferAmountInput.value);
  const balance = currentAccount.credit;
  //// blance > amount and receiver exist and amount > 0 and reciever different from current account ;
  if (
    balance >= amount &&
    reciever &&
    amount > 0 &&
    reciever.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    //// update ui ::
    // dispalyMovements(currentAccount);
    // displayBalance(currentAccount);
    // calcDispalySummary(currentAccount);
    updateUi(currentAccount);
  }

  transferToInput.value = transferAmountInput.value = "";
});

/////////// userName faunctionnality :::

const displayUsername = function (arr) {
  arr.forEach((person) => {
    person.userName = person.owner
      .toLowerCase()
      .split(" ")
      .map((ele) => ele[0])
      .join("");
  });
};

displayUsername(accounts);
console.log(accounts);

////// display login :::

let currentAccount;

btnLogin.addEventListener("click", function () {
  currentAccount = accounts.find((acc) => {
    return acc.userName === userNameInput.value;
  });
  console.log("current:", currentAccount);

  if (currentAccount?.pin === Number(pinInput.value)) {
    welcomeMessage.textContent = `welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;

    app.style.opacity = 1;
    //// update ui ::
    // dispalyMovements(currentAccount);
    // displayBalance(currentAccount);
    // calcDispalySummary(currentAccount);
    updateUi(currentAccount);
  }

  userNameInput.value = pinInput.value = "";
});

/////// display movements :::

const dispalyMovements = function (acc) {
  movementContainer.innerHTML = "";

  acc.movements.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdraw";

    let html = `
            <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}"> ${i + 1} ${type}</span>
     
            </div>
            <p class="${type}-amount">
             ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
             <hr />
        `;

    movementContainer.insertAdjacentHTML("afterbegin", html);
  });
};

// dispalyMovements(account1.movements);

//currentAccount = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,

// };

/////// display balance :
const displayBalance = function (cur) {
  const balance = cur.movements.reduce((acc, mov) => acc + mov, 0);
  //// update ui :
  balanceAccount.textContent = `${balance} € `;
  cur.credit = balance;
};

// displayBalance(account1.movements);

/////// display summary :::

const calcDispalySummary = function (current) {
  const inc = current.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  //// display ui ::
  inComes.textContent = `${inc} €`;

  const outc = current.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  //// display ui ::
  outMoney.textContent = `${Math.abs(outc)} €`;

  const intresetc = current.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((ele) => ele > 1)
    .reduce((acc, mov) => acc + mov, 0);
  ///// display ui ::

  interest.textContent = `${intresetc} €`;
};

// calcDispalySummary(account1.movements);

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

const user = "Park Thomas Williams"; //// ==> ptw

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

const y = [50, 300, 1000, 200, 2000, 10];

//// get max using reduce ::

const max = y.reduce((acc, ele, i) => {
  // console.log(`${i} : ${acc}` )
  if (acc > ele) {
    return acc;
  } else return ele;
}, y[0]);

// console.log(max)

/////  challange  :::

const account = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToDinar = 3.3;

///// sum of deposit on tunisian dinar ....

// const result = account
//   .map((ele,i,arr) => {
// console.log("map:" ,arr)
// return ele * euroToDinar
//   } )
//   .filter((ele,i,array) =>{
//     console.log("filter:" , array)
//    return ele > 0

//   } )
//   .reduce((acc, ele,i,arr) =>{
//     console.log("reduce" , arr)
// return acc + ele
//   } , 0);
// console.log(result);

/////// find //////////////////////

// const numbers = [10,20,30,40,20] ;

////// false ; null ; NaN ; undefind ; 0

// const result = numbers.find((ele )=> {
//     console.log(ele)
//     return ele === 20
// } )

// if (result) {
//     console.log("we found it !! ")
// }

const dataBase = [
  {
    userName: "peter",
    photo: "picture1",
    age: 20,
  },

  {
    userName: "mark",
    photo: "picture2",
    age: 60,
  },

  {
    userName: "nicole",
    photo: "picture3",
    age: 30,
  },
];

// const result = dataBase.find((person) => person.age === 60);
// console.log(result);
