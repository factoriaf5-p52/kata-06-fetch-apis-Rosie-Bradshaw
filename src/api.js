let button = document.createElement('button'); 
    document.body.appendChild(button);

document.querySelector('button').innerHTML = 'Press me';

button.addEventListener("click", (createNewFact)=>{


fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((response) => response.json())
    .then((data)=>{
        let createNewFact = document.createElement('p');
        let newFactText = document.createTextNode(data.text);
        createNewFact.appendChild(newFactText);
        document.body.appendChild(createNewFact);
        })
    }
)