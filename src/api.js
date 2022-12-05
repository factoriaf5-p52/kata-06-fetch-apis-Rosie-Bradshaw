// let button = document.createElement('button'); 
//     document.body.appendChild(button);

// document.querySelector('button').innerHTML = 'Press me';

// button.addEventListener("click", (createNewFact)=>{


// fetch('https://uselessfacts.jsph.pl/random.json?language=en')
//     .then((response) => response.json())
//     .then((data)=>{
//         let createNewFact = document.createElement('p');
//         let newFactText = document.createTextNode(data.text);
//         createNewFact.appendChild(newFactText);
//         document.body.appendChild(createNewFact);
//         })
//     }
// )


const miParrafo = document.querySelector('p');
const boton = document.querySelector('button');

//usaremos código async/await para reescribir la promesa y que cada función solo haga una cosa. 

//Función que trae datos de la API
export const getApiData = async () => {
    const result = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    const data = await result.json();
    return data.text;
}

//función que pinta los datos en el párrafo
const printData = (text) => {
    miParrafo.innerText = text
}

//función que se ejecuta con el click del botón
const buttonClick = async () =>{
    const text = await getApiData();
    printData(text);
}

boton.addEventListener('click',buttonClick);

