var firstSection = {"Profile Summary":"Profile Summary: Software development professional with key projects and exposure to good number of Programming Languages-Java, Shell Scripting , JavaScript, PHP, Python, C, MySQL , API withm proficiency inn Java and C."};

var secondSection = {"Objective":"To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var firstBulletSection = {"Other projects and work Experience": ["4 Months of Network administrator (Routing ) Experience at E&Y Financials, Gurugram.",
" month experience in Java and Linux at Alchemy Solutions, Bangalore for Dell incorporation.",
"month freelancing projects and Hobby project on java,html,linux and wordpress in my college days, build automated Student Exam", "result and Notifications Email WorkFlow using Google Script API"]};

var secondBulletSection = {"Technical Exposure": ["Programming Languages: Java,Java Script,C,DSA,Python,SQL,HTML,CSS.","Operating System: Linux(Ubuntu and Debian Flavors)", "Successfully completed Training on Routing,Switching,Android, Android Studio with API of Parse.com",
"JavaScript Training and Project on Google Apps Scripts"]};

var thirdBulletSection = {"Self Disciplined Online Trainings":["Intro to computer science course (python) from udacity.com website and learned basic search engine coding.", "Completed Linux Foundation course from edx.org website (Scored 100%)", "Completed Android development on teamtreehouse.com .(Scored 2340 points)", "Completed WordPress theme development on teamtreehouse.com(Scored 1128 points )"]};

var fourthBulletSection = {"Educational Background":["B.Tech in Electronics and Communication from RTU in 2015", "Completed senior secondary from CBSE in PCM."]};


var fifthBulletSection = {"Strengths & Activities":["Like research work and reading technologies, runs own youtube channel and facebook page for teaching.", "Good command over Mathematics, Physics and debugging skills.","Play cricket, chess and do Meditation."]};

//buildSections('ul', 'list1', "mainBody", "Project 1");
//buildSections('li','firstLine', 'list1', 'Know JS');

//table
//buildSections('table','firstTable', 'mainBody','');
//ceateRowforTable('firstTable');

buildBulletSection(fifthBulletSection,"firstBulletSection", "bulletSection", "mainBody");
buildBulletSection(fourthBulletSection,"secondBulletSection", "bulletSection", "mainBody");
buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");
buildBulletSection(secondBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
buildBulletSection(firstBulletSection,"fifthBulletSection", "bulletSection", "mainBody");


function buildBulletSection(bulletSection, id, className, parrentID){
    Object.keys(bulletSection).forEach(function(key) {
		buildSections("ul", id, parrentID, className, key);
     	    bulletSection[key].forEach(function(entry) {
		    var childId = "child" + id;
			var childClassName = "child"+className;			
		    buildSections("li", childId, id, childClassName, entry);
        });
    });	
}

function buildSections(type, idToBeCreated, parentElementId, className,  content){
    var elementBuilt = document.createElement(type);
	elementBuilt.classList.add(className);
    elementBuilt.id = idToBeCreated;
	elementBuilt.innerHTML = content;
    document.getElementById(parentElementId).appendChild(elementBuilt);
}

function ceateRowforTable(id){
	var table = document.getElementById(id);
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}

//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}

