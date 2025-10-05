function loadAboutPage() {
    const contentDiv = document.querySelector("#content"); 

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div"); 

    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About Us"; 

    aboutDiv.append(aboutHeading); 

    const aboutMeDiv = document.createElement("div"); 
    aboutMeDiv.classList.add("about-me-div");
    const aboutMeFirstPara = document.createElement("p");
    aboutMeFirstPara.textContent = "Welcome to Tim's Tasty Truffles. I'm Timothy or Tim for short. I've had a passion for chocolates and sweet treats ever since I can remember. But something about chocolate truffles in particular always spoke to me on a deeper level.";
    const aboutMeSecondPara = document.createElement("p");
    aboutMeSecondPara.textContent = "So with Tim's Tasty Truffles (or Triple T, as I like to call it), my team of chocolatiers and I bring you the tastiest, most decadent chocolate truffles and treats made from only the finest ingredients.";
    const aboutMeThirdPara = document.createElement("p");
    aboutMeThirdPara.textContent = "And we specifically formulate our recipes with everyone in mind. We are proud to offer a variety of dairy-free, gluten-free, vegan, and non-GMO products. That way, everyone has the chance to savor the flavor of our delicious treats!"; 
    aboutMeDiv.append(aboutMeFirstPara, aboutMeSecondPara, aboutMeThirdPara);

    const contactUsDiv = document.createElement("div");
    contactUsDiv.classList.add("contact-us-div");

    const contactUsHeading = document.createElement("h2");
    contactUsHeading.textContent = "Contact Us"; 

    contactUsDiv.append(contactUsHeading); 

    const contactUsFirstPara = document.createElement("p");
    contactUsFirstPara.textContent = "Have a question, comment, or concern you'd like to send to us?";
    const contactUsSecondPara = document.createElement("p");
    contactUsSecondPara.textContent = "You can contact Tim's Tasty Truffles using one of the methods below:";

    const contactUsEmailPara = document.createElement("p");
    contactUsEmailPara.textContent = "Email: customerInquiries@timstastytruffles.com";
    const contactUsPhonePara = document.createElement("p");
    contactUsPhonePara.textContent = "Phone: (555) - 555 - 0880"; 
    const contactUsFaxPara = document.createElement("p");
    contactUsFaxPara.textContent = "Fax: (515) - 050 - 8190"; 

    contactUsDiv.append(contactUsFirstPara, contactUsSecondPara, contactUsEmailPara, contactUsPhonePara, contactUsFaxPara); 

    aboutDiv.append(aboutMeDiv, contactUsDiv); 
    contentDiv.append(aboutDiv); 
}

export { loadAboutPage };