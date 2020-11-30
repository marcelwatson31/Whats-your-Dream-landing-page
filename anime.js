let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})
tl.add({
    targets: 'section div',
    width: '100%',
    backgroundColor: '#A0522D',
    delay: anime.stagger(100)
})
tl.add({
    targets: 'section div',
    width: '90%',
    backgroundColor: '#F4A460'
})
tl.add({
    targets: 'h1',
    top: '20%',
    opacity: 1,
    width: '90%',
    duration: 1000,
    color: 'blue'
    
}, '-=1600')
let rotationEvent = anime({
    targets: 'section',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    rotate: '225',
    duration: 5000,
    autoplay: false
})
let backgroundChange = anime({
    targets: 'body',
    opacity: 1,
    duration: 3000,
    autoplay: false
})
document.querySelector('button').addEventListener('click', () => {
    rotationEvent.play();
    backgroundChange.play();
})

function myFunction() { 
    if (document.getElementById("demo").style.background =! "#ff77ee") {
    document.getElementById("demo").style.backgroundImage = "url(images/imagine.jpg)";
} else{
    document.getElementById("demo").style.backgroundImage = "url(images/abstract.jpg)";
    document.getElementById("demo").style.backgroundImage = "url(images/imagine.jpg)";
}

}
