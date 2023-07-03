var randomnum1 = Math.floor(Math.random()*6) +1;// 1 - 6
var randomdiceimg = "dice" + randomnum1+ ".png";
var randommgsrc ="img/" + randomdiceimg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randommgsrc);
var randomnum2 = Math.floor(Math.random()*6) +1;
var randomdiceimge = "dice" + randomnum2+ ".png";
var randommgsrce ="img/" + randomdiceimge;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randommgsrce)
if (randomnum1 > randomnum2)
{
    document.querySelector("h1").innerHTML = "player one win"

}
else if(randomnum2 > randomnum1)
 {
document.querySelector("h1").innerHTML = "player two win"

}
else {
    document.querySelector("h1").innerHTML ="both win win"
}
var numberofdrumbutton = document.querySelectorAll("button").length;
for (var i = 0; i<numberofdrumbutton; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {

    this.style.color="green";
    });
    
}




