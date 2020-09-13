$(function(){
    $(".dvrDis").on("click", function(e){
        console.log("clicked");
        const id = $(this).data("id");
        let devrd = $(this).data(true);
        $.ajax("/api/burgers" +id,{
            type:"PUT",
            data: devrd
        }).then(
            function(){
                location.reload();
            }
        )
    })


    $("#submit").on("submit", function(e){
       e.preventDefault();
        let nameB = $("#bin").val().trim()
        console.log("Bin=" + nameB);
       let newBurger ={
           name: $("#bIn").val().trim(),
           devoured: $("[burger=devoured]:checked").val.trim()
       };
        console.table(burgerStr);

        //Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                location.reload();
            }
        )
    })

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