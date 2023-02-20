var slideIndex = 1;

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");

	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none"
	}

	if(n > slides.length){
		slideIndex = 1;

	}

	if(n < 1){
		slideIndex = slides.length;

	}

	slides[slideIndex - 1].style.display = "block"

}

function plusSlides(n){
	slideIndex +=n;
	showSlides(slideIndex);
}

setInterval(plusSlides, 3000 , 1);





const searchInput = document.getElementById("searchInput");

// store name elements in array-like object

const namesFromDOM = document.getElementsByClassName("name");

// listen for user events

searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // get user search input converted to lowercase

  const searchQuery = value.toLowerCase();

  for (const nameElement of namesFromDOM) {
    // store name text and convert to lowercase

    let name = nameElement.textContent.toLowerCase();

    // compare current name to search input

    if (name.includes(searchQuery)) {
      // found name matching search, display it

      nameElement.style.display = "block";
    } else {
      // no match, don't display name

      nameElement.style.display = "none";
    }
  }
});