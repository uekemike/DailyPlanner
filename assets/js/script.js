    //Declare variables for each row
        var hour9 =$("#9");
        var hour10 =$("#10");
        var hour11 =$("#11");
        var hour12 =$("#12");
        var hour1 =$("#13");
        var hour2 =$("#14");
        var hour3 =$("#15");
        var hour4 =$("#16");
        var time = moment();
    //ADD CURRENT DATE AT THE TOP OF THE PAGE

    //set variable to the current day. Formatting info found at https://momentjs.com/docs/
    // var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    // $("#currentDay").text(currentDay);


    function updatePlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


    $(".time-block").each(function (){
        var id =$(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null){
            $(this).children(".schedule").val(schedule);

        }

    });

    }
    updatePlanner();

    var saveBtn =$(".savBtn");


    saveBtn.on("click", function(){
        var time = $(this).parent().attr("id");
        var schedule =$(this).siblings(".schedule").val();

        localStorage.setItem(time, schedule);
    });


    function pastPresentFuture() {
        hour = time.hours();
        $(".time-block").each(function () {
            var thisHour = parseInt($(this).attr("id"));
    
            if (thisHour > hour) {
                $(this).addClass("future")
            }
            else if (thisHour === hour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }
    
    pastPresentFuture();

    

//     var saveItemsBtn =document.querySelector('saveBtn');
//     var textReceived =document.querySelector('.text');
    
//     textReceived.value =localStorage.getItem('content');

//    function savedPlanner(){
//        //use local storage to save get infor from planner and save
//        localStorage.setItem('content', textReceived.value);

//    };

//     saveItemsBtn.addEventListener("click", savedPlanner);

