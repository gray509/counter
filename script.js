const counter ={
    count: 0,
    display: document.getElementById("counter")
} 
const decrement = () =>
{
    counter.count--;
    sign();
    counter.display.innerHTML = counter.count;
}
const increment = () =>
{
    counter.count++;
    sign();
    counter.display.innerHTML = counter.count;
}
const reset = () =>
{
    counter.count = 0;
    counter.display.style.color = "#02383C";
    counter.display.innerHTML = counter.count;
    
}
const sign = () =>
{
    if (counter.count < 0 )
        counter.display.style.color = "red";
    else if (counter.count > 0 )
        counter.display.style.color = "green";
    else
        counter.display.style.color = "#02383C";
}