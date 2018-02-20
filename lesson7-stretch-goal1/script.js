/* Leverage your knowledge of AJAX and jQuery to build a web page that allows you to change the content of the page on the click of a button.

You should have the following:

    Header
    Footer
    Image

When the button is clicked, the content in each element should change(i.e. Image should change to another image etc..). */
//change header function
function changeHeader(){
    const newHeader = new XMLHttpRequest();
    newHeader.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200 || this.status == 304) {
            document.getElementById("newHeader").innerHTML = this.responseText;
        }
    };
    newHeader.open("GET", "header.txt", true);
    newHeader.send();
}
//change footer function
function changeFooter() {
    const newFooter = new XMLHttpRequest();
    newFooter.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200 || this.status == 304) {
            document.getElementById("newFooter").innerHTML = this.responseText;
        }
    };
    newFooter.open("GET", "footer.txt", true);
    newFooter.send();
}

$(document).ready(function(){
    
    $("#img1").css("height","25%");
    $("#img1").css("width","25%");
    $("#img2").hide();
    $("#changeImg2").hide();

    $("#changeImg").click(function(){
        $("#img1").hide();
        $("#changeImg").hide()
        $("#img2").show();
        $("#img2").css("height","25%");
        $("#img2").css("width","25%");
        $("#changeImg2").show();
    });

    $("#changeImg2").click(function(){
        $("#img2").hide();
        $("#changeImg2").hide()
        $("#img1").show();
        $("#img1").css("height","25%");
        $("#img1").css("width","25%");
        $("#changeImg").show();
    });

    });

        

    


