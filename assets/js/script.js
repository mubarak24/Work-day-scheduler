// Saves to local storage by with the event listener added to the id of save button. Then sets the value
// ~ to target the siblings in the textarea on the document. You then set the attribute of the id element 
// ~ to the parent to save. Then what is written is saved to local storage with its unique id when button is clicked
$(function () {
  $(".saveBtn").on("click", function () {
    var val = $(this).siblings("textarea").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, val);
  });
  });
  
    setInterval(function () {
      const CurrentTime = dayjs().format('dddd,MMMM D');
      $("#currentDay").text(CurrentTime);
    }, 1000);

    // Prevents the page from reloading by setting the value for each time block
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var val = localStorage.getItem(id);
      $(this).children("textarea").val(val);
    });
  
    const today = dayjs();
    $(".time-block").each(function () {
    const timeblock = $(this);
    const hour = timeblock.attr("id").split("-").pop();
    console.log(hour);
    var currentHour = today.hour();
    if(hour < currentHour) {
      timeblock.addClass("past");
    }
    else if(hour > currentHour) {
      timeblock.addClass("present")
    }
    else{
      timeblock.addClass("future")
    };
    });