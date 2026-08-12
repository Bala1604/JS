let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let product = document.createElement("div");

            product.className = "product";

            product.innerHTML = `
                <h2>Product: ${c.title}</h2>

                <p class="rating">
                    Rating: ⭐ ${c.rating.rate}
                </p>

                <p class="reviews">
                    Reviews: ${c.rating.count}
                </p>
            `;

            api.append(product);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });