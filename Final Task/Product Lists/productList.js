let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let product = document.createElement("div");

            product.className = "product";

            product.innerHTML = `
                <h2>Product: ${c.title}</h2>

                <p>Price: $${c.price}</p>

                <p>Category: ${c.category}</p>

                <img src="${c.image}" alt="${c.title}">
            `;

            api.append(product);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });