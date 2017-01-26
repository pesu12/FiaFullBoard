/**
* Place your JS-code here.
*/

$(document).ready(function(){

  'use strict';

  var pTop = [1,1]; //pTop with start positions
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

    for (var topPos = 1; topPos<=11; topPos++) {
      var context = canvas.getContext('2d');
      var centerX = 44*topPos;
      var centerY = canvas.height / 2;
      var radius = 20;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

      //Add color for each circle
      if (topPos % 3 === 0) {
        context.fillStyle = 'green';
      }
      if (topPos % 3 === 1) {
        context.fillStyle = 'blue';
      }
      if (topPos % 3 === 2) {
        context.fillStyle = 'red';
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
    if (pos === 0) {
      centerY = (canvas.height / 2) -10;
    context.fillStyle = top1Color;
    }

    if (pos === 1) {
      centerY = (canvas.height / 2) +10;
      context.fillStyle = top2Color;
    }

    centerX = 44*topValue;
    radius = 10;

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
        pTop[1]=1;
      }
    }
    if (currentTop === 1) {
      if(pTop[1] === pTop[0]) {
        pTop[0]=1;
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
    if (pTop[topNo] > 1) {
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
        pTop[topNo] = 1;
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
  //displayTop(1,0);      //display top 0 pos 1
  displayTopValue(1,0); //display top 0 value 1
  //displayTop(1,1);      //display top 1 pos 1
  displayTopValue(1,1); //display top 1 value 1

  var canvas = document.getElementById('canvas1');

  //Draw bgCircles
  drawBgCircles();

  //draw top circle for top 1 in pos 1 (default)
  drawTopCircle(1,0);
  drawTopCircle(1,1);
});
