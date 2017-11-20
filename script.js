$(document).ready(function(){
    //Min array
    var attGoraLista = [
        "Städa rummet",
        "Laga mat",
        "tvätta",
        "planera morgondagen"
    ]

    //Min function för min array
    function attGoraLista(){
        
            var printList = ""
        
            for(var i = 0; i < deltagare.length; i++) { 
            }
        } 

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
                            sessionStorage.ourUser = $(".userEmail").val();
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
    }

    $(".signoutLink").click(function(){
        $(".header2").hide();
        $(".header1").show();
        $(".footer").show();
        $(".hejString").hide();
    });
});

