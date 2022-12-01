let button = document.createElement('button'); 
    document.body.appendChild(button);


button.addEventListener("click", (createNewFact)=>{


fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((response) => response.json())
    .then((data)=>{
        let createNewFact = document.createElement('p');
        let newFactText = document.createTextNode(data.text);
        createNewFact.appendChild(newFactText);
        document.body.appendChild(createNewFact);

        
        console.log(newFactText)
        
       

        return newFactText;
        })

    
        
        
        }
        

    )
 


//api ----> https://pokeapi.co/api/v2/pokemon/

// const ulElement = document.querySelector('ul');

// const createLiElement = (valor) =>{
//     const liElement = document.createElement('li');
//     liElement.innerHTML=valor;
//     return liElement;
// }

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(result => result.json())
//     .then(data => {
//         data.results.forEach(elemento => //data.results es el la posición donde empieza nuestro array (está dentro de un campo 'results')
//             ulElement.appendChild(createLiElement(elemento.name))
//         )
//     })
//     .catch(error => console.log(error))

        