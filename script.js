const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

window.addEventListener("mousemove" , (ele) => {
    box1.innerHTML = `
     <div class=" box box1">
            <h4>X-position</h4>
            <p class="num-x">${ele.clientX}</p>
        </div>
    `;
    box2.innerHTML = `
    <div class=" box box2">
            <h4>Y-position</h4>
            <p class="num-y">${ele.clientY}</p>
        </div>
    `;
})