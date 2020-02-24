// $(document).ready(function(){
//     $("#click").onclick(function() {
//             $.get("https://api.github.com/users/1393bella", function(data){
//                 $("h1").html(data.login);
//           })
//     })
// })

$(document).ready(function () {
    $("#click").click(function () {
        $.get("https://api.github.com/users/1393bella", function(data) {
            $("h1").html(data.login);
        })

    })
})
