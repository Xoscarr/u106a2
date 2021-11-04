let important = false;
let formVisible = true;

function toggleImportant(){
   if(!important){
    $("#iImportant").removeClass("far").addClass("fas");
    important = true;
} else {
    $("#iImportant").removeClass("fas").addClass("far");
    important = false;
}
}
 
function saveTask(){
    console.log("Saving Task");

    //read values from the form
    let title = $("#txtTitle").val();    
    let desc = $("#txtDescription").val();
    let date = $("#txtDate").val();
    let location=  $("#txtLocation").val();
    let invitee = $("#txtInvitee").val();


    console.log(title,important, desc, date, location, invitee,);

    clearForm();

}
function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtDate").val("");
    $("#txtLocation").val("");
    $("#txtInvitee").val("");
}

    
    


function toggleForm(){
    if(formVisible){
        $("#section-form").slideUp(300);
    formVisible = false;

    } else{
        $("#section-form").slideDown(300);
        formVisible= true;

        
    }
    // hide #section-form
    
    
}

function init() {
    console.log("task manager");

  // load data 

  // hook events 
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);
  $("#btnTasks").click(toggleForm);
      
  }



window.onload = init;