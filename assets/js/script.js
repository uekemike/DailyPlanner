     //ADD CURRENT DATE AT THE TOP OF THE PAGE

    //set variable to the current day. Formatting info found at https://momentjs.com/docs/
    var currentDay = moment().format("dddd, MMMM Do");
    //set the text of the p tag as the current day
   $("#currentDay").text(currentDay);

   // gets a new date - Uisng local machine date and time
//    var date = new Date();
//    //converts the date to a string
//    var localDate = date.toDateString();
//    //converts the time to a string
//    var LocalTime = date.toLocaleTimeString();
//    //find the html element that will hold the date - in this case currentDay
//    // and then set the innetHTML of that element to the date and time

//    document.getElementById('currentDay').innerHTML = localDate + ' ' + localTime;