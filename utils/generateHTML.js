



function generateHTML(teamArray) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class = "d-flex">
            <h3 class="text-center bg-primary py-4 col-12 shadow font-weight-bold text-white">My Team</h3>
        </header>
        <container class = "d-flex justify-content-center flex-wrap">
   ${teamArray.map(person => {
       if (person.getRole() ==="Manager"){
           return `<div class="card m-1 col-3 border-0 rounded-pill" style="width: 18rem;">
           <div class="card-body bg-secondary">
             <div class = "border border-primary p-4 mb-2 bg-primary text-white rounded">
               <h5 class="card-title">${person.name}</h5>
                <h6 class="card-title">${person.getRole()}</h6>
               </div>
             <p class="card-text rounded-pill bg-light p-2">ID: ${person.id}</p>
             <p class="card-text rounded-pill bg-light p-2">Email: <a href = "mailto:${person.email}">${person.email} </a></p>
             <p class="card-text rounded-pill bg-light p-2">Office Number: ${person.officeNumber}</p>
           </div>
         </div>
         ` }
        else if (person.getRole() === "Engineer"){
            return `<div class="card m-1 col-3 border-0 rounded-pill" style="width: 18rem;">
           <div class="card-body bg-secondary">
             <div class = "border border-primary p-4 mb-2 bg-primary text-white rounded">
               <h5 class="card-title">${person.name}</h5>
                <h6 class="card-title">${person.getRole()}</h6>
               </div>
             <p class="card-text rounded-pill bg-light p-2">ID: ${person.id}</p>
             <p class="card-text rounded-pill bg-light p-2">Email: <a href = "mailto:${person.email}">${person.email} </a></p>
             <p class="card-text rounded-pill bg-light p-2">Github:<a href = "https://github.com/${person.github}" target="_blank">${person.github}</a> </p>
           </div>
         </div>
         ` }
         else if (person.getRole() === "Intern"){
            return `<div class="card m-1 col-3 border-0 rounded-pill" style="width: 18rem;">
           <div class="card-body bg-secondary">
             <div class = "border border-primary p-4 mb-2 bg-primary text-white rounded">
               <h5 class="card-title">${person.name}</h5>
                <h6 class="card-title">${person.getRole()}</h6>
               </div>
             <p class="card-text rounded-pill bg-light p-2">ID: ${person.id}</p>
             <p class="card-text rounded-pill bg-light p-2">Email: <a href = "mailto:${person.email}">${person.email} </a></p>
             <p class="card-text rounded-pill bg-light p-2">School: ${person.school}</p>
           </div>
         </div>
         ` 

       }
   })}
        </container>
    </body>
    </html>`
    
    }

    module.exports = generateHTML;
