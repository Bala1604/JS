let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let product = document.createElement("div");

            product.className = "product";

            product.innerHTML = `
                <h2>${c.title}</h2>

                <img src="${c.image}" alt="${c.title}">

                <p class="description">
                    Description: ${c.description}
                </p>

                <p class="category">
                    Category: ${c.category}
                </p>

                <p class="price">
                    Price: $${c.price}
                </p>

                <p class="rating">
                    Rating: ⭐ ${c.rating.rate}
                </p>
            `;

            api.append(product);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });