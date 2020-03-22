
// Step 1: Set up background image on html
$(document).ready(function () {

    console.log("check my work")


    // Step 2: create a function on js.app on click

    // Step 3: set up on click to change background image to the next

    var Homeworks = $("#home works").val()
    $("#submit-btn").on("click", function (event) {
        event.preventDefault()



        // slide show screenshots pictures for homes works
        function changeimage(hoimeworks) {
            $(document.body).attr("class", Homeworks);
        };

    });

    var currentImageIndex=0

    var numOfImages = $("#carousel-items").children().length-1 

    $(".right-handle").on("click", function(){
        
        $("#carousel-items").children().eq(currentImageIndex).css("display","none")
        if(currentImageIndex < numOfImages){
            currentImageIndex +=1
        
        }
        else{
            currentImageIndex=0 

        }
        $("#carousel-items").children().eq(currentImageIndex).css("display", "block")

    })


    $(".left-handle").on("click", function () {

        $("#carousel-items").children().eq(currentImageIndex).css("display", "none")
        if (currentImageIndex > numOfImages) {
            currentImageIndex -=1

        }
        else {
            currentImageIndex=0

        }
        $("#carousel-items").children().eq(currentImageIndex).css("display", "block")

    })

    });
