let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(c => {

            let image = document.createElement("img");

            image.src = c.image;

            image.alt = c.title;

            api.append(image);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });