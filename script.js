


function hamBurger() {

    document.getElementById('nav-ul').classList.toggle('ul-active');
    document.getElementById('my-nav').classList.toggle('nav-section-active');
  
    
}

function closeHamBurger(){
    
    document.getElementById('nav-ul').classList.toggle('ul-active');
    document.getElementById('my-nav').classList.toggle('nav-section-active');
}

const pLoader = document.getElementById("wrapper");
function loader() {
    pLoader.style.display = 'none';
}

//typing animation
let i =0, writing;
writing = " Welcome To My Portfolio \n  I am Bishal"
console.log(writing);

function typing() {
    if (i<writing.length) {
        document.getElementById('intro-section-two').innerHTML += writing.charAt(i);
        i++
        if((i%28 ===0)) {
    document.getElementById('intro-section-two').innerHTML += '<br>'
        }
        setTimeout(typing,60);
    }
}
typing();

// //window animation
// var abt = document.getElementById('abt-links');
// abt.window.onscroll=function () {
//    abt.style.opacity='1';

// }
// // window.onscroll = function(){
// //     //var tl = new TimelineLite();
// //     //tl.to($("#header-contenu h1"), 1.5, {paddingTop:"40vh"})
   
// //     tl.to($("#profile-card .profile-box"), .5, {opacity:1, marginTop:"10px"})
// //     tl.to($("#carrer-links h2"), .5, {opacity:1, paddingTop:"10px"})
// //     tl.to($("#carrer-links .exprence-wrapper"), .5, {opacity:1, paddingTop:"10px"})

// //   }