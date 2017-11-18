    var attGoraLista = [
        "Städa rummet",
        "Laga mat",
        "tvätta",
        "planera morgondagen"
    ]

function attGoraLista(){

    var printList = ""

    for(var i = 0; i < deltagare.length; i++) {
       
    }
} 

$(document).ready(function(){
    // Kör denna kod när sidan laddas
    var ourUser = "test"
    var ourPassword = "password"


    
    $(".welcome").hide();
    $(".forgott").hide();
    $(".header2").hide();
    // Klicka på logga in
    $(".loggaIn").click(function(){
        
        if (ourUser == $(".userEmail").val() && ourPassword == $(".userPassword").val()) {
                console.log("user mail is ok");
                // Dölj inlogg Visa hello
                $(".hejString").append(" Welcome " + $(".userEmail").val() );
                $(".header1").hide();
                $(".header2").show();
                $(".forgott").hide();
            } else {
                console.log("fel ifyllt")
                // Dölj inlogg visa forgotPass
                $(".loginForm").hide();
                $(".forgott").show();
                $(".signout").hide();
            }
    });
    $(".signoutLink").click(function(){
        $(".header2").hide();
        $(".header1").show();
        $(".footer").show();
        $(".hejString").hide();

    });

});
