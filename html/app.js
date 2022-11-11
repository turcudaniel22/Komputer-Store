//object
const bank = {
    balance:3,
    loan:0,
    pay:0,
    work:0,
    counter:0,
};




// let nok = toLocaleString("no-No", {style:"currency", currency:"Nok"});

//the balances / loans
let showbalance = document.getElementById("balance");
let showloan = document.getElementById("loan");
let showpay  = document.getElementById("pay");
//button
let getloan = document.getElementById("getloan");
let work = document.getElementById("work");
let bankb = document.getElementById("bank");
let repayloan = document.getElementById("repayloan");
//messages
let loanmessage = document.getElementById("loanmessage");

//fetch api
const list = document.getElementById("list");


//Get loan 
bank.balance = 100;
function buttonGetLoan(){
    getloan = parseInt(prompt("How much would you like to loan?"),0);
    if(!isNaN(getloan) <= bank.balance * 2){
        showloan.innerHTML = showbalance.balance.toLocaleString("no-No", {style:"currency", currency:"Nok"});
    }else if(bank.loan === true){
        loanmessage.innerHTML = "Sorry you cannot get more than loan before repaying the last one";
    }else{
        loanmessage.innerHTML = "You may not have two loans at once. The initial loan should be paid back in full.";
    }
}
getloan.addEventListener('click', buttonGetLoan);


//Work 
function workButton(){
    bank.work += 100;
    showpay.innerHTML = bank.work.toLocaleString("no-No", {style:"currency", currency:"Nok"});
}
work.addEventListener('click',workButton);


//Bank

function bankButton(){
    if(showloan.loan == false){
        showloan.loan * 0.1
        
        getloan.innerHTML = showloan.loan.toLocaleString("no-No", {style:"currency", currency:"Nok"});  

    }else if(bank.balance){
        console.log("transfered here");
    }else{
        console.log(false);
    }
    function updateInfo(){
        showbalance.innerHTML =  bank.counter.toLocaleString("no-No", {style:"currency", currency:"Nok"});  
        showpay.innerHTML = bank.balance.toLocaleString("no-No", {style:"currency", currency:"Nok"});
    }
    const result = updateInfo();
    return result;

}
bankb.addEventListener('click', bankButton)






//fetch api
// let id = [];


// fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
//             .then(response => response.json())
//             .then(data => fetc.id = data)
//             .then(id )


// const addIdsToMenu = (id) => {
//         id.forEach(ids => addIdToMenu(ids))

// }

// const addIdToMenu = (id) => {
//     const idElements = document.createElement("option")
//     idElements.value = id.id
//     idElements.appendChild(document.createTextNode(ids.description))
//     idElements.appendChild()
// }



// async function doRequest() {
//     let url = 'https://noroff-komputer-store-api.herokuapp.com/computers';
//     let res = await fetch(url);

//     if (res.ok) {

//         let json = await res.json();

//         return json;
//     } else {
//         return `HTTP error: ${res.status}`;
//     }
// }

// doRequest().then(data => {


// function show(data){
//     let tab = 
//             `
//                 <option>ClassicNotebook</option>
//                 <option>BoxwithScreen</option>
//                 <option>HeychPeaOfficeBook</option>
//                 <option>SharpEdgeBlade</option>
//                 <option>TheVisor</option>
//                 <option>TheEgyptean</option>
//             `
//     for(let r of data.title){
//         tab += 
//         `
//             <option>${r.ClassicNotebook}</option>
//             <option>${r.BoxwithScreen}</option>
//             <option>${r.HeychPeaOfficeBook}</option>
//             <option>${r.SharpEdgeBlade}</option>
//             <option>${r.TheVisor}</option>
//             <option>${r.TheEgyptean}</option>
//         `;

//     }
//     list.innerHTML = tab;
// }
// });



let descriptions = [];

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data=> descriptions = data)
    .then(description => addDescriptionsToMenu)

const addDescriptionsToMenu = (descriptions) => {
    descriptions.forEach(descr =>addDescriptionToMenu(descr));
}

const addDescriptionToMenu = (description) => {
    const descriptionElement = document.createElement("option");
    descriptionElement.value = description.id;
    descriptionElement.appendChild(document.createTextNode(descriptions.description))
    descriptionElement.appendChild(list);

}




    
