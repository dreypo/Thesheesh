document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Request Submitted!");
    // You can redirect or send data here
  });
  
  function navigateTo(page) {
    window.location.href = page;
  }

  function logout() {
    alert("Logging out...");
    // Add logout logic here
  }

  function bookNow() {
    alert("Redirecting to booking page...");
    // Add booking logic here
  }
    function goToGeneralConcern() {
      window.location.href = "general concern.html"; // Change this to your actual page
    }