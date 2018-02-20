//jquery start
$(document).ready(function(){
//adds an annoying fade out when input is hovered over 
//adds text to tryAgain button when fadeToggle ends
    $("#tryAgain").hide();
    $(".fade").hover(function(){
        $(this).fadeToggle("fast");        
        $("#tryAgain").toggle();
        $("#tryAgain").text("would you like to try again");
        });

//adds text when btn button is clicked
    $("#btn").click(function(){
        $(returnText).text(" Yep you click it ");
    });

//hides hidable elements when they double clicked
    $(".hidable").dblclick(function(){
        $(this).hide();
    });

//adds text when tryAgain button is clicked
    $("#tryAgain").click(function(){
        $("#jk").text("Sorry I was just kidding to late to enter text now");
    });

//changes font size of the jk when any hidable element is clicked once
//jk is hidable too so if jk is clicked twice it will be hidden
    $(".hidable").click(function(){
        $("#jk").css("font-size","100px");
});

//defines divs size and color then adds color changing when hover
    $("div").css("background-color","aqua");
    $("div").css("height","100px");
    $("div").css("width","100px");
    $("div").hover(function(){
        $(this).css("background-color","green")
   },function(){
       $(this).css("background-color","blue")
    });
//changes div background back to aqua when dblclicked only last until mouse leaves div 
    $("div").dblclick(function(){
        $(this).css("background-color","aqua")
    });

//makes hidable elements font color change when hovered
   $(".hidable").hover(function(){
    $(this).css("color","red")
},function(){
   $(this).css("color","black")
});

});
//jquery end