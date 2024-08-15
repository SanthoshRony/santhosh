
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




/////////////////////////////////////////////////////////////////////////

// Function to close the menu overlay
function closeMenuOverlay() {
    document.querySelector('#menuOverlay').style.width = '0';
}

// Event listener for all links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Close the menu overlay when any link is clicked
        closeMenuOverlay();

        // Check if it's an internal anchor link
        if (targetId.startsWith("#")) {
            e.preventDefault(); // Prevent default only for anchor links
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // For external links, stop any ongoing scroll and navigate directly
            // Nothing else is needed here. By not calling e.preventDefault(),
            // the browser will follow its default behavior and navigate to the page.
        }
    });
});
