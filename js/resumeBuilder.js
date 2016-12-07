/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* $("#main").append("Tony Lyu"); */

 var awesomeThoughts = "I am Tony and I am AWESOME!";
 console.log(awesomeThoughts);

 var name = "Tony LYU";
 var role = "Software Engineer";

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var skills = [Java, C, Android, JavaScript]
 
 var bio = {
     "name" : name,
     "role" : role,
     "contacts" : {
		 "mobile" : "+86-177-2761-6451",
		 "email" : "tony.lv@auchan.com",
		 "twitter" : "TonyRideBike",
		 "github" : "TonyRideBike",
		 "blog" : "I don't have a blog",
		 "location" : "Guangzhou, China."
	 },
	 "bioPic" : "images/fry.png",
	 "welcomeMsg" : "Lorem ipsum dolor sit amet etc etc etc.",
	 "skills" : skills
 };
 
 
 var work = {
/* 	 "employer" : "Auchan International Corporate",
	 "title" : role,
	 "dates" : "Since April 2016",
	 "location" : "Guangzhou, China",
	 "description" : "it's my current job" */
 };
 work.position = role;
 work.employer = "Auchan";
 work.years = 0.5;
 
 var education = {
/* 	 "name" : "JLU",
	 "dates" : "September 2010 - July 2014",
	 "degree" : "Bachelor's Degree of Engineering",
	 "location" : "Changchun, Jilin, China",
	 "major" : "Communication Engineering" */
 };
 education["name"] = "Jilin University";
 education["years"] = "2010 - 2014";
 education["city"] = "Changchun, Jilin, China";
 