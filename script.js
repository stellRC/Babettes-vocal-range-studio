let header = document.getElementById("banner");
let sticky = header.offsetTop;

let button = document.querySelector(".submit-button")
let contactContainer = document.querySelector(".contact-container")
let inputs = document.querySelectorAll('.required-input')
let exclamationIcon = document.querySelectorAll('.fa-exclamation')

let profileImage = document.querySelector('.about')
let rangeImage = document.querySelector('.range-img')
let aboutOffset = profileImage.offsetTop;

// ON SCROLL STICKY HEADER
window.onscroll = function() {
    stickyHeader()
    // viewImage()
};

function stickyHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function viewImage() {
  if (window.scrollY > aboutOffset+aboutOffset) {
      profileImage.classList.add("hidden");
  } else {
      profileImage.classList.remove("hidden");
  }
}

// SUBMIT BUTTON ANIMATION
button.addEventListener("click", e => {
  cookies.remove()
    inputs.forEach((input) => {
        let count = 0;
        console.log(input.validity.valid)
        if (input.validity.valid === true) {
            count += 1
        }
        if (count === 3) {
            button.classList.add("hinge")
            // REMOVE COOKIES FOR TEST PURPOSES
            
        }
    })
})