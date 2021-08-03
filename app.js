let Bill,people, Tip_percent;

function update_Bill(event){
    Bill = parseInt(event.target.value);
}

function update_People(event){
    people = parseInt(event.target.value);
}

function update_Tip_percent(event){
    Tip_percent = parseInt(event.target.value);
    console.log("this is the tip percent",Tip_percent)

}
 
function update_Output(){
    if(Bill && people && Tip_percent){
    let Total = Bill / people;
    let tip_amount = ((Total*Tip_percent) / 100);
    document.querySelector(".Tip_amount").innerHTML = `$${tip_amount.toFixed(2)}`;
    document.querySelector(".Total").innerHTML = `$${Total.toFixed(2)}`;
console.log("the tip amount per person",tip_amount);
console.log("the total per person",Total);
}
}



function toggleBorder1(event){
     event.target.parentNode.classList.toggle('outlined') 
}
 
function toggleBorder3(){
    document.querySelector(".custom-input").classList.toggle('outlined') 
}
function percentageSelection(event){
    event.preventDefault();
    if(document.querySelector(".active")){
        document.querySelector(".active").classList.remove('active'); 
    }
    event.target.classList.add('active')
}
function reset(){
        Bill=0;
        people=0;
        Tip_percent=0;
    document.querySelectorAll("input").forEach(element => element.value=""); 
    document.querySelector(".Tip_amount").innerHTML = "$00.00";
    document.querySelector(".Total").innerHTML = "$00.00";
        if(document.querySelector(".active")){
            document.querySelector(".active").classList.remove('active'); 
        }
}