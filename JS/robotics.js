const robotName = new URLSearchParams(window.location.search).get('id')
console.log(robotName);
fetch('http://localhost:3000/robots')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(robot => {
            document.querySelector('.robotdivclass').innerHTML += `
                <div class="robot">
                    <img src="${robot.img}" alt="">
                    <h1>${robot.name}</h1>
                    <p>${robot.description}</p>
                    <a href="../HTML/dts.html?id=${robot.id}"><button>View details</button></a
                    >
                </div>
            `;
        });
    });
