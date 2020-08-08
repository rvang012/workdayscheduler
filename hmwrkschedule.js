var day = moment();
    $('#currentDay').append(day.format('dddd MMM Do YYYY'));
                      
    $('#8am').val(localStorage.getItem('8am-block'));
    $('#9am').val(localStorage.getItem('9am-block'));
    $('#10am').val(localStorage.getItem('10am-block'));
    $('#11am').val(localStorage.getItem('11am-block'));
    $('#12pm').val(localStorage.getItem('12pm-block'));
    $('#1pm').val(localStorage.getItem('1pm-block'));
    $('#2pm').val(localStorage.getItem('2pm-block'));
    $('#3pm').val(localStorage.getItem('3pm-block'));
    $('#4pm').val(localStorage.getItem('4pm-block'));
    $('#5pm').val(localStorage.getItem('5pm-block'));
    $('#6pm').val(localStorage.getItem('6pm-block'));


$('.saveBtn').on('click', function(event){
    event.preventDefault();
    var inputEl = $(this).parent().parent().children(".form-control");
    console.log(inputEl);
    localStorage.setItem(inputEl.attr("data-timekey") , inputEl.val()); 
                   
    localStorage.setItem(inputEl.attr("data-timekey") , inputEl.val()); 
  

    $('.clearbtn').on('click', function() {
        localStorage.clear();
    });

});