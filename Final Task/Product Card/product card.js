let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <div class="card">

                    <h2>${c.title}</h2>

                    <img src="${c.image}" alt="${c.title}">

                    <p>Price: $${c.price}</p>

                    <p>Category: ${c.category}</p>

                    <p>Rating: ${c.rating.rate}</p>

                </div>
            `;

            api.append(card);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });