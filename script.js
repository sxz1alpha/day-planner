$("#container").append('<ul class="listgroup" /ul>')
//creates a for loop that generates the html elements for the project
for (let i = 0; i < 24; i++) {
    $(".listgroup").append(`
        <li class="row time-block"> 
            <div class="hour col-2">${i}:00</div> 
            <input class="col-8" id="input-${i}"></input>
            <button class="saveBtn col-1"></button>
        </li>
        `
    );

    if (i === parseInt(moment().format('H'))) {
        $(`#input-${i}`).addclass('present');
    } else if (i < parseInt(moment().format('H'))) {
        $(`#input-${i}`).addclass('past');
    } // else (i > parseInt(moment().format('H'))) 
      //  $(`#input-${i}`).addclass('future');
 //   };

    
}



//below is my original approach to this assignment. i was really struggling with the concept of the for loop and how i could take the value of i and 
// apply it throughout the rest of the for loop. and by struggling i mean i had no idea. ialso learned from him that ` can be used to make a multi-line string
// something i feel should be taught first day in our course but i dont think was ever mentioned. Any ways i kept my legacy code so you can see how i progressed


// var timeBlockContainerEl = document.querySelector("#container");

// //for loop will auto generate 24 time blocks with editable text area
// var timeBlockGenerator = function() {
   
//     //load saved tasks from local storage


//     for (var i = 0; i < 24; i++) {
//         //creates 24 time blocks
//         var timeBlockRowEl = document.createElement("div");
//         timeBlockRowEl.setAttribute("class", "row justify-content-center");

        
//         // assign each time block an id between 1-24 col-2 and show the time
//         var hourEl = document.createElement("column");
//         hourEl.setAttribute("class", "col-1 hour");
//         timeBlockRowEl.appendChild(hourEl);

//         //creat editable text area inside of each time block col-8
        
//         var taskinputEl = document.createElement("input");
//         taskinputEl.setAttribute("class", "col-9 editBox");
//         timeBlockRowEl.appendChild(taskinputEl);
    
//         //make and append a save button in each  timeBlockRow
//         var saveBtn = document.createElement("column");
//         saveBtn.setAttribute("class", "saveBtn col-1");
//         timeBlockRowEl.appendChild(saveBtn);


//         timeBlockContainerEl.appendChild(timeBlockRowEl);
//     }
// };

// // var editText = function() {
// //     //edit text areas created by timeBlockGenerator
// //     //save edits to local storage
// // }

// timeBlockGenerator();

// // using a set interval of 1 minute to refresh the color coding of blocks
// // var taskMonitor = function() {
    
// // }