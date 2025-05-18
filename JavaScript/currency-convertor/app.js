
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


let dropdowns = document.querySelectorAll(".dropdwon select");
let btn = document.querySelector("form button");
for(select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML = currCode;
        newOption.value = currCode;
      //  select.append(newSelect);

        if(select.name ==="from" && currCode ==="USD"){
            newOption.selected = "selected";
        }else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
       select.append(newOption);
    }

select.addEventListener("change",(evt) =>{
      updateFlag(evt.target);
});
}

function updateFlag(element){
    let currCode = element.value; 
    let countryCode = countryList[currCode]; //IN,US

    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`; 
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;

}

btn.addEventListener("click", async(evt)=>{

evt.preventDefault(); // page will not refresh and in the url variable values will not reflect 
let amount = document.querySelector(".amount input");
let amtValue= amount.value;

if (amtValue === ""|| amtValue < 1){
    amtValue=1;
    amount.value = "1";
}


const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

let response = await fetch(URL);

let data =  await response.json();
let toFinalCurrRate =  data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]

let finalrate = toFinalCurrRate*amtValue;

msg.innerHTML = `${amtValue} ${fromCurr.value} = ${finalrate} ${toCurr.value} `






});

