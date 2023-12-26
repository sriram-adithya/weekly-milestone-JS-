//Main div 
const mainContainer = document.createElement("div")
//Create a class for main div for css styling
mainContainer.classList.add("container");

//Append to a body of the document to render in webPage
document.body.appendChild(mainContainer);

// Counter for the "Add to Compare" functionality
let compareCount = parseInt(sessionStorage.getItem("compareCount")) || 0;
// Function to update the compare count in both UI and sessionStorage
const updateCompareCount =() =>{
  if(compareCount>=0){
    sessionStorage.setItem("compareCount",compareCount);
    compareButton.textContent=`compare(${compareCount})`;
  }else{
    compareCount=0;
  }
}
const presentData =[];
let selectedData =[];


//looping through each product to get Product details
productJSON.forEach(item => {
  const title = item.title;  
  const imageUrl= item.image.url; 
  const overallRatings = item.ratings.overallRating;
  const totalRatingsNum = item.ratings.totalRatingsNum;
  const totalReviewsNum = item.ratings.totalReviewsNum;
  const featuresList = item.featuresList;
  const mrp = item.price.mrp;
  const finalPrice = item.price.finalPrice;
  const discountData = item.price.discount.data;
  const exchangeOfferData = item.exchangeOfferDiscount.data;
  const bankOffersLink = item.bankOffersLink.buttonText;
  const productPageLink = item.productPageLink;
  presentData.push({ title, imageUrl });
 

//create div element for each item
const itemDiv = document.createElement("div")
itemDiv.classList.add("itemDiv")
mainContainer.appendChild(itemDiv);

const content = document.createElement('div')
    content.classList.add('content')
    mainContainer.appendChild(content)

    content.appendChild(itemDiv)

//create img element for each image
const img = document.createElement("img")

img.src = imageUrl;
img.alt = item.image.alt;
img.width= item.image.width;
img.height=item.image.height;
//append image to itemDiv
itemDiv.appendChild(img);  

//title and productPageLink 
//This div is for title
const description = document.createElement("div")
description.classList.add("titleClass")
itemDiv.appendChild(description);
//Anchor tag is for title Word from productPageLink
const descriptionTitle = document.createElement("a");
descriptionTitle.classList.add("itemTitle");

descriptionTitle.textContent = title;
descriptionTitle.style.fontWeight ="bold";
descriptionTitle.href= productPageLink;
description.appendChild(descriptionTitle);

//This is main div for Ratings
const ratingDiv = document.createElement("div")
ratingDiv.classList.add("ratingContainer");
description.appendChild(ratingDiv);
//child div for ratings 
const rating = document.createElement("p");
rating.classList.add("rating");
rating.style.backgroundColor = "#388e3c";
rating.style.display = "inline-block";
rating.style.color = "white";
rating.style.borderRadius ="3px"

rating.textContent = overallRatings;
//Append child div to parent div
ratingDiv.appendChild(rating);

//This is for star near ratings
const star = document.createElement("img");
star.src = "./assets/grade.svg";
rating.appendChild(star);
//This div is for totalRatings and totalReviews
const review = document.createElement("div");
review.classList.add("review");
review.textContent = totalRatingsNum + " Ratings" + " & " + totalReviewsNum + " Reviews";
review.style.color ="grey"
ratingDiv.appendChild(review);

//feature list div
const featureList = document.createElement("div");
featureList.classList.add("feature-list")
description.appendChild(featureList);

//create UL element for each features 
const featureUl = document.createElement("ul");

featuresList.forEach(feature =>{
  const liElement = document.createElement("li");
  liElement.textContent = feature;
  //Append the li element to UL element
  featureUl.appendChild(liElement);
})
//Append Ul element to the feature div
featureList.appendChild(featureUl);

//price container
const priceContainer = document.createElement("div");
priceContainer.classList.add("price-container")
//append to item div for styling purpose
itemDiv.appendChild(priceContainer);

//This h4 is for Final Price and need to add Rs symbol in styling
const price = document.createElement("h3");
price.classList.add("price");
price.textContent = "₹ "+finalPrice;
priceContainer.appendChild(price)

//Create span for discounts
const discount = document.createElement('span');
discount.classList.add('discount')
discount.textContent = " " +discountData + "% " +" Off"
discount.style.color ="#388e3c";

//this p tag is for maxPrice and Strike tag to dash out the price
const maxPrice = document.createElement("p");
const strikePrice = document.createElement("strike")
strikePrice.classList.add("strikePrice");
strikePrice.textContent="₹ "+ mrp;
maxPrice.appendChild(strikePrice);
maxPrice.classList.add("max-price")

//Append discound to maxPrice
maxPrice.appendChild(discount);
//Append maxPrice to priceContainer
priceContainer.appendChild(maxPrice);

const delivery = document.createElement("p");
delivery.classList.add("free-delivery");
priceContainer.appendChild(delivery);

//check if free delivery is true or false
const deliveryCondition = item.freeDelivery= delivery.textContent="free delivery" ? "free delivery" : "No free delivery";


//Exchange Offer appending
const exchangeOffer = document.createElement("p");
exchangeOffer.classList.add("exchange-offer");
priceContainer.appendChild(exchangeOffer);
exchangeOffer.textContent ="Upto ";
//span tag to continue in same line and for styling purpose
const exchangeSpan = document.createElement('span');
exchangeSpan.textContent = "Rs "+exchangeOfferData;
exchangeSpan.style.fontWeight ="bold";
//Append child to parent
exchangeOffer.appendChild(exchangeSpan);
//Add text inside exchange offer
exchangeOffer.insertAdjacentText("beforeend"," off on Exchange");


//Bank offer
const bankOffer = document.createElement("p");
bankOffer.classList.add("bank-Offer")
priceContainer.appendChild(bankOffer);

const bankOfferLink = document.createElement("a"); 
bankOfferLink.textContent=bankOffersLink;
bankOfferLink.href="/"
bankOfferLink.style.color="#388e3c";
bankOfferLink.style.textDecoration="none";

bankOffer.appendChild(bankOfferLink);

//addToCart & addToCompare
const CheckBoxes = document.createElement('div')
CheckBoxes.classList.add('check-boxes')
// CheckBoxes.style.display = 'block'
content.appendChild(CheckBoxes)

//addToCart DIV
const addToCart = document.createElement("div");
addToCart.classList.add("addToCart")
CheckBoxes.appendChild(addToCart);

//addToCompare DIV
const addToCompare = document.createElement("div");
addToCompare.classList.add("addToCompare")
CheckBoxes.appendChild(addToCompare);

//Input tag for addToCart
const addToCartCheckbox= document.createElement("input");
addToCartCheckbox.type="checkbox"
addToCartCheckbox.id="addToCartCheckbox"
addToCartCheckbox.style.cursor="pointer";
addToCart.appendChild(addToCartCheckbox);

//label tag for addToCart
const addToCartLabel = document.createElement('label');
addToCartLabel.classList.add("addToCartLabel")
addToCartLabel.textContent = 'Add to cart';
addToCartLabel.htmlFor= 'addToCartCheckbox';
addToCart.appendChild(addToCartLabel);


//Input tag for addToCompare
const addToCompareCheckbox = document.createElement('input');
addToCompareCheckbox.classList.add("compareCheckbox")
addToCompareCheckbox.type = 'checkbox';
addToCompareCheckbox.id = `addToCompareCheckbox_${compareCount}`; 
addToCompareCheckbox.style.cursor="pointer";
addToCompare.appendChild(addToCompareCheckbox);

//label tag for addToCompare
const addToCompareLabel = document.createElement('label');
addToCompareLabel.classList.add("addToCompareLabel");
addToCompareLabel.textContent = 'Add to Compare';
addToCompareLabel.htmlFor = `addToCompareCheckbox_${compareCount}`;
addToCompare.appendChild(addToCompareLabel);

// Add event listener for the "Add to Compare" checkbox
addToCompareCheckbox.addEventListener("change", () => {
  if (addToCompareCheckbox.checked) {
    compareCount++;
  } else {
    compareCount = Math.max(0, compareCount - 1); 
  }
  updateCompareCount();
});
});

