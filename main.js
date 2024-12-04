let cursor = document.querySelector("#cursor");

window.addEventListener('mousemove', function(debts) {
    gsap.to(cursor, {
        x:debts.x,
        y:debts.y,
        duration:0.5,
        ease:"back.out"
    })
})