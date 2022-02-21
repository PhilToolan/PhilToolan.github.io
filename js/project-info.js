var orden = 0;

const requestURL = 'data/projects.json';

const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

var projectNumber;
var projectKeyword;

//json projects variable
request.onload = function() {
    const projects = request.response;
  
    projectKeyword = localStorage.getItem("projectNumberKey");
  
    //Analizamos la URL
    var actual = window.location+'';
    var split = actual.split("#");
    var id = split[split.length-1];
    projectKeyword = id;
    
    createProject(projects);
};

//Elements to change
const project_title = document.getElementById("project-title");
const project_date = document.getElementById("project-date");
const project_author = document.getElementById("project-author");
const project_client = document.getElementById("project-client");
const project_awards = document.getElementById("project-awards");
const project_long_description = document.getElementById("project-long-description");
const project_buttons = document.getElementById("project-buttons");
const project_role = document.getElementById("project-role");
const project_img_cover = document.getElementById("project-img-cover");
const project_images = document.getElementById("project-images");

const project_client_title = document.getElementById("project-client-title");
const project_awards_title = document.getElementById("project-awards-title");

//Showing the projects
function createProject(json) {
    for (i = 0; i < json["projects"].length; i++) {
      if (json["projects"][i]["keyword"] == projectKeyword) {
          projectNumber = i;
      }
    }

    var projectValue = projectNumber;

    project_title.innerHTML = json["projects"][projectValue]["title"];
    project_date.innerHTML = json["projects"][projectValue]["year"];
    project_author.innerHTML = json["projects"][projectValue]["author"];
    if (json["projects"][projectValue]["client"] != "") {
        project_client.innerHTML = json["projects"][projectValue]["client"];
        project_client_title.innerHTML = "Client";
    }

    if (json["projects"][projectValue]["awards"] != "") {
        project_awards.innerHTML = json["projects"][projectValue]["awards"];
        project_awards_title.innerHTML = "Awards";
    }
    project_long_description.innerHTML = json["projects"][projectValue]["long-description"];
    project_role.innerHTML = json["projects"][projectValue]["role"];

    if (json["projects"][projectValue]["client-url"] == "") {
        project_client.classList.remove("project-link");
    }

    if (json["projects"][projectValue]["awards-url"] == "") {
        project_awards.classList.remove("project-link");
    }

    /* BUTTONS */
    if (json["projects"][projectValue]["buttons"] != "") {
        for (i = 0; i < json["projects"][projectValue]["buttons"].length; i++) {
            let newA = document.createElement("a");
            newA.className = "button";
            newA.textContent = json["projects"][projectValue]["buttons"][i][0];
            newA.href = json["projects"][projectValue]["buttons"][i][1];
            newA.target = "blank";
            project_buttons.append(newA);
        }
    }

    /* IMAGES */
    project_img_cover.style.backgroundImage = "url('images/projects/"+json["projects"][projectValue]["cover-img"]+"')";

    if (json["projects"][projectValue]["images"] != "") {
        for (i = 0; i < json["projects"][projectValue]["images"].length; i++) {
            if (json["projects"][projectValue]["images"][i][1] == "two") {
                let newImg = document.createElement("img");
                newImg.className = "img-two";
                newImg.src = "images/projects/" +json["projects"][projectValue]["images"][i][0];
                project_images.append(newImg);
            } else if (json["projects"][projectValue]["images"][i][1] == "one") {
                let newImg = document.createElement("img");
                newImg.className = "img-one";
                newImg.src = "images/projects/" +json["projects"][projectValue]["images"][i][0];
                project_images.append(newImg);
            }  else if (json["projects"][projectValue]["images"][i][1] == "video") {
                let newVideo = document.createElement("video");
                newVideo.className = "img-video";
                newVideo.autoplay = "true";
                newVideo.loop = "true";
                newVideo.muted = "true";
                project_images.append(newVideo);

                let newSource = document.createElement("source");
                newSource.src = "images/projects/" +json["projects"][projectValue]["images"][i][0];
                newSource.type = "video/mp4";
                newVideo.append(newSource);
            } 
        }
    }
}