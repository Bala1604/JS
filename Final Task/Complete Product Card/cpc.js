let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let product = document.createElement("div");

            product.className = "product";

            product.innerHTML = `
                
                <img src="${c.image}" alt="${c.title}">

                <h2>
                    Title: ${c.title}
                </h2>

                <p class="category">
                    Category: ${c.category}
                </p>

                <p class="description">
                    Description: ${c.description}
                </p>

                <p class="price">
                    Price: $${c.price}
                </p>

                <p class="rating">
                    Rating: ⭐ ${c.rating.rate}
                </p>

                <p class="reviews">
                    Reviews: ${c.rating.count}
                </p>

                <button>
                    Buy Now
                </button>

            `;

            api.append(product);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });