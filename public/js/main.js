function transformMenuButton(){
    document.querySelector('body').classList.toggle("dissolve")
    document.querySelector('#burgerButton').classList.toggle('fa-bars')
    document.querySelector('#burgerButton').classList.toggle('fa-times')
    document.querySelector('#menuButton').classList.toggle('transformMenuButton')
}

// Wait for the page to load, then trigger the fade-in effect
window.addEventListener('load', function () {
        document.getElementById('background').classList.add('fade-in');
});

window.addEventListener('scroll', function() {
    document.querySelector('#navbar').classList.toggle('scroll', window.scrollY > 0);
});


window.addEventListener('scroll', function() {
    document.querySelector('#cardSection1').classList.toggle('cardSection1', window.scrollY > 200);
    document.querySelector('#cardSection2').classList.toggle('cardSection2', window.scrollY > 200);
});
