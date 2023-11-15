document.addEventListener("DOMContentLoaded", function () {
	let button = document.getElementById('butt');
    let scores = document.getElementsByClassName('score');
    let name = document.getElementById("inp1");
    let img1 =  document.getElementById('image1');
    let img2 =  document.getElementById('image2');

    let cards_value = {
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine:  9,
        Ten: 10,
        Jack: 2,
        Queen: 3,
        King: 4,
        Ace:1
    }

    let cardImages = {
        Six: 'img/cards/Clubs6.png',
        Seven: 'img/cards/Clubs7.png',
        Eight: 'img/cards/Clubs8.png',
        Nine: 'img/cards/Clubs9.png',
        Ten: 'img/cards/Clubs10.png',
        Jack: 'img/cards/J.png',
        Queen: 'img/cards/Q.png',
        King: 'img/cards/K.png',
        Ace: 'img/cards/A.png'
};
     let cardKeys = Object.keys(cards_value);
     
    let indx1, indx2;

    let game_winner;
    let game_count = 0;

    let card1, card2;
    let path;
    button.addEventListener("click",function(){ 
        if (name.value !=='' ) 
        {
            game_count++;

            let indx1 = Math.floor(Math.random() * cardKeys.length);
            let indx2 = Math.floor(Math.random() * cardKeys.length);

            card1 = cards_value[cardKeys[indx1]];
            card2 = cards_value[cardKeys[indx2]];

            

            scores[0].textContent = scores[0].textContent * 1 + card1;
            scores[1].textContent = scores[1].textContent * 1 + card2;
            
            
        
            img1.src = cardImages[cardKeys[indx1]];
            img2.src = cardImages[cardKeys[indx2]];
            
            if(game_count === 3)
            {
                button.style.display = "none";
                if (scores[0].textContent * 1 !== scores[1].textContent * 1) 
                {
                    game_winner = (scores[0].textContent * 1> scores[1].textContent * 1)?name.value:"Комп'ютер";
                    setTimeout(function () {alert(game_winner+" переміг!")},1000)
                }else{
                     alert("Нічия!")
                }  
                
                setTimeout(function () {
                    game_count = 0;
                    game_winner ='';
                    button.style.display = "block";
                    
                    img1.src = img2.src = "img/cards/Back Blue 1.png";
                    scores[0].textContent = 0;
                    scores[1].textContent = 0;

                }, 1000);
               
            } 
            
        }else{alert("Введіть ім'я гравця!");}

       
    })
   
});
