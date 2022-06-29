const cards =document.querySelectorAll(".card");
let matchcard =0;
let cardOne ,cardTwo;
let disableDeck=false;

function flipCard(e){
    let clickCard = e.target;  //for user clicked card
    if(clickCard !== cardOne){
        clickCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickCard;
        }
        
        cardTwo = clickCard;
        disableDeck=true;
        let cardoneImg = cardOne.querySelector("img").src,
            cardtwoImg = cardTwo.querySelector("img").src;
            matchcards(cardoneImg,cardtwoImg);
    }
}
function matchcards(img1,img2){
   if(img1 === img2){
        matchcard++;
        if(matchcard ==8){
           setTimeout(()=> {
                 return shuffleCard();
           },1000);

        }
       cardOne.removeEventListener("click",flipCard);
       cardTwo.removeEventListener("click",flipCard);
       cardOne = cardTwo ="";
       return disableDeck= false;
    }
   setTimeout(() =>{
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
   },400)
   setTimeout(() =>{
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo ="";
    disableDeck= false;
   },1200)

}
function shuffleCard(){
     matchcard =0;
     cardOne =cardTwo="";
     disableDeck= false;
     let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
     cards.forEach((card,index) => { 
         card.classList.remove("flip");
         let imgTag =card.querySelector("img");
         imgTag.src = `images/img-${arr[index]}.png`;
         card.addEventListener("click",flipCard);
         
          });
}
shuffleCard();
cards.forEach(card => {  //add click function to all cards
    
    card.addEventListener("click",flipCard);
    
});


