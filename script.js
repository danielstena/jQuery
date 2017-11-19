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

    sessionStorage.ourUser = "test"
    sessionStorage.ourPassword = "password"
    // Kör denna kod när sidan laddas
    var ourUser = "test"
    var ourPassword = "password"

    $(".welcome").hide();
    $(".forgott").hide();
    $(".header2").hide();
    // Klicka på logga in
    $(".loggaIn").click(function(){
        
        if (sessionStorage.ourUser == $(".userEmail").val() && sessionStorage.ourPassword == $(".userPassword").val()) {
                // Dölj inlogg Visa hello
                $(".hejString").append(" Welcome " + $(".userEmail").val() );
                $(".array").show();
                $(".header1").hide();
                $(".header2").show();
                $(".forgott").hide();
            } else {
                console.log("fel ifyllt")
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
array.append(printList)
