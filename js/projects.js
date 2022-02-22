var orden = 0;

const requestURL = 'data/projects.json';

const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

//json projects variable
request.onload = function() {
    const projects = request.response;
    createProject(projects);
    clickProject(projects);
};

//Where to add the elements
const divProjects = document.getElementById("all-projects");
const divFeaturedProjects = document.getElementById("featured-projects");

var lenghtProjects = 0;

/* GLOBAL VARIABLES */
let newDiv3, divProject;

//Showing the projects
function createProject(json) {
lenghtProjects = json["projects"].length;
for (i = 0; i < json["projects"].length; i++) {
    //FEATURED PROJECT 
    if (json["projects"][i]["featured"] == "yes") {
        divProject = document.createElement("div");
        divProject.className = "featured-project-box project " + json["projects"][i]["type"];
        divProject.dataAos = "fade-up";
        divProject.dataAosDuration = "600";
        divFeaturedProjects.append(divProject);

        let divTransparent2 = document.createElement("div");
        divTransparent2.className = "transparent-box";
        divTransparent2.id = i + json["projects"].length;
        divProject.append(divTransparent2);

        let newDiv = document.createElement("div");
        newDiv.className = "project-info";
        divProject.append(newDiv);

        let newP3 = document.createElement("p");
        newP3.className = "project-title";
        newP3.textContent = json["projects"][i]["title"];
        newDiv.append(newP3);

        let newP4 = document.createElement("p");
        newP4.textContent = json["projects"][i]["short-description"];
        newDiv.append(newP4);

        newDiv3 = document.createElement("div"); 
        newDiv3.classList = "project-tags";
        newDiv.append(newDiv3);

        let newHr = document.createElement("hr");
        newDiv.append(newHr);

        let newP5 = document.createElement("p");
        newP5.className = "project-title";
        newP5.textContent = "Project info:";
        newDiv.append(newP5);

        let newP6 = document.createElement("p");
        newP6.innerHTML = "<strong>Author:</strong> " + json["projects"][i]["author"] + "<br>";
        newDiv.append(newP6);

        let newP7 = document.createElement("p");
        newP7.innerHTML = "<strong>Date:</strong> " + json["projects"][i]["year"] + "<br>";
        newDiv.append(newP7);

        if (json["projects"][i]["client"] != "") {
            let newP8 = document.createElement("p");
            newP8.innerHTML = "<strong>Client:</strong> " + json["projects"][i]["client"] + "<br>";
            newDiv.append(newP8);
        }

        if (json["projects"][i]["awards"] != "") {
            let newP9 = document.createElement("p");
            newP9.innerHTML = "<strong>Awards:</strong> " + json["projects"][i]["awards"] + "<br>";
            newDiv.append(newP9);
        }

        let newDiv2 = document.createElement("div");
        newDiv2.className = "project-img";
        newDiv2.style.backgroundImage = "url('images/projects/"+ json["projects"][i]["cover-img"] +"')";
        divProject.append(newDiv2);

        tags();
    }

    //ALL PROJECTS
    divProject = document.createElement("div");
    divProject.className = "project-box  project " + json["projects"][i]["type"];
    divProject.id = i;
    divProjects.append(divProject);

    let divTransparent = document.createElement("div");
    divTransparent.className = "transparent-box";
    divTransparent.id = i;
    divProject.append(divTransparent);

    let newP = document.createElement("p");
    newP.className = "project-title";
    newP.textContent = json["projects"][i]["title"] + " | " + json["projects"][i]["year"];
    divProject.append(newP);

    let contentDiv = document.createElement("div");
    divProject.append(contentDiv);

    let newP2 = document.createElement("p");
    newP2.textContent = json["projects"][i]["short-description"];
    contentDiv.append(newP2);

    newDiv3 = document.createElement("div"); 
    newDiv3.classList = "project-tags";
    contentDiv.append(newDiv3);

    let newImg = document.createElement("img");
    newImg.src= "images/projects/"+json["projects"][i]["cover-img"];
    divProject.append(newImg);

    tags();
}

    clasification();
}

