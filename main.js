/**
* Place your JS-code here.
*/

$(document).ready(function(){

  'use strict';

  var pTop = [0,0]; //pTop with start positions
  var pToplength = pTop.length;

  var posFinished = 45;
  var top1Color = "yellow";
  var top2Color = "orange";

  function displayTop(posValue, pos) {
    if (pos === 0) {
      var topElement = document.getElementById('top');
      topElement.innerText = "0";
    }
    if (pos === 1) {
      var topElement = document.getElementById('top2');
      topElement.innerText = "0";
    }

    if (posValue < 10) {
      topElement.style.left = posValue * 12 +'px';
    } else 	{
      topElement.style.left = (((posValue -10) * 20) +122)  +'px';
    }
  }

  // Draw backgroundcircles
  function drawBgCircles() {
    var canvas = document.getElementById('canvas1');

    for (var topPos = 1; topPos<=57; topPos++) {
      var context = canvas.getContext('2d');
      var centerX = 0;
      var centerY = 0;
      var radius = 20;

      //Get Bg circle x-position
      centerX=getBgX(topPos);
      //Get Bg circle y-position
      centerY=getBgY(topPos);

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

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

    var BgX = 0;
    // Bottom left to up
    if (pos<6) {BgX = 300 - 44;}

    //Middle left to right
    if (pos>5 && pos<10) {BgX = 300 - (44* (pos-4));}

    //middle left
    if (pos === 10) {BgX = 300 - (44*5);}

    //middle left upper left to right
    if (pos>10 && pos<16) {BgX = 300 - (44*5) + ((pos-11) * 44);}

    //top left bottom to up
    if (pos>15 && pos<20) {BgX = 300 - 44;}

    //top
    if (pos === 20) {BgX = 300;}

    //top right up to bottom
    if (pos>20 && pos<25) {BgX = 300 + 44;}

    //middle right upper
    if (pos>24 && pos<30) {BgX = 300 + 44 + ((pos-25) * 44);}

    //middle right
    if (pos === 30) {BgX = 300 + (44*5);}

    //Middle left lower left to right
    if (pos>30 && pos<36) {BgX = 300 + (44*5) - (44* (pos-31));}

    //bottom right up to down
    if (pos>35 && pos<40) {BgX = 300 + 44;}

    //middle bottom
    if (pos === 40) {BgX = 300;}

    //up to final
    if (pos>40  && pos <45) {BgX = 300;}

    //final point
    if (pos === 45) {BgX = 300;}

    //left middle points
    if (pos>45 && pos<50) {BgX = 300 - (44* (pos-45));}

    //upper middle points
    if (pos>49 && pos<54) {BgX = 300;}

    //right middle points
    if (pos>53) {BgX = 300 + 44 + ((pos-54) * 44);}

    return BgX;
  }

  //get y-position for the background circles
  function getBgY(pos) {

    var BgY = 0;

    // Bottom left to up
    if (pos<6) {BgY = 600 - 44*pos;}

    //Middle left to right
    if (pos>5 && pos<10) {BgY = 600 - 44*5;}

    //middle left
    if (pos === 10) {BgY = 600 - 44*6;}

    //middle left upper left to right
    if (pos>10 && pos<16) {BgY = 600 - 44*7;}

    //top left bottom to up
    if (pos>15 && pos<20) {BgY = 600 - (44* (pos-8));}

    //top
    if (pos === 20) {BgY = 600 - 44*11;}

    //top right up to bottom
    if (pos>20 && pos<25) {BgY = 600 - (44*11) + ((pos-21) * 44);}

    //middle right upper
    if (pos>24 && pos<30) {BgY = 600 - (7*44);}

    //middle right
    if (pos === 30) {BgY = 600 - 44*6;}

    //Middle left lower left to right
    if (pos>30 && pos<36) {BgY = 600 - 44*5;
    }

    //bottom right up to down
    if (pos>35 && pos<40) {BgY = 600 - (44*4) + ((pos-36) * 44);}

    //middle bottom
    if (pos === 40) {BgY = 600 - 44;}

    //up to final
    if (pos>40  && pos <45) {BgY = 600 - 44*(pos-39);}

    //final point
    if (pos === 45) {BgY = 600 - 44*6;}

    //left middle points
    if (pos>45 && pos<50) {BgY = 600 - 44*6;}

    //upper middle points
    if (pos>49 && pos<54) {BgY = 600 - (44* (pos-43));}

    //right middle points
    if (pos>53) {BgY = 600 - (6*44);}

    return BgY;
  }

  //draw topcircle
  function drawTopCircle(topValue,pos) {
    //Draw a top in a circle
    var canvas, context,centerY,centerX,radius;

    canvas = document.getElementById('canvas1');
    context = canvas.getContext('2d');

    //first position outside the game-area
    if(topValue===0) {
      if (pos === 0) {
        centerY = 510;
        context.fillStyle = top1Color;
      }
      if (pos === 1) {
        centerY = 540;
        context.fillStyle = top2Color;
      }
      centerX = 44*3;
      radius = 10;
    } else {

      //second position and up ihe game area
      if (pos === 0) {
        //Clear position 0
        context.clearRect(120, 498, 24, 24);
        //Fill with top1Color
        context.fillStyle = top1Color;
      }

      if (pos === 1) {
        //Clear position 0
        context.clearRect(120, 528, 24, 24);
        //Fill with top1Color
        context.fillStyle = top2Color;
      }

      centerX = 0;
      centerY = 0;

      //Calculate x-position
      centerX=getBgX(topValue);
      //Calculate y-position
      centerY=getBgY(topValue);

      radius = 10;
    }

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  function displayTopValue(topValue,pos)  {
    if (pos === 0) {
      //  var toe = document.getElementById('topvalue');

      //Draw bgCircles
      drawBgCircles();
      //draw top circle
      drawTopCircle(topValue,pos);

    }
    if (pos === 1){
      //    var toe = document.getElementById('topvalue2');
      //draw top circle
      drawTopCircle(topValue,pos);
    }
    //  toe.innerText = topValue;
  }

  function checkForCollision(currentTop) {
    if (currentTop === 0) {
      //If pas are equals
      if(pTop[0] === pTop[1]){
        //start from pos 0
        pTop[1]=0;
      }
    }
    if (currentTop === 1) {
      //If pas are equals
      if(pTop[1] === pTop[0]) {
        //start from pos 0
        pTop[0]=0;
      }
    }
  }

  function displayGOver(topNo)  {
    var goElement = document.getElementById('gameover');
    if (topNo === 0) {
      goElement.innerText = 'Game Over, Top 1 won';
    }
    if (topNo === 1) {
      goElement.innerText = 'Game Over, Top 2 won';
    }
  }

  function logics(topNo, dValue) {
    // Top is in field?
    if (pTop[topNo] > 0) {
      //Can he move
      if (pTop[topNo] + dValue <= posFinished) {
        //Move Top
        pTop[topNo] = pTop[topNo] + dValue;
        checkForCollision(topNo);
        // Is he finish?
        if (pTop[topNo] === posFinished) {
          displayGOver(topNo);
        }
      }
      // No, top not in field
    } else {
      // Is value 1 or 6
      if (dValue === 1 || dValue === 6) {
        pTop[topNo] = dValue + pTop[topNo];
        checkForCollision(topNo);
      } else {
        //If not value 1 or 6 we are still not in field
        pTop[topNo] = 0;
      }
    }
  }

  // Main for handle each top
  function handleTop(topNo) {
    var text,target, dValue;

    dValue = Pesu.random(1,6);

    target = document.getElementById('b1');
    target.className='dice one';

    switch(dValue) {
      case 1: target.className='dice one'; break;
      case 2: target.className='dice two';break;
      case 3: target.className='dice three';break;
      case 4: target.className='dice six';break;
      case 5: target.className='dice four';break;
      case 6: target.className='dice five';break;
    }

    //Handle logics
    logics(topNo, dValue);

    //Display top
    for (var i = 0; i< pToplength;i++) {
      //displayTop(pTop[i],i);
      //Display topvalue
      displayTopValue(pTop[i],i);
    }
    //Stop on click
  }


  //Declare variables.
  var mmi;
  //Dice start image ,1
  mmi = document.getElementById('inoutput');

  //When Throw dice 1 clicked on
  mmi['roll1'].onclick = (function() {

    //Handle top 0
    handleTop(0);

  });

  //When Throw dice 2 is clicked on
  mmi['roll2'].onclick = (function() {

    // Handle top 1
    handleTop(1);

  });

  /*
  // Display background
  var bgElement = document.getElementById('background');
  var lastpos = posFinished + 1;
  var bgPositions = '';
  for(var i = 0; i<lastpos; i++) {
  bgPositions += " " + i;
}
bgElement.innerText = bgPositions;
*/

//display default top and default top value
//displayTop(0,0);      //display top 0 pos 0
displayTopValue(0,0); //display top 0 value 0
//displayTop(0,1);      //display top 1 pos 0
displayTopValue(0,1); //display top 1 value 0

var canvas = document.getElementById('canvas1');

//Draw bgCircles
drawBgCircles();

//draw top circle for top 1 in pos 0 (default)
drawTopCircle(0,0);
drawTopCircle(0,1);
});
