var num1, num2;
var poruka;

function generateExpression()
{
    num1 = parseInt((Math.random() * 10) + 1);
    num2 = parseInt((Math.random() * 10) + 1);
    poruka = "Koliko je " + num1 + " + " + num2 + "?";
    $("#izraz").attr("placeholder", poruka);
}

$(document).ready(function ()
{
    generateExpression();
    
    $("#name").focus(function ()
    {
        $("#name").css("border", "solid black 1px");
    });
    
    $("#name").blur(function ()
    {
        $("#name").css("border", "solid gray 1px");
    });
    
    $("#surname").focus(function ()
    {
        $("#surname").css("border", "solid black 1px");
    });
    
    $("#surname").blur(function ()
    {
        $("#surname").css("border", "solid gray 1px");
    });
    
    $("#email").focus(function ()
    {
        $("#email").css("border", "solid black 1px");
    });
    
    $("#email").blur(function ()
    {
        $("#email").css("border", "solid gray 1px");
    });
    
    $("#pwd").focus(function ()
    {
        $("#pwd").css("border", "solid black 1px");
    });
    
    $("#pwd").blur(function ()
    {
        $("#pwd").css("border", "solid gray 1px");
    });
    
    $("#message").focus(function ()
    {
        $("#message").css("border", "solid black 1px");
    });
    
    $("#message").blur(function ()
    {
        $("#message").css("border", "solid gray 1px");
    });
    
    $("#izraz").focus(function ()
    {
        $("#izraz").css("border", "solid black 1px");
    });
    
    $("#izraz").blur(function ()
    {
        $("#izraz").css("border", "solid gray 1px");
    });
    
   
    $("#form").submit(function ()
    {
    
        var name = $("#name").val();
        var surname = $("#surname").val();
        var password = $("#pwd").val();
        var email = $("#email").val();
        var flag = true;
        
       
        var regexName = /^[A-Z]/;
        if(regexName.test(name) === false)
        {
            $("#name").css("border", "solid red 1px");
            flag = false;
        }
        
        if(regexName.test(surname) === false)
        {
            $("#surname").css("border", "solid red 1px");
            flag = false;
        }
        
        var regexEmail = /^[a-z0-9\.]{1,}\@{1}([a-z]{1,}\.{1}[a-z]{2,4})$/;
        if(regexEmail.test(email) === false)
        {
            $("#email").css("border", "solid red 1px");
            flag = false;
        }
        
        if(password.length < 7)
        {
            $("#pwd").css("border", "solid red 1px");
            flag = false;
        }
        
        var message = $("#message").val();
        if(message === "")
        {
            $("#message").css("border", "solid red 1px");
            flag = false;
        }
        
        var sol = parseInt($("#izraz").val());
        if(sol !== num1 + num2)
        {
            $("#izraz").css("border", "solid red 1px");
            flag = false;
        }
       
        if(flag === false)
        {
            $("#izraz").val("");
            generateExpression();
        }
        
        return  flag;
    });
});