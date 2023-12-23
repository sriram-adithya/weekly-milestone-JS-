//Main div 
const footer = document.createElement("div");
footer.classList.add("footer");
document.body.appendChild(footer);

//Main Column footer 
const footerMain = document.createElement("div");
footerMain.classList.add("footerMain");
footer.appendChild(footerMain);

//Main Bottom Footer
const footerBottom = document.createElement("div");
footerBottom.classList.add("footerBottom");
footer.appendChild(footerBottom);
//Column loop 
footerJson.colunms.forEach(colunmItem =>{
    const title = colunmItem.title;
    const listData = colunmItem.data;

     // Create main div for each column
     const columnDiv = document.createElement('div');
     columnDiv.classList.add('footer-column');
     footerMain.appendChild(columnDiv);
    //h3 is for title
     const titleElement = document.createElement("h4");
     titleElement.textContent=title;
     columnDiv.appendChild(titleElement);
    

     if(colunmItem.dataType=="ARRAY"){
      //Ul is for listData
     const ulElement =document.createElement('ul');
     //looping through each item in the list
     listData.forEach(item => {
        const liElement = document.createElement('li');
        const linkElement = document.createElement('a');

        linkElement.textContent =item;
        linkElement.href="/";
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
     });

     //Append ul to the main div
     columnDiv.appendChild(ulElement);
    }else{
         // it is not an arrray type, create div element separately
         const divElement = document.createElement('div');
         divElement.classList.add("rightDiv")
         divElement.textContent = listData;
         // Append the div to the column div
         columnDiv.appendChild(divElement);
    }
});

// For Bottom-footer

footerJson.bottomColunms.forEach(bottomItem =>{
    const img = bottomItem.img;
    const text = bottomItem.text;
    //this div is for menu
    const footerMenu = document.createElement("div");
    footerMenu.classList.add("footerMenu");
    //append to main footer div
    footerBottom.appendChild(footerMenu);

    if(img && img.trim()!=""){

    //img tag to render bottom images
    const image =document.createElement("img");
    image.src = img;
    footerMenu.appendChild(image);
    }

    //A tag to render bottom texts
    const menuText = document.createElement("a");
    menuText.href = "/";
    menuText.textContent=text;
    footerMenu.appendChild(menuText);
});