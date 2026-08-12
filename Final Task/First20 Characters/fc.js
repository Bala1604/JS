let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let product = document.createElement("div");

            product.className = "product";

            product.innerHTML = `
                <h2>Title: ${c.title}</h2>

                <p class="description">
                    Description: ${c.description.slice(0, 20)}
                </p>
            `;

            api.append(product);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });