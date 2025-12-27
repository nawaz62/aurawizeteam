/*
  Calendar for Preventive Maintenance
*/

function renderCalendar(){
  calendarGrid.innerHTML = "";

  // Create 30-day calendar
  for(let dayNumber = 1; dayNumber <= 30; dayNumber++){

    let dayBox = document.createElement("div");
    dayBox.className = "day";
    dayBox.innerHTML = dayNumber;

    // Show preventive requests on date
    requests
      .filter(r =>
        r.type === "Preventive" &&
        r.date.endsWith(
          "-" + String(dayNumber).padStart(2,"0")
        )
      )
      .forEach(r=>{
        dayBox.innerHTML +=
          `<div class="event">${r.title}</div>`;
      });

    calendarGrid.appendChild(dayBox);
  }
}
