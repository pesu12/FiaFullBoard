/**
* Place your JS-code here.
*/

$(document).ready(function(){

  'use strict';

  var pTop = [0,0,0,0]; //pTop with start positions
  var pTopOffsetPos = [10,30,20,0];
  var pToplength = pTop.length;

  var posFinished = 45;
  var top1Color = "yellow";
  var top2Color = "green";
  var top3Color = "red";
  var top4Color = "blue";
  var yellow1 = 0;
  var green1 = 1;
  var red1 = 2;
  var blue1 = 3;
  var bgRadius = 20;
  var topRadius = 10;
  var posOutsidePlan = 0;


  // Draw backgroundcircles
  function drawBgCircles() {
    var centerX, centerY;

    for (var topPos = 1; topPos<=57; topPos++) {
      var context = canvas.getContext('2d');

      //Get Bg circle x-position
      centerX=getBgX(topPos);
      //Get Bg circle y-position
      centerY=getBgY(topPos);

      context.beginPath();
      context.arc(centerX, centerY, bgRadius, 0, 2 * Math.PI, false);

      //Add color for each circle , ecept for in final stage
      context.fillStyle = getBgColor(topPos);

      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
    }
  }

  //get color for bgPositions
  function getBgColor(pos) {
    var color = 'white';
    //outer part of bg , alter color for each position
    if (pos <41) {
      if (pos % 4 === 0) {color = 'green';}
      if (pos % 4 === 1) {color = 'blue';}
      if (pos % 4 === 2) {color = 'red';}
      if (pos % 4 === 3) {color = 'yellow';}
    }
    //Color for the last 4 endpositions before end.
    if (pos > 40 && pos <45) {color = 'blue'};
    if (pos > 45 && pos <50) {color = 'yellow'};
    if (pos > 49 && pos <54) {color = 'red'};
    if (pos > 53 && pos <58) {color = 'green'};
    return color;
  }

  //get x-position for the background circles
  function getBgX(pos) {

    var bgX = 0;
    // Bottom left to up
    if (pos<6) {bgX = 300 - 44;}

    //Middle left to right
    if (pos>5 && pos<10) {bgX = 300 - (44* (pos-4));}

    //middle left
    if (pos === 10) {bgX = 300 - (44*5);}

    //middle left upper left to right
    if (pos>10 && pos<16) {bgX = 300 - (44*5) + ((pos-11) * 44);}

    //top left bottom to up
    if (pos>15 && pos<20) {bgX = 300 - 44;}

    //top
    if (pos === 20) {bgX = 300;}

    //top right up to bottom
    if (pos>20 && pos<25) {bgX = 300 + 44;}

    //middle right upper
    if (pos>24 && pos<30) {bgX = 300 + 44 + ((pos-25) * 44);}

    //middle right
    if (pos === 30) {bgX = 300 + (44*5);}

    //Middle left lower left to right
    if (pos>30 && pos<36) {bgX = 300 + (44*5) - (44* (pos-31));}

    //bottom right up to down
    if (pos>35 && pos<40) {bgX = 300 + 44;}

    //middle bottom
    if (pos === 40) {bgX = 300;}

    //up to final
    if (pos>40  && pos <45) {bgX = 300;}

    //final point
    if (pos === 45) {bgX = 300;}

    //left middle points
    if (pos>45 && pos<50) {bgX = 300 - (44*5) + ((pos-45) * 44);}

    //upper middle points
    if (pos>49 && pos<54) {bgX = 300;}

    //right middle points
    if (pos>53) {bgX = 300 + 44 + ((pos-54) * 44);}

    return bgX;
  }

  //get y-position for the background circles
  function getBgY(pos) {

    var bgY = 0;

    // Bottom left to up
    if (pos<6) {bgY = 600 - 44*pos;}

    //Middle left to right
    if (pos>5 && pos<10) {bgY = 600 - 44*5;}
    //middle left
    if (pos === 10) {bgY = 600 - 44*6;}

    //middle left upper left to right
    if (pos>10 && pos<16) {bgY = 600 - 44*7;}

    //top left bottom to up
    if (pos>15 && pos<20) {bgY = 600 - (44* (pos-8));}

    //top
    if (pos === 20) {bgY = 600 - 44*11;}

    //top right up to bottom
    if (pos>20 && pos<25) {bgY = 600 - (44*11) + ((pos-21) * 44);}

    //middle right upper
    if (pos>24 && pos<30) {bgY = 600 - (7*44);}

    //middle right
    if (pos === 30) {bgY = 600 - 44*6;}

    //Middle left lower left to right
    if (pos>30 && pos<36) {bgY = 600 - 44*5;
    }

    //bottom right up to down
    if (pos>35 && pos<40) {bgY = 600 - (44*4) + ((pos-36) * 44);}

    //middle bottom
    if (pos === 40) {bgY = 600 - 44;}

    //up to final
    if (pos>40  && pos <45) {bgY = 600 - 44*(pos-39);}

    //final point
    if (pos === 45) {bgY = 600 - 44*6;}

    //left middle points
    if (pos>45 && pos<50) {bgY = 600 - 44*6;}

    //upper middle points
    if (pos>49 && pos<54) {bgY = 600 - (44* (pos-43));}

    //right middle points
    if (pos>53) {bgY = 600 - (6*44);}

    return bgY;
  }

  //draw topcircle
  function drawTopCircle(topValue,pos) {
    //Draw a top in a circle
    var canvas, context,centerY,centerX;

    canvas = document.getElementById('canvas1');
    context = canvas.getContext('2d');

    //first position outside the game-area
    if(topValue===posOutsidePlan) {
      if (pos === yellow1) {
        centerY = 510;
        centerX = 44*3;
        context.fillStyle = top1Color;
      }
      if (pos === green1) {
        centerY = 540;
        centerX = 44*3;
        context.fillStyle = top2Color;
      }
      if (pos === red1) {
        centerY = 510;
        centerX = 44*4;
        context.fillStyle = top3Color;
      }
      if (pos === blue1) {
        centerY = 540;
        centerX = 44*4;
        context.fillStyle = top4Color;
      }
    } else {

      //second position and up ihe game area
      if (pos === yellow1) {
        //Clear position 0
        context.clearRect(120, 498, 24, 24);
        //Fill with top1Color
        context.fillStyle = top1Color;
      }

      if (pos === green1) {
        //Clear position 0
        context.clearRect(120, 528, 24, 24);
        //Fill with top1Color
        context.fillStyle = top2Color;
      }

      if (pos === red1) {
        //Clear position 0
        context.clearRect(164, 498, 24, 24);
        //Fill with top1Color
        context.fillStyle = top3Color;
      }

      if (pos === blue1) {
        //Clear position 0
        context.clearRect(164, 528, 24, 24);
        //Fill with top1Color
        context.fillStyle = top4Color;
      }

      //Calculate x-position
      centerX=getBgX(topValue);
      //Calculate y-position
      centerY=getBgY(topValue);
    }

    context.beginPath();
    context.arc(centerX, centerY, topRadius, 0, 2 * Math.PI, false);

    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  function displayTop(topValue,pos)  {
    if (pos === yellow1) {
      //Draw bgCircles
      drawBgCircles();
      //draw top circle
      drawTopCircle(topValue,pos);
    } else {
      drawTopCircle(topValue,pos);
    }
  }

  function checkForCollision(currentTop) {
    if (currentTop === yellow1) {
      //If pas are equals
      if(pTop[yellow1] === pTop[green1]){
        //start from pos 0
        pTop[green1]=posOutsidePlan;
      }
      if(pTop[yellow1] === pTop[red1]){
        //start from pos 0
        pTop[red1]=posOutsidePlan;
      }
      if(pTop[yellow1] === pTop[blue1]){
        //start from pos 0
        pTop[blue1]=posOutsidePlan;
      }
    }
    if (currentTop === green1) {
      //If pas are equals
      if(pTop[green1] === pTop[yellow1]) {
        //start from pos 0
        pTop[yellow1]=posOutsidePlan;
      }
      if(pTop[yellow1] === pTop[red1]){
        //start from pos 0
        pTop[red1]=posOutsidePlan;
      }
      if(pTop[yellow1] === pTop[blue1]){
        //start from pos 0
        pTop[blue1]=posOutsidePlan;
      }
    }
    if (currentTop === red1) {
      //If pas are equals
      if(pTop[red1] === pTop[green1]){
        //start from pos 0
        pTop[green1]=posOutsidePlan;
      }
      if(pTop[red1] === pTop[yellow1]){
        //start from pos 0
        pTop[yellow1]=posOutsidePlan;
      }
      if(pTop[red1] === pTop[blue1]){
        //start from pos 0
        pTop[blue1]=posOutsidePlan;
      }
    }
    if (currentTop === blue1) {
      //If pas are equals
      if(pTop[blue1] === pTop[green1]){
        //start from pos 0
        pTop[green1]=posOutsidePlan;
      }
      if(pTop[blue1] === pTop[yellow1]){
        //start from pos 0
        pTop[yellow1]=posOutsidePlan;
      }
      if(pTop[blue1] === pTop[red1]){
        //start from pos 0
        pTop[red1]=posOutsidePlan;
      }
    }
  }

  function displayGOver(topNo)  {
    var goElement = document.getElementById('gameover');
    if (topNo === yellow1) {
      goElement.innerText = 'Game Over, Top Yellow won';
    }
    if (topNo === green1) {
      goElement.innerText = 'Game Over, Top Green won';
    }
    if (topNo === red1) {
      goElement.innerText = 'Game Over, Top Red won';
    }
    if (topNo === blue1) {
      goElement.innerText = 'Game Over, Top Blue won';
    }
  }

  function logics(topNo, dValue) {
    // Top is in field?
    var inLastRound = false;
    if (pTop[topNo] > posOutsidePlan) {
      //For yellow, when position is more than 10 then go to middlr.
      if((topNo===yellow1) && (pTop[topNo]>4) && (pTop[topNo]<11)) {
          if((pTop[topNo]===5) && (dValue > 5)) {pTop[topNo] = 45 + dValue - 5;inLastRound = true};
          if((pTop[topNo]===6) && (dValue > 4)) {pTop[topNo] = 45 + dValue - 4;inLastRound = true};
          if((pTop[topNo]===7) && (dValue > 3)) {pTop[topNo] = 45 + dValue - 3;inLastRound = true};
          if((pTop[topNo]===8) && (dValue > 2)) {pTop[topNo] = 45 + dValue - 2;inLastRound = true};
          if((pTop[topNo]===9) && (dValue > 1) && (dValue < 6)) {
            pTop[topNo] = 45 + dValue - 1;
            inLastRound = true
          };
          //If going from 9th position direct to finish
          if((pTop[topNo]===9) && (dValue === 6)) {
            pTop[topNo] = posFinished;
            inLastRound = true;
            displayGOver(topNo);
          };
          if((pTop[topNo]===10) && (dValue > 0) && (dValue < 5)) {
            pTop[topNo] = 45 + dValue - 0;
            inLastRound = true;
          };
          //If going from 10th position direct to finish
          if((pTop[topNo]===10) && (dValue === 5)) {
            pTop[topNo] = posFinished;
            inLastRound = true;
            displayGOver(topNo);
          };
          //If going from 10th position direct to finish + 1 , do nothing
          if((pTop[topNo]===10) && (dValue === 6)) {
            inLastRound = true;
          }
      }
      // yellow final line and second or more throw.
      if((topNo===yellow1) && (pTop[topNo]>45) && (pTop[topNo]<50) && inLastRound === false) {
           //If not finis, then go forward
           if (pTop[topNo] + dValue<50) {
              pTop[topNo] = pTop[topNo] + dValue;
           }
           //If finish
           else if (pTop[topNo] + dValue === 50) {
              pTop[topNo] = posFinished;
              displayGOver(topNo);
           }
           inLastRound = true;
      }

      //Can he move
      if (pTop[topNo] + dValue <= posFinished) {
        //Move Top
        if(inLastRound === false) {
           pTop[topNo] = pTop[topNo] + dValue;
        }
        //Calculate where top color goes to the middle
        //For yellow, red and green, pass the blue part.
        if(topNo===yellow1 || topNo===red1 || topNo === green1) {
          if(pTop[topNo]>40 &&pTop[topNo]<46) {
            pTop[topNo] = pTop[topNo] -40;
            dValue = 0;
          }
        }
        checkForCollision(topNo);
        // Is he finish?
        if (pTop[topNo] === posFinished) {
          displayGOver(topNo);
        }
      }
      console.log(" inLastRound");
      console.log(inLastRound);
      console.log("pTop[topNo]");
      console.log(pTop[topNo]);
      // No, top not in field
    } else {
      // Is value 1 or 6
      if (dValue === 1 || dValue === 6) {
        pTop[topNo] = dValue + pTop[topNo] + pTopOffsetPos[topNo];
        checkForCollision(topNo);
      } else {
        //If not value 1 or 6 we are still not in field
        pTop[topNo] = posOutsidePlan;
      }
    }
  }

  function dice() {

    var target, value;

    value = Pesu.random(1,6);

    target = document.getElementById('b1');
    target.className='dice one';

    switch(value) {
      case 1: target.className='dice one';  break;
      case 2: target.className='dice two';  break;
      case 3: target.className='dice three';break;
      case 4: target.className='dice six';  break;
      case 5: target.className='dice four'; break;
      case 6: target.className='dice five'; break;
    }

    return value;
  }

  // Main for handle each top
  function mainLoop(topNo) {

    // Get and display dice value
    var dValue = dice();

    //Handle logics
    logics(topNo, dValue);

    //Display top
    for (var i = 0; i< pToplength;i++) {
      //Display topvalue
      displayTop(pTop[i],i);
    }
  }

  //************Initial port

  //Declare variables.
  var mmi;

  mmi = document.getElementById('inoutput');

  //When Throw dice is clicked on
  mmi['roll1'].onclick = (function() {
    mainLoop(yellow1);
  });
  mmi['roll2'].onclick = (function() {
    mainLoop(green1);
  });
  mmi['roll3'].onclick = (function() {
    mainLoop(red1);
  });
  mmi['roll4'].onclick = (function() {
    mainLoop(blue1);
  });

  var canvas = document.getElementById('canvas1');

  //Draw bgCircles
  drawBgCircles();

  //draw top circle for tops in pos 0 (default)
  for (var i = 0; i< pToplength;i++) {
    drawTopCircle(posOutsidePlan,i);
  }
  // ********** End initial part

});
