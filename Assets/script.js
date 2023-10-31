$(function() {
  var today = dayjs();
  displayPastText();
  setSaveBtnsEventListener();

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM DD'));
  
  const date = new Date($.now());
  const currentHour = date.getHours();

  for (let i = 9; i <= 17; i++) {
    const element = $(`#hour-${i}`);

    if (i < currentHour) {
      element[0].classList.add('past');
    }
    else if (i == currentHour) {
      element[0].classList.add('present');
    }
    else {
      element[0].classList.add('future');
    }
  }
});

// Displays saved past text from localstorage for each textarea once user clicks save.
function displayPastText() {
  $('.row').each(function() {
    var element = $(this);
    var id = element.attr('id');
    var text = element.children('textarea');
    var pastText = localStorage.getItem(id);
    text.val(pastText);
  })
}

// Sets event listeners for all save btns, and if clicked saves to localstorage.
function setSaveBtnsEventListener() {
  $('.btn').click(function(e) {
    let textArea;

    if (e.target.parentElement.classList[0] === 'btn') {
      textArea = e.target.parentElement.previousElementSibling;
    }
    else {
      textArea = e.target.parentElement.children[1];
    }

    var id = textArea.parentElement.id;
    var previousElementValue = textArea.value;
    localStorage.setItem(id, previousElementValue);
  })
}