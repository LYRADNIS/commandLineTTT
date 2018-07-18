const prompt = require('prompt');

prompt.start()

const gameTTT = () => {

  var firstRow = [1,2,3]
  var secondRow = [4,5,6]
  var thirdRow = [7,8,9]

  var currentGame = firstRow +  '\n' + secondRow +  '\n' + thirdRow
  //console.log(currentGame)

  const placePiece = (value) =>{

    if(value <= 3){
        for(var i = 0 ; i < firstRow.length; i++){
        //console.log(firstRow[i])
        if(firstRow[i] === value){
          firstRow[i] = 'piece';
          console.log(firstRow +  '\n' + secondRow +  '\n' + thirdRow)
        }
      }

    } else if(value <=6){
      for(var i = 0 ; i < secondRow.length; i++){
        //console.log(secondRow[i])
        if(secondRow[i] === value){
          secondRow[i] = 'piece';
          console.log(firstRow +  '\n' + secondRow +  '\n' + thirdRow)
        }
      }
      //console.log(currentGame)
    } else if(value <= 9) {

        for(var i = 0 ; i < thirdRow.length; i++){
        //console.log(thirdRow[i])
        if(thirdRow[i] === value){
          thirdRow[i] = 'piece';
          console.log(firstRow +  '\n' + thirdRow +  '\n' + thirdRow)
        }
      }

    }
    //console.log(currentGame)
  }


  placePiece(6);
}
gameTTT()