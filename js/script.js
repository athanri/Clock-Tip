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
  var noOfPeople = document.forms['calc']['people'].value;
  var bill = document.forms['calc']['bill'].value;
  if (
    bill === '0' ||
    bill === null ||
    bill === undefined ||
    bill === '' ||
    (noOfPeople === '0' ||
      noOfPeople === null ||
      noOfPeople === undefined ||
      noOfPeople === '')
  ) {
    alert("'Bill Amount' or 'Number of People' field(s) cannot be blank or 0");
  } else {
    var totalPPS = 0;
    if (
      tipPercentMultiplier === 'Service Standard' ||
      tipPercentMultiplier === 0
    ) {
      totalPPS = bill / noOfPeople;
    } else {
      totalPPS = (bill * tipPercentMultiplier) / noOfPeople;
    }
    $('#totalPerPerson').modal('show');
    updateModal(bill, noOfPeople, totalPPS);
  }
}

function setTipValue(tipPercent) {
  payTip = true;
  tipPercentMultiplier = tipPercent;
  console.log(tipPercentMultiplier);
}
/********************************************************
 
 This is the end of the code for the Calculator. PierceJ

 ********************************************************/

/*********************************************
 
 This is the code for the Todo List. PierceJ

**********************************************/
function addTodo() {
  var todo = $('#userInput');
  if (todo.val() != '') {
    $('#list').append(
      '<li onclick=markComplete(this)>' +
        todo.val() +
        '<button onclick="deleteListItem(this.closest(\'li\'))">X</button></li>'
    );
    todo.val('');
  } else {
    alert('Please enter a task name');
  }
}

function markComplete(listItem) {
  listItem.style.background = 'green';
  listItem.style.textDecoration = 'line-through';
}

function deleteListItem(button) {
  button.remove();
}

/********************************************************
 
 This is the end of the code for the Todo List. PierceJ

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

/*********************************************
 
 This is the code for the Calculator. PierceJ

**********************************************/
function updateModal(bill, noOfPeople, totalPPS) {
  $('#billPara').html('€' + bill);
  $('#peoplePara').html(noOfPeople);

  switch (tipPercentMultiplier) {
    case '1.05':
      percentage = 5;
      break;
    case '1.10':
      percentage = 10;
      break;
    case '1.15':
      percentage = 15;
      break;
    case '1.20':
      percentage = 20;
      break;
    case '1.25':
      percentage = 25;
      break;
    default:
      percentage = 0;
  }

  $('#percentagePara').html(percentage + '%');
  $('#totalPerPersonPara').html('€' + totalPPS);
}

/********************************************************
 
 This is the end of the code for the Calculator. PierceJ

 ********************************************************/
