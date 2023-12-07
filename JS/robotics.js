let page =4;
const load = document.querySelector(".loadmore")
const robotssss = document.querySelector('.robotdivclass')
function showData() {
    fetch('http://localhost:3000/robots')
    .then(response => response.json())
    .then(data => {
        data.slice(page - 4,page).forEach(robot => {
            robotssss.innerHTML += `
                <div class="robot">
                    <img src="${robot.image}" alt="">
                    <h1>${robot.category}</h1>
                    <p>${robot.description}</p>
                    <a class="nam" href="../HTML/dts.html?id=${robot.id}"><button sat>View details</button></a>
                    <button "onclick="deleteRobot(${robot.id})">Delete</button>
                    <button "onclick="updateRobot(${robot.id})">update</button>
                </div>
            `;
        });
    });
}
showData()
load.addEventListener("click",()=>{
    console.log("dsjdsoi");
    page+=4
    console.log(page);
    showData()
})