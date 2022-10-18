let scroll = document.querySelector('.scroll');
let review = document.querySelector('.review');
let child = scroll.childNodes;
let revChild = review.childNodes;
scroll.onclick = function() {
   let target = event.target;
   if(target.className !="scroll") {
    child.forEach(e => {
            e.classList.remove('ok');
            target.classList.add('ok');
            if (e.className == 'ok') target.src= 'img/white.png'
            else e.src = 'img/grey.png';
            why()
        });
   }
}
function why() {
    if (child[0].className == "ok") {
        revChild[0].classList.add('center');
        revChild[1].classList.remove('center');
        revChild[2].classList.remove('center');
    }
    if (child[1].className == "ok") {
        revChild[1].classList.add('center');
        revChild[0].classList.remove('center');
        revChild[2].classList.remove('center');
    }
    if (child[2].className == "ok") {
        revChild[2].classList.add('center');
        revChild[1].classList.remove('center');
        revChild[0].classList.remove('center');
    }
}
