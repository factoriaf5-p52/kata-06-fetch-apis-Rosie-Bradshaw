


fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((response) => response.json())
    .then((data)=>{
        let button = document.createElement('button'); 
        document.body.appendChild(button);
        
        newFact = data.text;
        console.log(newFact)})
        
        newFact = document.createElement('p');
        document.body.appendChild(newFact);



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

        