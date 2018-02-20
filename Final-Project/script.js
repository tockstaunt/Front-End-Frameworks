

function loadRepo(url, callback) {
  const gitHubRequest = new XMLHttpRequest();
  gitHubRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      callback(this);
    };
  }
gitHubRequest.open("GET", url, true);
gitHubRequest.send();    
}
    

function loadRepoCallback(gitHubRequest) {
    //parses ajax response and forEach
  gitreturn =  gitHubRequest.responseText;
  gitreturn = JSON.parse(gitreturn);
  gitreturn.forEach(forEachName);
}

function forEachName(){
     //creates list item 
  const listItem = document.createElement("li");
  let listText = document.createTextNode(gitreturn[0].name);
     //creates a link to repo
  const repoLink = document.createElement("a");
  repoLink.setAttribute("href", gitreturn[0].html_url);
  repoLink.setAttribute("target","_blank");
  repoLink.setAttribute("id","repoLink")
  repoLink.appendChild(listText);
  listItem.appendChild(repoLink);
  document.getElementById("ulRepo").appendChild(listItem);
}


$(document).ready(function(){

//switches images when clicked
    $("#img2").hide(); 
    $("#img3").hide();

    $("#img1").click(function(){
        $("#img1").hide();
        $("#img2").show();        
    });

    $("#img2").click(function(){
        $("#img2").hide();
        $("#img3").show();        
    });

    $("#img3").click(function(){
      $("#img3").hide();
      $("#img1").show();
    })
//end of image switch
    $(".ico").css("heigth","32px");
    $(".ico").css("width","32px");
    $(".ico").hover(function(){
      $(this).animate({width:"64px"});
      $(this).animate({heigth:"64px"});
    },function(){
      $(this).animate({width:"32px"});
      $(this).animate({heigth:"32px"});
    });

    $(".btn").click(function(){
      $(this).remove();
    });
});