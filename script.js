

const text = 'I LOVE THANH TRÃC SO MUCH! ð  '

let index = 0;
function getText() {
    document.querySelector('.text').innerHTML = text.slice(0,index)
    index++;
    if (index > text.length) {
        index = 0;
    }
}

setInterval(getText,100)

function getHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    heart.innerText = 'ð'
    document.body.appendChild(heart)

}

setInterval(getHeart,1000)