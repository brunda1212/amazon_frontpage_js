let options = {
    method: "GET"
}

let all_products = [];


fetch("https://fakestoreapi.com/products", options)
.then(response => response.json())
.then(jsonData => {
    all_products = jsonData;

    
    let data_products = document.getElementById("products_details");
    data_products.innerHTML = "";
    data_products.style.display = "grid";
    data_products.style.backgroundColor = "gray";
    data_products.style.gridTemplateColumns = "repeat(4, 1fr)";

    jsonData.forEach(product => {
        data_products.innerHTML += `
        <div style="text-align:center;margin:5px;padding:5px;border: 1px solid black;border-radius:10px;background-color:white;">
            <div style="background-color:#C1C7C9;"><img style="height:25vh" src="${product.image}"/></div>
            <p style="font-size:23px;">${product.description}</p>
            <h2 style="font-bold;font-size:27px">${product.title}</h2>
            <p style="font-size:32px;">${"rating:   " + product.rating.rate}</p>
            <h1 style="font-size:35px">${"$" + product.price}</h1>
           <div style="padding:5px;"><button style="font-size:35px;background-color:red;border-radius:9px;color:white;">Buy Now</button></div> 
        </div>
        `;
    });

   
    document.getElementById("category_dropdown").addEventListener("change", () => {
        let selected_category = document.getElementById("category_dropdown").value;

        let filtered_products;
        if (selected_category === "ALL") {
            filtered_products = all_products;
        } else {
            filtered_products = all_products.filter(product =>
                product.category.toLowerCase() === selected_category.toLowerCase()
            );
        }
  
        data_products.innerHTML = "";
        filtered_products.forEach(product => {
            data_products.innerHTML += `
            <div style="text-align:center;margin:5px;padding:5px;border: 1px solid black;border-radius:10px;background-color:white;">
                <div style="background-color:#C1C7C9;"><img style="height:20vh" src="${product.image}"/></div>
                <h6 style="font-family:Arial, Helvetica, sans-serif;font-size:20px;">${product.description}</h6>
                <h2>${product.title}</h2>
                <p style="font-size:20px;">${"rating:   " + product.rating.rate}</p>
                <h1>${"$" + product.price}</h1>
                <button style="background-color:red;border-radius:9px;color:white;font-size:25px;padding:5px;margin:5px;">Buy Now</button>
            </div>
            `;
        });
    });

    
    document.getElementById("search_input").addEventListener("input", () => {
        let search_text = document.getElementById("search_input").value.toLowerCase();

        let filtered_products = all_products.filter(product =>
            product.title.toLowerCase().includes(search_text)
        );

        
        data_products.innerHTML = "";
        filtered_products.forEach(product => {
            data_products.innerHTML += `
            <div style="text-align:center;margin:5px;padding:5px;border: 1px solid black;border-radius:10px;background-color:white;">
                <div style="background-color:#C1C7C9;"><img style="height:20vh" src="${product.image}"/></div>
                <h6 style="font-family:Arial, Helvetica, sans-serif;font-size:20px;">${product.description}</h6>
                <h2>${product.title}</h2>
                <p style="font-size:20px;">${"rating:   " + product.rating.rate}</p>
                <h1>${"$" + product.price}</h1>
                <button style="background-color:red;border-radius:9px;color:white;font-size:25px;padding:3px;;">Buy Now</button>
            </div>
            `;
        });
    });

})
.catch(error => {
    console.log(error);
});


