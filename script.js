// Function to toggle the dropdown and change the image
function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");

  var buttonImg = document.querySelector('.dropbtn img');
  if (dropdown.classList.contains("show")) {
    // Change image when dropdown is shown
    buttonImg.src = "Assets/Main_cross.png"; // Change the source to your desired image
  } else {
    // Change image when dropdown is hidden
    buttonImg.src = "Assets/Main_menu.png"; // Reset the image to the original
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
