var taskText = {
        id: "",
        val: ""
};

    

var timeBlockContainerEl = document.querySelector("#container");


//for loop will auto generate 24 time blocks with editable text area
var timeBlockGenerator = function() {

    //load saved tasks from local storage
    

    for (var i = 0; i < 24; i++) {
        //creates 24 time blocks
        var timeBlockRowEl = document.createElement("a");
        timeBlockRowEl.setAttribute("class", "row justify-content-center");

        
        // assign each time block an id between 1-24 col-2 and show the time
        var hourEl = document.createElement("column");
        hourEl.setAttribute("class", "col-1 hour");
        timeBlockRowEl.appendChild(hourEl);


        //creat editable text area inside of each time block col-8
        
        var taskinputEl = document.createElement("input");
        taskinputEl.setAttribute("class", "col-9 taskInput");
        timeBlockRowEl.appendChild(taskinputEl);
    
        //make and append a save button in each  timeBlockRow
        var saveBtn = document.createElement("button");
        saveBtn.setAttribute("class", "saveBtn col-1");
        saveBtn.setAttribute("id", "saveBtn")
        timeBlockRowEl.appendChild(saveBtn);

        //assigns each input field a unique id
        var blockId = 1;
        $('input').each(function() {
            $(this).attr('id', 'input' + blockId);
            blockId++;
        });
         
        timeBlockContainerEl.appendChild(timeBlockRowEl);
    }
    
    $(".saveBtn").click(function() {
        // this targets the previous sibling and gets its value. in this case the input field right next to the button
        var taskText = $(this).prev().val();
        console.log(taskText);
        
        localStorage.setItem("taskText", JSON.stringify(taskText));
        console.log("saved task to array");
    });
    
};


// get to the point i can console log the input fields with the butrton clicked make shared Id for input field and button

timeBlockGenerator();

// using a set interval of 1 minute to refresh the color coding of blocks
// var taskMonitor = function() {
    
// }