//variables
let container = $('.container');
let currentDay = $('#currentDay');
let currentHour = moment().format('H');
console.log(currentHour);
let timeArr = [
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
  '6 pm',
  '7 pm',
  '8 pm',
  '9 pm',
  '10 pm',
  '11 pm',
  '12 am',
];
let hourArr = [
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
];

// function Declaration
function onTimeClick(e) {
  let element = e.target;
  element.nextSibling.focus();
}

function chartInit() {
  for (let i = 0; i < timeArr.length; i++) {
    let newRowEl = $('<section>').addClass('row');
    let timeEl = $('<div>').addClass('hour col-1');
    timeEl.attr('id', timeArr[i]);
    timeEl.text(timeArr[i]);
    timeEl.on('click', onTimeClick);
    let eventEl = $('<input>').addClass('description col-8');
    eventEl.attr('id', hourArr[i]);
    let saveEl = $('<button>').addClass('saveBtn col-1 btn btn-primary');

    if (hourArr[i] < currentHour) {
      eventEl.addClass('past');
    } else if (hourArr[i] === currentHour) {
      eventEl.addClass('present');
    } else {
      eventEl.addClass('future');
    }

    // error in code (fix)
    if (9 === currentHour) {
      $('#9 ')
        .removeAttr('class', 'future')
        .addClass('description col-8 present');
    } else {
      $('#9 ').removeAttr('class', 'future').addClass('description col-8 past');
    }

    newRowEl.append(timeEl);
    newRowEl.append(eventEl);
    newRowEl.append(saveEl);
    container.append(newRowEl);
  }
}

// current Day section
let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
setInterval(function () {
  currentDay.text(dateTime);
}, 1000);
chartInit();
