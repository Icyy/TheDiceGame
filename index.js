var rnum1 = Math.floor(Math.random()*6)+1;
console.log(rnum1);

var rnum2 = Math.floor(Math.random()*6)+1;
console.log(rnum2);

document.querySelector(".img1").setAttribute("src", "./images/dice"+rnum1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+rnum2+".png");

if(rnum1>rnum2)
{
    document.querySelector("h1").textContent = "Player 1 wins!"
}
else if(rnum1 === rnum2)
{
    document.querySelector("h1").textContent = "Ughh! It's a draw!"
}
else{
    document.querySelector("h1").textContent = "Player 2 wins!"
}


