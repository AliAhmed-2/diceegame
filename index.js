function randomDiceImages(){
    var randomnumber = Math.floor(Math.random()*6 )+1;
    var diceimage = "dice" + randomnumber + ".png";
    var randomimage = "images/" + diceimage;

    return randomimage;
}

function setImages(){
    var image1= document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImages());
    
    var image2= document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImages());
}


// setImages();