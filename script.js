// creating access key
const accessKey = "esOoiiyu3qu-0_ivIOJm9YmJHEuQXVbDZG8PimRfE7A";
// access from html doc and store here
const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

// to store input data
let inputData = "";
let page = 1;

 async function searchImages() {
    inputData = inputE1.value;
    // created dynam7ic url based on input data
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

// fetch the images based on the query
 const response = await fetch(url);
//  convert response into json format
 const data = await response.json();
//  result stored to variable
 const results = data.results;

//  if page is 1 then search result is my deafault page
 if(page === 1 ){
    searchResults.innerHTML="";

 }

//  now we have lot of data but qwe need to show in our pre4 deswign format
//  so we use map to map the data results
 results.map((result) =>{
    // create a container for resulst
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result");
    // create a image element for image
    const image = document.createElement("img");
    // for img source and attribute
    image.src=result.urls.small;
    image.alt = result.alt_description;

    // we have a in next in ou page, so we create that also
    const imageLink = document.createElement("a");
    //  fetch the li9nk and target set to blank(next_page) also text content
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    //  ue append child to push all resul;ts into our web page
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);

});

// increase the page number
page++;
if(page > 1){
    showMore.style.display = "block";
}
}

formE1.addEventListener("submit", (event) =>{
    event.preventDefault() 
    page=1;
     searchImages();
});

showMore.addEventListener("click",() =>{
   
     searchImages();
});
