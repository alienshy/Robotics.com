fetch('http://localhost:3000/robots') // API'den veri çekme isteği
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(robot => {
            document.querySelector('.robotdivclass').innerHTML += `
                <div class="robot">
                    <img src="${robot.img}" alt="">
                    <h1>${robot.name}</h1>
                    <p>${robot.description}</p>
                    <button>DETAYLARA BAK</button>
                </div>
            `;
        });
    });
