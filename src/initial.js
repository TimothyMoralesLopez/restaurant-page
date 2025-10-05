function loadInitialPage() {
    const contentDiv = document.querySelector("#content"); 

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");  

    const homeHeading = document.createElement("h1"); 
    homeHeading.textContent = "Tim's Tasty Truffles"; 

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div"); 

    const firstInfoPara = document.createElement("p"); 
    firstInfoPara.textContent = "Welcome to Tim's Tasty Truffles, where our team of highly trained chocolatiers has worked meticulously to create an array of amazingly delectable confections to dazzle your tastebuds.";
    const secondInfoPara = document.createElement("p"); 
    secondInfoPara.textContent = "So please, come one, come all and have a taste of our irresistible chocolate truffles!"

    infoDiv.append(firstInfoPara, secondInfoPara); 

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours-div");

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";

    const hoursList = document.createElement("ul");

    const mondayHours = document.createElement("li"); 
    mondayHours.textContent = "Monday: 8am - 8pm";
    const tuesdayHours = document.createElement("li"); 
    tuesdayHours.textContent = "Tuesday: 8am - 8pm";
    const wednesdayHours = document.createElement("li");
    wednesdayHours.textContent = "Wednesday: 8am - 8pm";
    const thursdayHours = document.createElement("li");
    thursdayHours.textContent = "Thursday: 8am - 10pm";
    const fridayHours = document.createElement("li");
    fridayHours.textContent = "Friday: 8am - 10pm";
    const saturdayHours = document.createElement("li");
    saturdayHours.textContent = "Saturday: 10am - 8pm";
    const sundayHours = document.createElement("li");
    sundayHours.textContent = "Sunday: 10am - 6pm";
   
    hoursList.append(mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours); 
   
    hoursDiv.append(hoursHeading); 
    hoursDiv.append(hoursList); 

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address-div");

    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Address";

    const addressPara = document.createElement("p");
    addressPara.textContent = "358 Truffle Trail, Truffletown, NY, 11111, United States"; 

    addressDiv.append(addressHeading); 
    addressDiv.append(addressPara); 

    homeDiv.append(homeHeading);
    homeDiv.append(infoDiv); 
    homeDiv.append(hoursDiv); 
    homeDiv.append(addressDiv); 

    contentDiv.append(homeDiv); 
}

export { loadInitialPage }; 