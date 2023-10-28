  // JavaScript to handle the "Buy Now" button
document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.getElementById("buy-now");
  buyNowButton.addEventListener("click", function (event) {
      event.preventDefault();
      // You can add custom logic here before redirecting to the order confirmation page
      window.location.href = "order_confirmation.html";
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const pageLinks = document.querySelectorAll('.page-link');

  pageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      const destination = this.getAttribute('href');

      // Apply the transition effect (e.g., fading out)
      document.body.style.opacity = 0;

      // Wait for the transition to complete, then navigate to the new page
      setTimeout(function() {
        window.location.href = destination;
      }, 500); // Adjust the duration as needed (in milliseconds)
    });
  });
});

