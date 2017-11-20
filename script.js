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

    //Detta är den nya koden ner till rad 55:
    if (sessionStorage.ourUser != null)
    {
        $(".hejString").append(" Welcome " + sessionStorage.ourUser); 
        $(".array").show();
        $(".header1").hide();
        $(".header2").show();
        $(".forgott").hide();
    } else {

                $(".welcome").hide();
                $(".forgott").hide();
                $(".header2").hide();
                // Klicka på logga in
                $(".loggaIn").click(function(){
                
                    if (ourUser == $(".userEmail").val() && ourPassword == $(".userPassword").val()) {
                            // Dölj inlogg Visa hello
                            sessionStorage.ourUser;
                            $(".hejString").append(" Welcome " + $(".userEmail").val() );
                            $(".array").show();
                            $(".header1").hide();
                            $(".header2").show();
                            $(".forgott").hide();
                            document.getElementById("array").innerHTML = printList;
                        } else {
                            console.log("fel ifyllt")
                            $(".loginForm").hide();
                            $(".forgott").show();
                            $(".signout").hide();
                        }
                });
    }

    $(".signoutLink").click(function(){
        $(".header2").hide();
        $(".header1").show();
        $(".footer").show();
        $(".hejString").hide();
    });
});
array.append(printList)
