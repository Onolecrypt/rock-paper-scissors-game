/*we use here the or Operator ( ||)to give variable 'score'below,the
    default value incase it is a falsy/null*/
    let score = ( JSON.parse(localStorage.getItem('score')))||{
        wins:0,
        losses:0,
        ties:0
    };
    
         updateScoreElement();// updates and displays score to element
         
     
        let pickedHand ='';
        
     function myPick(pickedHand){
       const computerMove = computerPick();
    
           let result ='';
    
     if(pickedHand === 'Rock'){
            if(computerMove === 'Rock'){
               result = 'it\'s a tie';
            }
            else if(computerMove === 'Paper'){
                result= 'You lose';
            }   
             else if(computerMove === 'Scissors'){
                result ='You win!';
             }
            
            }
    
            else if(pickedHand === 'Paper'){
    
                if(computerMove === 'Rock'){
               result ='You win!';    
           }
           else if(computerMove === 'Paper'){
               result = 'it\'s a tie';
           } 
            else if(computerMove === 'Scissors'){
                result ='You lose';
            }
    
            }
    
            else if(pickedHand === 'Scissors'){
    
            if(computerMove === 'Rock'){
    
                result = 'You lose';
            }
            else if(computerMove === 'Paper'){
                result = 'You win!';
            }
            else if (computerMove === 'Scissors'){
                result = 'It\'s a tie';
            }
            
            }
            
            if(result === 'You win!'){
            score.wins += 1;
           }else if(result === 'You lose'){
            score.losses += 1;
           }else if(result === 'It\'s a tie'){
            score.ties += 1;
           }
    
            localStorage.setItem('score',JSON.stringify(score));
    
            updateScoreElement();
    
                 //updates score to <p> element
                    
                document.querySelector('.js-result')
                    .innerHTML= result;
                    document.querySelector('.js-moves')
                    .innerHTML = `  You<img src="${pickedHand}-emoji.png "class="move-icon"><img src="${computerMove}-emoji.png"class="move-icon">Computer`
                
    
    }
    
    
    function updateScoreElement(){
        document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
    
    }
    
        function computerPick(){
           const randomNumber = (Math.random());
          if(randomNumber>=0 && randomNumber<1/3){
               computerSelection = 'Rock';
            }
            else if(randomNumber>=1/3 && randomNumber<2/3){
                computerSelection = 'Paper';  
            }
            else if(randomNumber>=2/3 && randomNumber<1){
                computerSelection = 'Scissors';   
            }
        return computerSelection;
    }
    
   
