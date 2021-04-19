var timeBlockContainerEl = document.querySelector("#container");

//for loop will auto generate 24 time blocks with editable text area
var timeBlockGenerator = function() {
   
    //load saved tasks from local storage


    for (var i = 0; i < 24; i++) {
        //creates 24 time blocks
        var timeBlockRowEl = document.createElement("div");
        timeBlockRowEl.setAttribute("class", "row justify-content-center");

        
        // assign each time block an id between 1-24 col-2 and show the time
        var hourEl = document.createElement("column");
        hourEl.setAttribute("class", "col-1 hour");
        timeBlockRowEl.appendChild(hourEl);

        //creat editable text area inside of each time block col-8
        
        var taskinputEl = document.createElement("input");
        taskinputEl.setAttribute("class", "col-9 editBox");
        timeBlockRowEl.appendChild(taskinputEl);
    
        //make and append a save button in each  timeBlockRow
        var saveBtn = document.createElement("column");
        saveBtn.setAttribute("class", "saveBtn col-1");
        timeBlockRowEl.appendChild(saveBtn);


        timeBlockContainerEl.appendChild(timeBlockRowEl);
    }
};

// var editText = function() {
//     //edit text areas created by timeBlockGenerator
//     //save edits to local storage
// }

timeBlockGenerator();

// using a set interval of 1 minute to refresh the color coding of blocks
// var taskMonitor = function() {
    
// }