//function that GETs info.json and places in <p>s on webpage when clicked
function einsteinBio(){
    const einBio = new XMLHttpRequest();
    einBio.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200 || this.status == 304){
                let einBioJson = JSON.parse(this.responseText);                
                document.getElementById("einBioContent").innerHTML = einBioJson.quote1;
                document.getElementById("einBioContent1").innerHTML = einBioJson.quote2;
                document.getElementById("einBioContent2").innerHTML = einBioJson.quote3;

            }
    }
    einBio.open("GET", "info.json", true);
    einBio.send();
}

//not sure if i like the spacing on this css elements changes
$(document).ready(function(){;
    $("img").css("margin-left","30%");
    $("img").css("margin-right","auto");
    $("img").css("width","25%");
    $(".para").css("width","50%");
    $(".para").css("margin","1%");
    $(".para").css("margin-left","15%");
    $(".para").css("margin-right","auto");
    $("button").css("margin-left","30%");
    $("button").css("margin-right","auto");
    $(".h1E").css("margin-left","15%");
    $(".h1E").css("margin-right","auto");
});