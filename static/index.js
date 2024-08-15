
//menu overlay
function myFunction() {

  var overlay = document.getElementById("menuOverlay");
  if (overlay.style.width === "100%") {
    overlay.style.width = "0";
  } else {
    overlay.style.width = "100%";
  }

}

//close menu
function closeMenu() {
  document.getElementById("menuOverlay").style.width = "0";
}






//toggle menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smooth scrolling and closing the menu overlay
document.querySelectorAll('#menuOverlay .menu-content a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            document.querySelector('#menuOverlay').style.width = '0'; // Close the menu overlay
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
        }
    });
});


// JavaScript to close the menu overlay when clicking on the close button
document.querySelector('#menuOverlay .closebtn').addEventListener('click', function() {
  document.querySelector('#menuOverlay').style.width = '0';
});




///////// scroll to top
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: 'smooth' // Smooth scrolling behavior
});
}



// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
var scrollButton = document.querySelector('.scroll-to-top');
if (window.scrollY > 300) { // Adjust 300 to your desired scroll position
  scrollButton.classList.add('show');
} else {
  scrollButton.classList.remove('show');
}
});
