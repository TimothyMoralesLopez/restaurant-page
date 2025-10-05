import milkChocolateTrufflesImage from "./milk-chocolate-truffles.jpg";
import strawberryChocolateTrufflesImage from "./strawberry-chocolate-truffles.jpg";
import raspberryChocolateTrufflesImage from "./raspberry-chocolate-truffles.jpg";

function loadMenuPage() {
    const contentDiv = document.querySelector("#content"); 

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div"); 

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Our Menu"; 

    const milkChocolateDiv = document.createElement("div");
    milkChocolateDiv.classList.add("milk-chocolate-div"); 

    const milkChocolateHeading = document.createElement("h2");
    milkChocolateHeading.textContent = "Milk Chocolate Ganache Truffles"; 
    
    const milkChocolateImage = document.createElement("img");
    milkChocolateImage.src = milkChocolateTrufflesImage;

    const milkChocolatePara = document.createElement("p"); 
    milkChocolatePara.textContent = "Our wonderfully sweet milk chocolate truffles, drizzled with an exquisite chocolate ganache."; 
    const milkChocolatePrice = document.createElement("p");
    milkChocolatePrice.textContent = "$5.00"; 

    milkChocolateDiv.append(milkChocolateHeading, milkChocolateImage, milkChocolatePara, milkChocolatePrice); 

    const strawberryChocolateDiv = document.createElement("div");
    strawberryChocolateDiv.classList.add("strawberry-chocolate-div"); 

    const strawberryChocolateHeading = document.createElement("h2");
    strawberryChocolateHeading.textContent = "Strawberry Dark Chocolate Truffles";

    const strawberryChocolateImage = document.createElement("img");
    strawberryChocolateImage.src = strawberryChocolateTrufflesImage;

    const strawberryChocolatePara = document.createElement("p"); 
    strawberryChocolatePara.textContent = "Elegant dark chocolate truffles, sprinkled with hazelnut pieces and topped with our fresh, all natural strawberries."; 
    const strawberryChocolatePrice = document.createElement("p");
    strawberryChocolatePrice.textContent = "$5.00"; 

    strawberryChocolateDiv.append(strawberryChocolateHeading, strawberryChocolateImage, strawberryChocolatePara, strawberryChocolatePrice); 

    const raspberryChocolateDiv = document.createElement("div");
    raspberryChocolateDiv.classList.add("raspberry-chocolate-div"); 

    const raspberryChocolateHeading = document.createElement("h2");
    raspberryChocolateHeading.textContent = "Raspberry Dark Chocolate Truffles (Dairy-Free)"; 

    const raspberryChocolateImage = document.createElement("img");
    raspberryChocolateImage.src = raspberryChocolateTrufflesImage;

    const raspberryChocolatePara = document.createElement("p");
    raspberryChocolatePara.textContent = "Rich dairy-free dark chocolate truffles with a candied raspberry inside and complete with pink icing on top."; 
    const raspberryChocolatePrice = document.createElement("p");
    raspberryChocolatePrice.textContent = "$5.00"; 

    raspberryChocolateDiv.append(raspberryChocolateHeading, raspberryChocolateImage, raspberryChocolatePara, raspberryChocolatePrice); 

    menuDiv.append(menuHeading, milkChocolateDiv, strawberryChocolateDiv, raspberryChocolateDiv); 

    contentDiv.append(menuDiv); 
}

export { loadMenuPage };