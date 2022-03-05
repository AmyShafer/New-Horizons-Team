
const newHorizonsTeam = team => {
  const createManagerCard = manager => {
    return `
    <div class="card">
    <div class="card-header">
      <h2 class="employee-name">${manager.getName()}</h2>
      <h3 class="employee-role">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="employee-details">
        <li>ID: <span>${manager.getId()}</span></li>
        <li>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li>Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>`;
  };

  const createEngineerCard = engineer => {
    return `
    <div class="card">
    <div class="card-header">
      <h2 class="employee-name">${engineer.getName()}</h2>
      <h3 class="employee-role">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="employee-details">
        <li>ID: ${engineer.getId()}</li>
        <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li>GitHub: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>`;
  };

  const createInternCard = intern => {
    return `
    <div class="card">
    <div class="card-header">
      <h2 class="employee-name">${intern.getName()}</h2>
      <h3 class="employee-role">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="employee-details">
        <li>ID: ${intern.getId()}</li>
        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li>School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>`;
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => createManagerCard(manager))
  );
  html.push(team
   .filter(employee => employee.getRole() === "Engineer")
   .map(engineer => createEngineerCard(engineer))
   .join("")
  );
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => createInternCard(intern))
    .join("")
  );

  return html.join("");
}

// generate the page of employees 
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Horizons Team</title>
    <!-- Bootstrap --> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- Font Awesome --> 
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hubballi&family=Jaldi:wght@700&family=Marck+Script&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header class="jumbotron">
        <h1>New Horizons Team</h1>
    </header>  
    <!-- Team Header --> 
    <div class="container"> 
      <h1 class="align-content-center" id="team-shown"></h1>
      <!-- Employee Card --> 
        <div class="row row-col justify-content-around">
          ${newHorizonsTeam(team)}
          </div>
        </div>
    </div>
  <!-- jQuery -->  
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <!-- JavaScript -->  
  <script src="script.js"></script>
</body>
</html> 
`;
};