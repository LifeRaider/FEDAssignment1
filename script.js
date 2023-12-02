// Function to toggle the dropdown and change the image
function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");

  var buttonImg = document.querySelector('.dropbtn img');

  var socialBar = document.getElementById('social-media-bar');
  socialBar.classList.toggle("hidden");

  if (dropdown.classList.contains("show")) {
    // Change image when dropdown is shown
    buttonImg.src = "Assets/Main_cross.png";
  } else {
    // Change image when dropdown is hidden
    buttonImg.src = "Assets/Main_menu.png";
  }
}



window.onload = function() {
  // get height
  var picHeight = document.getElementsByClassName('album-pic')[0].offsetHeight;
  var infoHeight = document.getElementsByClassName('album-info')[0].offsetHeight;
  // get line element
  var longLine = document.getElementsByClassName('album-uline')[0];
  if (picHeight >= infoHeight - 1) {
      longLine.style.width = "45vw";
    } else {
      longLine.style.width = "80vw";
  }
}



// current date
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const eventDate = {
  '2023-12-9': ['New York Concert', "K WAVE NEW YORK 2023<br>장소 : NEW YORK, USA<br>시간 : 4:00PM"],
  '2023-12-10': ['Miami Concert', "K WAVE Miami 2023<br>장소 : Miami, USA<br>시간 : 5:00PM"],
  '2023-12-31': ['Seoul Countdown Party', "Countdown Party 2023<br>장소 : Seoul, South Korea<br>시간 : 9:00PM"]
};

// display the calandar
function renderCalendar() {

  date.setDate(1);
  
  // get the days div
  const monthDays = document.querySelector(".days");
  
  //get number of days in the selected month
  const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // get number of days in the previous month
  const prevNumDays = new Date(new Date(date.getFullYear(), date.getMonth(), 0).getDate());
  // get the day that the first day of the selected month lies on
  const firstDayIndex = date.getDay();
  // get the day that the last day of the selected month lies on
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  // get number of extra days to add
  const nextDays = 7 - lastDayIndex - 1;

  // shows the selected month
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date h2").innerHTML = date.getFullYear();

  // create temp storage for the new divs
  let days = "";

  // adds the previous days in the week before actual month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date"><p>${prevNumDays - x + 1}</p></div>`;
  }

  // adds day for the selected month and highlights current day
  for (let i = 1; i <= numDays; i++) {
    
    // get date during loop
    let y = date.getFullYear();
    let m = String(date.getMonth() + 1).padStart(2, '0');
    let d = `${y}-${m}-${i}`;
    
    // adding events to day
    let temp = "";
    if (eventDate.hasOwnProperty(d)){
      temp = `<button onclick="popUp('${d}')">${eventDate[d][0]}</button>`;
      console.log(temp)
    }

    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today"><p>${i}</p>${temp}</div>`;
    } else {
      days += `<div><p>${i}</p>${temp}</div>`;
    }
  }

  // adds the following days in the week after actual month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date"><p>${j}</p></div>`;
  }
  // append all the divs in the temp storage to the actual container div
  monthDays.innerHTML = days;
};

// go to previous month
function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}
// go to next month
function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}
renderCalendar();


// Function to show the popup
function popUp(d) {
  var popup = document.getElementById("myPopup");
  console.log(d)
  popup.style.display = "block";
  document.querySelector(".popup-content p").innerHTML = eventDate[d][1]
}
// Function to hide the popup
function closePopUp() {
  var popup = document.getElementById("myPopup");
  popup.style.display = "none";
}
