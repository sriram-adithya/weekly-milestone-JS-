const nav = document.createElement("nav");  //nav is for throughout header 
nav.classList.add("nav");
document.body.appendChild(nav);


//Add div for logo
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");
const img = document.createElement("img");
img.src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
img.alt="Flipkart";
img.style.width="75px"
img.style.height="25px";
logoDiv.appendChild(img);
nav.appendChild(logoDiv);
//explore text below the logo 
const pTag =document.createElement("p")
pTag.classList.add("pTag");
pTag.textContent="Explore "
logoDiv.appendChild(pTag);

//span tag for plus and plus symbol
const spanTag = document.createElement("span");
spanTag.classList.add("plus-color");
spanTag.textContent="Plus "  //need to make italic style
pTag.appendChild(spanTag);
const img2 = document.createElement("img");
img2.src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
img2.alt="Star";
img2.style.width="10px";
img2.style.height="10px";
pTag.appendChild(img2);

//div for searchbar 
const searchBar = document.createElement("div");
searchBar.classList.add("searchBar");
nav.appendChild(searchBar);

//input tag under searchBar
const input = document.createElement("input");
input.type="text";
input.title="Search for products,brands and more";
input.placeholder="Search for products,brands and more";
input.value="Iphone";
searchBar.appendChild(input);

//button tag under input
const btn = document.createElement("button");
input.appendChild(btn);

//i tag for search icon from fontAwesome under button(Need to add icon Button)


//login button
const btn2 =document.createElement("button");
btn2.classList.add("loginbtn");
btn2.textContent="Login";
nav.appendChild(btn2);

//become a seller text
const navLink = document.createElement("a");
navLink.classList.add("navLink")
navLink.href = "/";
navLink.textContent="Become a seller";
nav.appendChild(navLink);

//More and fontawesome using angleDownicon will add later

const navLink2 = document.createElement("a");
navLink2.classList.add("navLink")
navLink2.href="/";
navLink2.textContent="More";
nav.appendChild(navLink2);

//cart and fontAwesome using cart will add later

const navLink3 = document.createElement("a");
navLink3.classList.add("navLink");
navLink3.href="/";
navLink3.textContent="Cart"
nav.appendChild(navLink3);