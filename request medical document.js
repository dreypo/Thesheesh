document.getElementById("newRequestBtn").addEventListener("click", () => {
    window.location.href = "request med.html"; // Redirect to new request page
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