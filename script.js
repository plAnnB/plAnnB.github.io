$(document).ready(function() {
    
    //display the page description when the help ID component is clicked.
    $("#help").click(function(){
        $("#info").toggle();
    });
    //Display the travel gallery, and hide the swimming gallery when components with ID travel are clicked.
    $("#travel").click(function(){
        $("#travelling").slideDown();
        $("#swimming").slideUp();
    });
    // Display the swimming gallery, and hide the travel gallery when components with ID swim are clicked.
    $("#swim").click(function(){
        $("#swimming").slideDown();
        $("#travelling").slideUp();
    });
});
