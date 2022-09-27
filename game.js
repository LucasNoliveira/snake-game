let lastRenderTime = 0

function main(currentTime) {
    window.requestAnimationFrame(main)
    console.log (currentTime)
}

window.requestAnimationFrame(main)