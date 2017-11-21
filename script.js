$(document).ready(function(){
    //Min array   
    var ourUser = "test"
    var ourPassword = "password"

    var attGoraLista = [
        "Städa rummet",
        "Laga mat",
        "tvätta",
        "planera morgondagen",
    ]

    //Min function för min array
    function skrivautlista(){
        var arraydiv = document.querySelector(".array");
        //Det nedanför är samma som lista = <ul> </ul>
        var ul = document.createElement("ul");
        for (var i = 0; i < attGoraLista.length; i++){
            var li = document.createElement("li");
            li.innerHTML = attGoraLista[i];
            ul.appendChild(li);
        }
        arraydiv.appendChild(ul);
    }
    if (sessionStorage.ourUser != null){
        inloggad();
    } else {
            start();
            // Klicka på logga in
            $(".loggaIn").submit(function(e){
                e.preventDefault();
            
                if (ourUser == $(".userEmail").val() && ourPassword == $(".userPassword").val()) {
                        // Dölj inlogg Visa welcome + user
                        sessionStorage.ourUser = $(".userEmail").val();
                        inloggad();
                } else {
                        fellosen();
                        }
            });
        }
    $(".logout").click(function(){
        sessionStorage.clear();
        location.reload();
    });
});




function start(){
    $(".forgott").hide();
    $(".array").hide();
    $(".logout").hide();
}
function inloggad(){
    $(".loggaIn").hide();
    $(".hejString").text("Welcome " + sessionStorage.ourUser);
    $(".array").show();
    $(".forgott").hide();
    $(".logout").show();
}
function fellosen(){
    $(".array").hide();
    $(".forgott").show();
}



/*     var attGoraLista = [
        "Städa rummet",
        "Laga mat",
        "tvätta",
        "planera morgondagen",
    ]

    //Min function för min array
    function skrivautlista(){
        var arraydiv = document.querySelector(".array");
        //Det nedanför är samma som lista = <ul> </ul>
        var ul = document.createElement("ul");
        for (var i = 0; i < attGoraLista.length; i++){
            var li = document.createElement("li");
            li.innerHTML = attGoraLista[i];
            ul.appendChild(li);
        }
        arraydiv.appendChild(ul);
    }


    !!!!OBS TILL INLOGGAD FUNKTIONEN!!!!  ---> skrivautlista(); 

 */