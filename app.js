/*
  Main application logic
  Handles pages, requests, kanban & dashboard
*/

// Change visible page
function showPage(pageId){
  document.querySelectorAll("section").forEach(
    section => section.classList.add("hidden")
  );

  document.getElementById(pageId).classList.remove("hidden");
}

// Add new maintenance request
function addRequest(){
  requests.push({
    title: reqTitle.value,
    type: reqType.value,
    date: reqDate.value,
    status: "New"
  });

  save();
  render();
}

// Render everything
function render(){

  // Clear kanban columns
  ["New","In Progress","Done"].forEach(stage=>{
    document.getElementById(stage).innerHTML = "";
  });

  // Place tasks in correct column
  requests.forEach(request=>{
    let task = document.createElement("div");
    task.className = "task";
    task.innerText = request.title;

    // Move task on click
    task.onclick = ()=>{
      request.status =
        request.status === "New" ? "In Progress" : "Done";
      save();
      render();
    };

    document.getElementById(request.status).appendChild(task);
  });

  // Dashboard count
  openCount.innerText =
    requests.filter(r => r.status !== "Done").length;

  renderCalendar();
}
