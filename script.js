// Importerar mina jobb via experience.json

async function experience() {
    
    try {
        const response = await fetch("/experience.json");

        if(!response.ok) {
            throw new Error("Kunde inte ladda data...");
        }

        const data = await response.json();
        const myExperience = document.getElementById("experience")
        const jobs = data.educations.jobs;


        for(i = 0; i < jobs.length; i++) {
            const workExperience = jobs[i];
            
            const newJob = document.createElement("div");
            newJob.classList.add("job");

            newJob.innerHTML = `
            <h3 class="job-title" id="job-title">${workExperience.title}</h3>
            <p class="full-time" id="full-time">${workExperience.formOfEmployment}</p>

            <div class="work">
                <img src="../img/About/mdi_office-building.svg" alt="office building">
                <p>${workExperience.company}</p>
            </div>

            <div class="time">
                <img src="../img/About/carbon_calendar.svg" alt="calendar">
                <p class="time">${workExperience.timeOfEmployment}</p>
            </div>

            <div class="location">
                <img src="../img/About/carbon_location.svg" alt="location">
                <p>${workExperience.location}</p>
            </div>
            `;

            myExperience.appendChild(newJob);

            const hr = document.createElement("hr");
            myExperience.appendChild(hr);

            console.log(workExperience);

        }



    } catch (error) {
        console.error("Error: Fel vid hämtning av data", error);
    }

}
experience();

// Importerar mina utbildningar via experience.json

async function educations() {

    try {
        const responseEducation = await fetch("/experience.json");

        if(!responseEducation.ok) {
            throw new Error("Kunde inte ladda data...");
        }

        const dataEducation = await responseEducation.json();

        const educations = document.getElementById("education");
        const study = dataEducation.educations.studies;

        for(i = 0; i < study.length; i++) {
            myStudies = study[i];

            const newStudy = document.createElement("div");
            newStudy.classList.add("knowledge");


            newStudy.innerHTML = `
            <h3 class="education-title">${myStudies.title}</h3>
            <p class="full-time">${myStudies.formOfStudy}</p>

            <div class="fullstack study">
                <img src="../img/About/mdi_office-building.svg" alt="office building">
                <p>${myStudies.school}</p>
            </div>

            <div class="time">
                <img src="../img/About/carbon_calendar.svg" alt="calendar">
                <p>${myStudies.timeForStudies}</p>
            </div>

            <div class="location">
                <img src="../img/About/carbon_location.svg" alt="location">
                <p>${myStudies.location}</p>
            </div>
            `;

            educations.appendChild(newStudy);

            const hr = document.createElement("hr");
            educations.append(hr);
            console.log(myStudies);
        }


    } catch(error) {
        console.error("Error: Fel vid hämtning av data", error);
    }

}
educations();


// Nav-list i hamburgermenyn i mobilversion...


const hamburgerMenu = document.getElementById("hamburger-menu1");
const slidebar = document.getElementById("slidebar");

hamburgerMenu.addEventListener("click", click);
function click() {
    hamburgerMenu.classList.toggle('active');
    slidebar.classList.toggle('active');
    document.getElementById("hej").innerHTML = "hej";

}
