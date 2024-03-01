
const  chShape = document.getElementById("change-shape");
const colors = document.getElementById("change-color");
const circle = document.getElementById("circle");


chShape.addEventListener("click", changeShape);

colors.addEventListener('click', function() {
  let randomR = Math.floor(Math.random() * 256);
   let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    circle.style.backgroundColor = color(randomR, randomG, randomB);
});

function changeShape() {
    var inner = document.querySelector('.inner');
    inner.classList.remove("Ssquare", "Scircle", "Shexagon", "Srectangle");

    var shapes = ["Ssquare", "Scircle", "Shexagon", "Srectangle"];
    var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    inner.classList.add(randomShape);
}

function color(a, b, c) {
    return `rgb(${a},${b},${c})`;
}
