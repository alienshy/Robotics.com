let id = new URLSearchParams(window.location.search).get("id")
const robots = document.querySelector('.robotdivclass')

fetch(`http://localhost:3000/robots/${id}`)
    .then(response => response.json())
    .then(robot => {
        console.log(robot);
        robots.innerHTML += `
        <div class="robotdivclass merkez">
                     <div class="robot">
                    <img src="${robot.image}" alt="">
                    <h1>${robot.category}</h1>
                    <p>${robot.description}</p>
                    <a class="nam" href="../HTML/dts.html?id=${robot.id}"><button>View details</button></a>
                    </div>
        `
    })