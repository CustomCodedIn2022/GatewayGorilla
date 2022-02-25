button = Document.getElementById('button');

function show(){

    let div = Document.createElement('div');
    div.innerHTML = '<h1>whyyyy whyyyyy you are so mean >:( </h1>'
    Document.body.appendChild(div);
    
    }
    
    button.addEventListener('click', show, false);

