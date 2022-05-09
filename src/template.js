const cards = input =>{
    const allCards = []
    const managerCard = manager => {
        return`
    <div class="card text-center">
        <div class="card-head">
            <p class="card-title">${manager.getName()}</p>
            <p class="card-title">${manager.getRole()}</p>
        </div>
        <div class="card-body">
            <ul>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            </ul>
        </div>
    </div>` };

    const engineerCard = engineer => {
        return `
        <div class="card text-center">
            <div class="card-head">
                <p class="card-title">${engineer.getName()}</p>
                <p class="card-title">${engineer.getRole()}</p>
            </div>
            <div class="card-body">
                <ul>
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>` };

    
    const internCard = intern => {
        return `
        <div class="card text-center">
            <div class="card-head">
                <p class="card-title">${intern.getName()}</p>
                <p class="card-title">${intern.getRole()}</p>
            </div>
            <div class="card-body">
                <ul>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>` };
       
    allCards.push(input.filter(employee => employee.getRole() === "Manager").map(manager => managerCard(manager)).join(""));

    allCards.push(input.filter(employee => employee.getRole() === "Engineer").map(engineer => engineerCard(engineer)).join(""));

    allCards.push(input.filter(employee => employee.getRole() === "Intern").map(intern =>internCard(intern)).join(""));
        return allCards.join("");
}


module.exports = input => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <div class="top">
             <h1>My Team</h1>
        </div>
        <div class=" a container col-12 d-flex justify-content-center">
        ${cards(input)}
        </div>
    </body>
    </html>`;
};
