const wrapper = document.querySelector("#wrapper");
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("div-grid");
    wrapper.appendChild(div);

}