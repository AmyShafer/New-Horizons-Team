const teamHere = document.getElementById("team");

function makeEmployeeCards(teamArray) {
  for (let i = 0; teamArray.length; i++) {
    const currentEmployee = teamArray[i];

    teamHere.innerHTML = `
    <div class="card">
    <div class="card-header" id="0">
      Employee
    </div>
    <div class="card-body">
      <ul class="employee-details">
        <li>ID: <span></span></li>
        <li>Email: <span></span></li>
        <li>Office Number: <span></span></li>
      </ul>
    </div>
  </div>`;

  }
}