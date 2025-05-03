// Open the sign-in popup
function openSignInPopup() {
    document.getElementById("signInPopup").style.display = "block";
  }
  
  // Close the sign-in popup
  function closeSignInPopup() {
    document.getElementById("signInPopup").style.display = "none";
  }
  
  // Close the popup if the user clicks anywhere outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById("signInPopup")) {
      closeSignInPopup();
    }
  }

  // JavaScript to toggle the FAQ answers
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function () {
      const faqItem = this.parentElement;
      faqItem.classList.toggle('active');
  });
});

// Function to handle star rating
function rate(rating) {
  // Get all star elements
  var stars = document.querySelectorAll('.star');

  // Reset all stars to default color
  stars.forEach(function(star) {
      star.classList.remove('selected');
  });

  // Highlight the stars up to the selected rating
  for (var i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
  }

  // Update the rating value displayed below the stars
  document.getElementById('ratingValue').innerText = rating;
}


  