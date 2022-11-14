//I have use the DOM to get the id from the line 3 - 37
//it's appear on the screen
let showbalance = document.getElementById("balance");
let showloan = document.getElementById("loan");
let showpay = document.getElementById("pay");
let info = document.getElementById("info");
let description = document.getElementById("description");
let picture = document.getElementById("picture");
let display = document.getElementById('display');
let text = document.getElementById('text');
//button 
let getloan = document.getElementById("getloan");
let work = document.getElementById("work");
let bank = document.getElementById("bank");
let repayloan = document.getElementById("repayloan");
let list = document.getElementById("list");
let buy =document.getElementById("buy");
//messages
let loanmessage = document.getElementById("loanmessage");
let gotloan = false;
let loan = 0;
let balance = 6000;
let outsdandingloan = 0;
let workpay = 0;
let counter = 0;
showbalance.innerHTML = balance.toLocaleString("no-No", {
  style: "currency",
  currency: "Nok",
});
showloan.innerHTML = outsdandingloan.toLocaleString("no-No", {
  style: "currency",
  currency: "Nok",
});
showpay.innerHTML = workpay.toLocaleString("no-No", {
  style: "currency",
  currency: "Nok",
});


//below i have wrote a function and i have use DOM 
function butongetloan () {
  let promptgetloan = parseInt(prompt("Enter the amount:"), 0);
  if (!isNaN(promptgetloan) && promptgetloan <= balance * 2 && promptgetloan > 0) {
    if (gotloan == false) {
    loan += promptgetloan;
    balance += loan;
    showbalance.innerHTML = balance.toLocaleString("no-No", {
        style: "currency",
        currency: "Nok",
      });
      
      gotloan = true;
      showloan.innerHTML = promptgetloan.toLocaleString("no-No", {
        style: "currency",
        currency: "Nok",
      });
    } else if (gotloan == true) {
      console.log("Hei, jeg kjører");
      loanmessage.innerHTML =
        "You cannot get more than one bank loan before repaying the last loan";
    }
  } else if (promptgetloan > balance * 2) {
    loanmessage.innerHTML = "You cannot loan this much";
  } else {
    loanmessage.innerHTML = "Something went wrong";
  }
}
getloan.addEventListener("click", butongetloan);

//it is a function , update the workd day 
workpay = 0;
function workingButton() {
  workpay += 100;
  showpay.innerHTML = workpay.toLocaleString("no-No", {
    style: "currency",
    currency: "Nok",
  });
}
work.addEventListener("click", workingButton);

//it is a function where it is transfer the money from the work to the balance 
function bankButton(){
    if(gotloan && loan > 0){
        let payOut = workpay - (workpay/10)
        loan -= (workpay/10);
        balance += payOut;
    }
    else if(loan === 0){

        loan = 0;
        showloan.innerHTML = loan.toLocaleString("no-No", {
          style: "currency",
          currency: "Nok",
        });
    }
    else {
        balance +=workpay;
    }
    showbalance.innerHTML = balance.toLocaleString("no-No", {style:"currency", currency:"Nok"});
    showpay.innerHTML = counter.toLocaleString("no-No", {style:"currency", currency:"Nok"});
    workpay = 0;
    showloan.innerHTML = loan.toLocaleString("no-No", {
        style: "currency",
        currency: "Nok",
      });
    
}
bank.addEventListener('click', bankButton)

//DOM
function show(){
    document.getElementById('getloan').style.height="50px";
    document.getElementById('getloan').style.display="block";
    document.getElementById('repayloan').style.display="block";

}
//this is a function button repay loan
function repayLoanButton(){
    console.log("repaying", loan);
    balance = balance - loan;
    loan = 0;
    gotloan = 0;
    showbalance.innerHTML = balance.toLocaleString("no-No", {style:"currency", currency:"Nok"});
    showloan.innerHTML = loan.toLocaleString("no-No", {
        style: "currency",
        currency: "Nok",
      });
    loanmessage.innerText = '';
}   
repayloan.addEventListener('click',repayLoanButton);

// Fetch api 
let items = [];
fetch("https://noroff-komputer-store-api.herokuapp.com/computers") 
    .then(response => response.json())
    .then(data => items = data)
    .then(items =>  infoLists(items))

    

//here i have take the data from the API send to website we have create an element option with the title of items and pus to the screen
const infoLists=(items)=> {
    items.forEach((items) => { 
        const item = document.createElement("option");
        item.appendChild(document.createTextNode(items.title));
        list.appendChild(item);
    });
    descriptionList(items[0]);
    specsList(items[0]);
    imageList(items[0]);
    priceS(items[0]);}

//here i did the same think but here we have created the list and take the description from api 
const descriptionList =(item)=>{
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(item.description));
    description.textContent = '';
    description.appendChild(listItem);

}

//here  i created new list and i push the info to the specs list
const specsList = (item) =>{
    info.textContent = '';
    item.specs.forEach((x) => { 
        const specs  = document.createElement("li");
        specs.appendChild(document.createTextNode(x));
        info.append(specs);

    })
}
//here i grab the image from the api
const imageList = (item) =>{
    picture.src = `${"https://noroff-komputer-store-api.herokuapp.com/"}` + item.image;
}


//here i get the prices when you click on the option you can  get every price from the list item
const priceS = (item) =>{
    display.textContent = '';
    const pris = document.createElement('h4');
    pris.appendChild(document.createTextNode(item.price.toLocaleString("no-No", {
        style: "currency",
        currency: "Nok",
      })));
    display.append(pris);
}




//here is function to change the list automatic
const changeLists=(item)=> {
    computer = items[item.target.selectedIndex];
    descriptionList(computer);
    specsList(computer);
    imageList(computer);
    priceS(computer);
}
list.addEventListener("change", changeLists);

//here is a small function when you have balance you can buy the product but if you don't have money you cannot get that product
const buyButton =()=> {
    if( balance >= computer.price && computer.price > 0){
        balance -= computer.price;
        console.log(balance);
        showbalance.innerHTML = balance.toLocaleString("no-No", {style: "currency",currency: "Nok",});
        text.innerHTML = "Congratulation you are the owner for this laptop"
        }
      else if(computer.price > balance){
        text.innerHTML = "You don't have enough money";
        }
    else if(balance == 0){
        text.innerHTML = "You cannot afford this laptop";
    }
};
buy.addEventListener("click", buyButton);









