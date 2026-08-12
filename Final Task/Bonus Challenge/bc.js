let api = "https://fakestoreapi.com/products"

fetch(api)
    .then((reponse) => {
        return reponse.json()
    })
    .then((data) => {

        data.forEach((c) => {
            let api = document.querySelector(".api")

            let api1 = document.createElement("div")

            api1.innerHTML = `<h3>title : ${c.title}</h3>
    <img src = "${c.image}">
    <button>Price :${c.price}</button>
    <p>category: ${c.category}</p>
    <button>Rating : ⭐ ${c.rating.rate}</button>`
            api.append(api1)
        })
    })