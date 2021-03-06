/*
This is empty on purpose! Your code to build the resume will go here.
*/

/* $("#main").append("Tony Lyu"); */

// var awesomeThoughts = "I am Tony and I am AWESOME!";
console.log("Hello World!");
// var role = "Software Engineer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
    "name": "Tony Lyu",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "+86-177-2761-6451",
        "email": "tony.lv@auchan.com",
        "twitter": "TonyRideBike",
        "github": "https://github.com/TonyRideBike",
        "blog": "I don't have a blog :(",
        "location": "Guangzhou, China."
    },
    "bioPic": "images/tonyridebike.png",
    "welcomeMsg": "Lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "Java",
        "C",
        "Android Telephony",
        "JavaScript",
        "driving"
    ]
};

var work = [
    {
        "employer": "Samsung Electronic",
        "title": "Software Engineer",
        "dates": "Jul. 2014 - Mar. 2016",
        "location": "Guangzhou, China",
        "description": "Android Telephony Framework & RIL Engineer"
    },
    {
        "employer": "Auchan International Corporate",
        "title": "Software Engineer",
        "dates": "Since Apr. 2016",
        "location": "Guangzhou, China",
        "description": "it's my current job."
    }
];

var projects = [
    {
        "title": "Flagship Android Smart phone development",
        "dates": "Feb. 2015 - Oct. 2015",
        "description": "In duty of seting up Android Telephony configuration, solving concerned issues, and providing technical support to other teams on issues with Android telephony framework or RIL related.",
        "image": "images/w2016.jpg"
    }
];

projects.display = function() {
    if(projects.length > 0) {
        projects.forEach(function(project_entry){
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project_entry.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project_entry.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project_entry.description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project_entry.image));
        });
    }
};

var education = {
    "schools": [
        {
            "name": "JLU",
            "dates": "Sept. 2010 - Jul. 2014",
            "degree": "Bachelor's Degree of Engineering",
            "location": "Changchun, Jilin, China",
            "major": "Communication Engineering"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "Dec. 7 2016 - today",
            "url": "https://github.com/TonyRideBike/frontend-nanodegree-resume"
        },
        {
            "title": "Android Development for Beginners",
            "school": "Udacity",
            "dates": "Feb. 2016",
            "url": ""
        }
    ]
};

// education["name"] = "Jilin University";
// education["years"] = "2010 - 2014";
// education["city"] = "Changchun, Jilin, China";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// $("#header").append(work["position"]);
// $("#header").append(education.name);

// $("#topContacts").append(HTMLbioPic.replace("%data%", bio.bioPic));

if (bio.skills.length > 0) {
    // console.log("length of skills = " + bio.skills.length);
    $("#header").append(HTMLskillsStart);
    for(var i in bio.skills) {
        // console.log(skill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
    // for (var i = bio.skills.length - 1; i >= 0; i--) {
    //     console.log("what happend?");
    //     var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    //     $("#skills").append(formattedSkill);
    // };
    // $("#skills").append(HTMLskills);
};

// if (work.length > 0) {
//     // for(var i in work) {
//     //     $("#workExperience").append(HTMLworkStart);
//     //     var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
//     //     var formattedTitle = HTMLworkTitle.replace("%data%", work[i].title);
//     //     $(".work-entry:last").append(formattedEmployer + formattedTitle);
//     // }
//     work.forEach(function(work_entry){
//         console.log(work_entry);
//         $("#workExperience").append(HTMLworkStart);
//         var formattedEmployer = HTMLworkEmployer.replace("%data%", work_entry.employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", work_entry.title);
//         $(".work-entry:last").append(formattedEmployer + formattedTitle);
//         $(".work-entry:last").append(HTMLworkDates.replace("%data%", work_entry.dates));
//         $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work_entry.location));
//         $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work_entry.description));
//     });
// };

function displayWork(){
    if (work.length > 0) {
    // for(var i in work) {
    //     $("#workExperience").append(HTMLworkStart);
    //     var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
    //     var formattedTitle = HTMLworkTitle.replace("%data%", work[i].title);
    //     $(".work-entry:last").append(formattedEmployer + formattedTitle);
    // }
        work.forEach(function(work_entry){
            // console.log(work_entry);
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work_entry.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work_entry.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work_entry.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work_entry.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work_entry.description));
        });
    };
}

displayWork();
projects.display();

function inName(name_string){
    name_string  = name_string.trim().split(" ");
    name_string[1] = name_string[1].toUpperCase();
    name_string[0] = name_string[0].slice(0,1).toUpperCase() + name_string[0].slice(1).toLowerCase();
    return name_string[0] + " " + name_string[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
