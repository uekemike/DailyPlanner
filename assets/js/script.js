     //ADD CURRENT DATE AT THE TOP OF THE PAGE

    //set variable to the current day. Formatting info found at https://momentjs.com/docs/
    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    //set the text of the p tag as the current day
    $("#currentDay").text(currentDay);

    var saveItemsBtn =document.querySelector('saveBtn');
    var textReceived =document.querySelector('.text');
    
    textReceived.value =localStorage.getItem('content');

   function savedPlanner(){
       //use local storage to save get infor from planner and save
       localStorage.setItem('content', textReceived.value);

   };

    saveItemsBtn.addEventListener("click", savedPlanner);

