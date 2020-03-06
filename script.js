const name = document.getElementById('name')
const photo = document.getElementById('photo')
const info = document.getElementById('info')
const ing = document.getElementById('ing')

const container= document.querySelector('.container')


function search(callback) {

    let drink = document.getElementById('drink').value
    console.log(drink)
    callback(drink)
}


function getData(searchDrink){

    let hasPrevious = document.querySelectorAll('div.card')
    if(hasPrevious.length != 0) {
        hasPrevious.forEach((Element => {
            Element.remove()
        }))
    }

    var searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
    console.log(searchURL)
    fetch(searchURL)
    .then((result) => {
    return result.json()
    })
    .then((data) => getHTML(data))

    function getHTML (data) {
        console.log(data)


        for (i = 0; i < data.drinks.length; i ++) {
            let dName = data.drinks[i].strDrink
            let dInfo = data.drinks[i].strInstructions
            let dPhoto = data.drinks[i].strDrinkThumb
    
            var div = document.createElement('div')
            div.classList.add('card')
    
            var header = document.createElement('h1')
            header.classList.add('test')
            var node = document.createTextNode(`${dName}`)
            header.appendChild(node)
    
            var para = document.createElement('p')
            var content = document.createTextNode(`${dInfo}`)
            para.appendChild(content)
    
            var foto = document.createElement('img')
            foto.src = dPhoto
            
    
            div.appendChild(header)
            div.appendChild(para)
            div.appendChild(foto)
            container.appendChild(div)
            }

    }
}






