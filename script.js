function resizeCanvas() {
    var canvas = document.getElementById("graph-container");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas, false);

// Initial canvas setup
resizeCanvas();

