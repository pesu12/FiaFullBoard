/**
* Place your JS-code here.
*/

$(document).ready(function(){

  'use strict';

  var pTop = [0,0]; //pTop with start positions
  var pToplength = pTop.length;

  var posFinished = 20;
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

      // Bottom left to up
      if (topPos<6) {
        centerX = 300 - 44;
        centerY = 600 - 44*topPos;
      }

      //Middle left to right
      if (topPos>5 && topPos<10) {
        centerX = 300 - (44* (topPos-4));
        centerY = 600 - 44*5;
      }

      //middle left
      if (topPos === 10) {
        centerX = 300 - (44*5);
        centerY = 600 - 44*6;
      }

      //middle left upper left to right
      if (topPos>10 && topPos<16) {
        centerX = 300 - (44*5) + ((topPos-11) * 44);
        centerY = 600 - 44*7;
      }

      //top left bottom to up
      if (topPos>15 && topPos<20) {
        centerX = 300 - 44;
        centerY = 600 - (44* (topPos-8));
      }

      //top
      if (topPos === 20) {
        centerX = 300;
        centerY = 600 - 44*11;
      }

      //top right up to bottom
      if (topPos>20 && topPos<25) {
        centerX = 300 + 44;
        centerY = 600 - (44*11) + ((topPos-21) * 44);
      }

      //middle right upper
      if (topPos>24 && topPos<30) {
        centerX = 300 + 44 + ((topPos-25) * 44);
        centerY = 600 - (7*44);
      }

      //middle right
      if (topPos === 30) {
        centerX = 300 + (44*5);
        centerY = 600 - 44*6;
      }

      //Middle left lower left to right
      if (topPos>30 && topPos<36) {
        centerX = 300 + (44*5) - (44* (topPos-31));
        centerY = 600 - 44*5;
      }

      //bottom right up to down
      if (topPos>35 && topPos<40) {
        centerX = 300 + 44;
        centerY = 600 - (44*4) + ((topPos-36) * 44);
      }

      //middle bottom
      if (topPos === 40) {
        centerX = 300;
        centerY = 600 - 44;
      }

      //up to final
      if (topPos>40  && topPos <45) {
        centerX = 300;
        centerY = 600 - 44*(topPos-39);
      }

      //final point
      if (topPos === 45) {
        centerX = 300;
        centerY = 600 - 44*6;
      }

      //left middle points
      if (topPos>45 && topPos<50) {
        centerX = 300 - (44* (topPos-45));
        centerY = 600 - 44*6;
      }

      //upper middle points
      if (topPos>49 && topPos<54) {
        centerX = 300;
        centerY = 600 - (44* (topPos-43));
      }

      //right middle points
      if (topPos>53) {
        centerX = 300 + 44 + ((topPos-54) * 44);
        centerY = 600 - (6*44);
      }

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

      //Add color for each circle , ecept for in final stage
      if (topPos <41) {
        if (topPos % 4 === 0) {
          context.fillStyle = 'green';
        }
        if (topPos % 4 === 1) {
          context.fillStyle = 'blue';
        }
        if (topPos % 4 === 2) {
          context.fillStyle = 'red';
        }
        if (topPos % 4 === 3) {
          context.fillStyle = 'yellow';
        }
      }

      //Color for final stage
      if (topPos>40 && topPos<45) {
        context.fillStyle = 'blue';
      }


      //Colof for final position
      if (topPos === 45) {
        context.fillStyle = 'white';
      }

      //color for left middle positions
      if (topPos > 45 && topPos < 50) {
        context.fillStyle = 'yellow';
      }

      //color for upper middle positions
      if (topPos > 49 && topPos <54) {
        context.fillStyle = 'red';
      }

      //color for right  middle positions
      if (topPos > 54 && topPos <58) {
        context.fillStyle = 'green';
      }


      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
    }
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
        centerY = 500;
        context.fillStyle = top1Color;
      }
      if (pos === 1) {
        centerY = 530;
        context.fillStyle = top2Color;
      }
      centerX = 44*3;
      radius = 10;
    } else {
      //second position and up ihe game area
      if (pos === 0) {
        context.fillStyle = top1Color;
      }

      if (pos === 1) {
        context.fillStyle = top2Color;
      }

      centerX = 0;
      centerY = 0;

      if (topValue<6) {
        centerX = 300 - 44;
        centerY = 600 - 44*(topValue);
      }

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
      if(pTop[0] === pTop[1]){
        pTop[1]=0;
      }
    }
    if (currentTop === 1) {
      if(pTop[1] === pTop[0]) {
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
