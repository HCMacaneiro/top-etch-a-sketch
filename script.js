const wrapper = document.querySelector("#wrapper");
for (let i = 0; i < 256; i++) {
    let width = 960 / 16;
    let height = 960 / 16;
    const div = document.createElement("div");
    div.classList.add("div-grid");
    div.setAttribute("style", `width: ${width}px; height: ${height}; flex: auto;`);
    wrapper.appendChild(div);
}

wrapper.addEventListener("mouseover", e => {
    e.target.style.background = "blue";
});

const changeBtn = document.querySelector("#btn-change");
changeBtn.addEventListener("click", e => {
    let gridNum = prompt("Enter the number for the new grid (max. 100): ");
    gridNum = parseInt(gridNum);
    if (typeof(gridNum) !== typeof(1) || gridNum <= 0 || gridNum > 100) {
        alert("Invalid input.");
        return 1;
    }
    const grid = document.querySelectorAll(".div-grid");
    grid.forEach(div => {
        wrapper.removeChild(div);
    });
    for (let i = 0; i < (gridNum * gridNum); i++) {
        let width = Math.round(960 / gridNum);
        let height = Math.round(960 / gridNum);
        const div = document.createElement("div");
        div.classList.add("div-grid");
        div.setAttribute("style", `width: ${width}px; height: ${height}; flex: auto;`);
        wrapper.appendChild(div);
    }
})