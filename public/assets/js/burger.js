$(function(){
    $(".dvrDis").on("click", function(e){
        const id = $(this).data("id");
        let dvrd = {
            devoured: 1
        };
     
        $.ajax("/api/burgers/" +id, {
            type:"PUT",
            devoured: 1
        }).then(
            function(){
                console.log("changed to devoured....");
                location.reload();
            }
        )
    })

    $("#submit").on("click", function(e){
       e.preventDefault();
         let nameB = $("#bIn").val().trim()
        let newBurger ={
            burger: nameB,
            devoured: 0
        };
        //Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                location.reload();
            }
        )
    });

    $(".delDis").on("click", function(e){
        const id = $(this).data("id");

        //send the DELETE request.
        $.ajax("/api/burgers/" +id, {
            type: "DELETE"
        }).then(
            function(){
                location.reload();
            }
        );
    });

});