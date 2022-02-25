button = document.getElementById('sub');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function show(){

let div = document.createElement('div');
div.innerHTML = '<p>haha you fell for it get ret nred</p>'
document.body.appendChild(div);

}

button.addEventListener('click', show, false);

