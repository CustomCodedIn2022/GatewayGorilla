const button = document.getElementById("button");

function show(){

    let div = document.createElement('div');
    div.innerHTML = '<p>whyyyy whyyyyy you are so mean >:(</p>'
    document.body.appendChild(div);
    
    }
    
    button.addEventListener('click', show, false);

