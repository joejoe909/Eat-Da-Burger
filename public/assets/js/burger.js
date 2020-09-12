//this will be diffrent from the cats app because we need to have a main submit button and a delte button for each
//burger we add.abs
$(function(){


    $("#submit").on("submit", function(e){
       e.preventDefault();
       let burgerStr = $("#burgerTA").val().trim();
        console.table(burgerStr);

        //Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerStr
        }).then(
            function(){
                
            }
        )
    })

   

});