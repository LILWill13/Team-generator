const cards = input =>{
    const allCards = []
    const managerCard = manager => {
        return`
    <div class="card text-center">
        <div class="card-head">
            <p class="card-title"></p>
            <p class="card-title"></p>
        </div>
        <div class="card-body">
            <ul>
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: <a href="mailto: "> </a></li>
            </ul>
        </div>
    </div>` };

    const engineerCard = engineer => {
        return `
        <div class="card text-center">
            <div class="card-head">
                <p class="card-title"> </p>
                <p class="card-title"> </p>
            </div>
            <div class="card-body">
                <ul>
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: <a href="mailto: "> </a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/ " target="_blank"> </a></li>
                </ul>
            </div>
        </div>` };

    
    const internCard = intern => {
        return `
        <div class="card text-center">
            <div class="card-head">
                <p class="card-title"> </p>
                <p class="card-title"> </p>
            </div>
            <div class="card-body">
                <ul>
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: <a href="mailto: "> </a></li>
                    <li class="list-group-item">School: </li>
                </ul>
            </div>
        </div>` };
       
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
       
        </div>
    </body>
    </html>`;
};