function tags() {
    /* ADDING TAGS */
    if (divProject.classList.contains("virtualreality")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "VIRTUAL REALITY";
        newDiv3.append(class1);
    } if (divProject.classList.contains("videogames")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "VIDEO GAMES";
        newDiv3.append(class1);
    } if (divProject.classList.contains("realtime3d")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "REAL TIME 3D";
        newDiv3.append(class1);
    } if (divProject.classList.contains("3dmodelling")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "3D MODELLING";
        newDiv3.append(class1);
    } if (divProject.classList.contains("proceduralgeneration")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "PROCEDURAL GENERATION";
        newDiv3.append(class1);
    } if (divProject.classList.contains("branding")) {
        let class1 = document.createElement("p"); 
        class1.classList = "tag";
        class1.textContent = "BRANDING";
        newDiv3.append(class1);
    }
}

function clasification() {
    //Clasificación
    var allButton = document.getElementById("all");
    var virtualrealityButton = document.getElementById("virtualreality");
    var realtime3dButton = document.getElementById("realtime3d");
    var modellingButton = document.getElementById("3dmodelling");
    var videogamesButton = document.getElementById("videogames");
    var proceduralgenerationButton = document.getElementById("proceduralgeneration");
    var brandingButton = document.getElementById("branding");

    var allProjects = document.getElementsByClassName("project-box");
    var virtualrealityProjects = document.getElementsByClassName("virtualreality");
    var realtime3dProjects = document.getElementsByClassName("realtime3d");
    var modellingProjects = document.getElementsByClassName("3dmodelling");
    var videogamesProjects = document.getElementsByClassName("videogames");
    var proceduralgenerationProjects = document.getElementsByClassName("proceduralgeneration");
    var brandingProjects = document.getElementsByClassName("branding");

    allButton.addEventListener("click", showAll);
    virtualrealityButton.addEventListener("click", showVirtualreality);
    realtime3dButton.addEventListener("click", showRealtime3d);
    modellingButton.addEventListener("click", showModelling);
    videogamesButton.addEventListener("click", showVideogames);
    proceduralgenerationButton.addEventListener("click", showProceduralgeneration);
    brandingButton.addEventListener("click", showBranding);

    function showAll() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 1;
            allProjects[i].style.display = "flex";
        }
        allButton.classList.add("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.remove("active");
    }

    function showVirtualreality() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < virtualrealityProjects.length; i++) {
            virtualrealityProjects[i].style.opacity = 1;
            virtualrealityProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.add("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.remove("active");
    }

    function showRealtime3d() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < realtime3dProjects.length; i++) {
            realtime3dProjects[i].style.opacity = 1;
            realtime3dProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.add("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.remove("active");
    }

    function showModelling() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < modellingProjects.length; i++) {
            modellingProjects[i].style.opacity = 1;
            modellingProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.add("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.remove("active");
    }

    function showVideogames() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < videogamesProjects.length; i++) {
            videogamesProjects[i].style.opacity = 1;
            videogamesProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.add("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.remove("active");
    }

    function showProceduralgeneration() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < proceduralgenerationProjects.length; i++) {
            proceduralgenerationProjects[i].style.opacity = 1;
            proceduralgenerationProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.add("active");
        brandingButton.classList.remove("active");
    }

    function showBranding() {
        for (var i = 0; i < allProjects.length; i++) {
            allProjects[i].style.opacity = 0;
            allProjects[i].style.display = "none";
        }
        for (var i = 0; i < brandingProjects.length; i++) {
            brandingProjects[i].style.opacity = 1;
            brandingProjects[i].style.display = "flex";
        }
        allButton.classList.remove("active");
        virtualrealityButton.classList.remove("active");
        realtime3dButton.classList.remove("active");
        modellingButton.classList.remove("active");
        videogamesButton.classList.remove("active");
        proceduralgenerationButton.classList.remove("active");
        brandingButton.classList.add("active");
    }
}

function clickProject(json) {
    var projects = document.getElementsByClassName("transparent-box");

    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener("click", function(event) {
        var projectNumber = event.target.id;

        console.log(projectNumber);
        console.log(lenghtProjects);
        if (projectNumber >= lenghtProjects) {
            projectNumber = projectNumber - lenghtProjects;
        }
        localStorage.setItem("projectNumberKey", json["projects"][projectNumber]["keyword"]);

        window.location.href = "project-info.html" + "#" + json["projects"][projectNumber]["keyword"];
        });
    }
}