//compare button 
const compareButton = document.createElement("button");
compareButton.classList.add("compareButton")
mainContainer.appendChild(compareButton);
compareButton.textContent= `COMPARE ${0}`;

const productCardsDiv = document.createElement("div");
productCardsDiv.classList.add("product-cards");

mainContainer.appendChild(productCardsDiv);

const showCompareButton = function () {
  [item.title,item.image.url];
};

const checkBoxes = document.querySelectorAll(".compareCheckbox");
// handle checkbox state change
function handleCheckboxChange (event,index){
const checkBox= event.target;

if(checkBox.checked){
  selectedData.push({ ...presentData[index],index });
}else{
  selectedData = selectedData.filter((data) => data.index !=index);
}

updateCompareButton();
}
// update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareButton.classList.add("show");
    productJSON.forEach((item) => {
      // Create a div element for each product
      const productCardDiv = document.createElement("div")
      productCardDiv.classList.add("product-card");

      // Add product details to the card
      const title = document.createElement("h6");
      const cardImg = document.createElement("img");

      title.textContent = item.title;
      productCardDiv.appendChild(title);

      cardImg.src = item.image.url;

      productCardDiv.appendChild(cardImg);

      productCardsDiv.appendChild(productCardDiv);
    });
  } else {
    compareButton.classList.remove("show");
  }

  compareButton.textContent = `COMPARE ${selectedData.length}`;
}

// Add event listener to each checkbox
checkBoxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", (e) =>
   handleCheckboxChange(e, index));
});

// Function to handle checkbox state change
function handleCheckboxChange(event, index) {
  const checkbox = event.target;

  if (checkbox.checked) {
    selectedData.push({ ...presentData[index], index });
    // Create a div element for each product card
    const productCardDiv = document.createElement("div");
    productCardDiv.classList.add("product-card");
    productCardDiv.dataset.index = index;

    // product card details
    const title = document.createElement("h6");
    const cardImg = document.createElement("img");

    title.textContent = presentData[index].title;
    title.style.fontWeight = 400;
    cardImg.src = presentData[index].imageUrl;

    productCardDiv.appendChild(cardImg);
    productCardDiv.appendChild(title);

    productCardsDiv.appendChild(productCardDiv);
  } else {
    selectedData = selectedData.filter((data) => data.index !== index);
    // Remove the product card from the main container
    const cardToRemove = document.querySelector(
      `.product-card[data-index="${index}"]`
    );
    if (cardToRemove) {
      productCardsDiv.removeChild(cardToRemove);
    }
  }

  updateCompareButton();
}

// Function to update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareButton.classList.add("show");
  } else {
    compareButton.classList.remove("show");
  }

  compareButton.textContent = `COMPARE ${selectedData.length}`;
}



