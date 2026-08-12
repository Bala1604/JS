let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <h2>
                    Title: ${c.title}
                </h2>

                <p class="description">
                    Description: ${c.description.slice(0, 50)}
                </p>

                <p class="price">
                    Price: $${c.price}
                </p>

            `;

            api.append(card);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });