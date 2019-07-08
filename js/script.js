/***********************************
 
 This is the code for the Clock. PierceJ

 **********************************/
var meridan = true;

var showCurrentTime = function(meridan) {
  var date = new Date();
  var dateSince = new Date('03 Sep 2017 17:01:43 GMT');
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var timePlaceHolder = document.getElementById('liveTime');

  var timeSinceHrs = document.getElementById('timeSinceHrs');
  var timeSinceMin = document.getElementById('timeSinceMins');
  var timeSinceSnd = document.getElementById('timeSinceSnd');

  var hoursSince = dateSince.getDate() - date.getDate();
  const diffTime = Math.abs(date.getTime() - dateSince.getTime());
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffSeconds = Math.ceil(diffTime / 1000);

  timeSinceHrs.innerHTML = diffHours;
  timeSinceMin.innerHTML = diffMinutes;
  timeSinceSnd.innerHTML = diffSeconds;

  // Set Minutes
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (meridan) {
    var aMPM = '';
    if (hour >= 0 && hour < 12) {
      aMPM = 'AM';
    } else if (hour === 12) {
      aMPM = 'PM';
    } else if (hour > 12 && hour <= 23) {
      hour = hour - 12;
      aMPM = 'PM';
    }
    timePlaceHolder.innerHTML =
      hour + ':' + minutes + ':' + seconds + ' ' + aMPM;
  } else {
    timePlaceHolder.innerHTML = hour + ':' + minutes + ':' + seconds;
  }
};

var changeToMeridan = function(value) {
  if (value === '12') {
    meridan = true;
    showCurrentTime(meridan);
  } else {
    meridan = false;
    showCurrentTime(meridan);
  }
};

/****************************************************
 
 This is the end of the code for the Clock. PierceJ

 ****************************************************/

/*********************************************
 
 This is the code for the Calculator. PierceJ

**********************************************/
var tipPercentMultiplier = 0;
function validateForm() {
  var bill = document.forms['calc']['bill'].value;
  var noOfPeople = document.forms['calc']['people'].value;
  var totalPPS = 0;
  if (
    tipPercentMultiplier === 0 ||
    tipPercentMultiplier === 'Service Standard'
  ) {
    totalPPS = bill / noOfPeople;
  } else {
    totalPPS = (bill * tipPercentMultiplier) / noOfPeople;
  }

  alert(totalPPS);
}

function setTipValue(tipPercent) {
  payTip = true;
  tipPercentMultiplier = tipPercent;
  console.log(tipPercentMultiplier);
}
/********************************************************
 
 This is the end of the code for the Calculator. PierceJ

 ********************************************************/

window.addEventListener('DOMContentLoaded', function() {
  /*****************************************
 
 This is the code for the Clock. PierceJ

******************************************/
  showCurrentTime(meridan);

  var updateClock = function() {
    showCurrentTime(meridan);
  };
  updateClock();

  // Getting the clock to increment once a second
  var oneSecond = 1000;
  setInterval(updateClock, oneSecond);

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  month += 1;

  var datePlaceHolder = document.getElementById('liveDate');

  datePlaceHolder.innerHTML = day + '/' + month + '/' + year;

  /****************************************************
 
 This is the end of the code for the Clock. PierceJ

*****************************************************/
});
