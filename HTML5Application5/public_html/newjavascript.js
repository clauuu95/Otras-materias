$(document).ready(function(){
    $("x").hide();
    $("y").hide();
    $("#msj").hide();
    $("#ingresar").on("click", function(){
        
        var user = $("#username").val();
        var pass = $("#password").val();

        if(user === "pepe" && pass === "123456"){
            $("#msj").show();
            $("#msj").append("<h3>¡Bienvenido!</h3>");
        }/*if(user === null || user.length === 0 || pass === null || pass.length === 0){
            if(user === null || user.length === 0){
                $("x").show();
                $("x").append("<p>Usuario Invalido</p>");
            }else if(pass === null || pass.length === 0){
                $("y").show();
                $("y").append("<p>Contraseña Invalida</p>");
            }
        }else if(user === null && pass === null){
            $("x").show();
            $("x").append("<p>Usuario Invalido</p>");
            $("y").show();
            $("y").append("<p>Contraseña Invalida</p>");
        }*/else{
            $("#msj").show();
            $("#msj").append("<h3><strong>¡Error!</strong> Haz algunos cambios antes de volver a enviar el formulario</h3>");
            
        }
    });
});