let products = [];

function addProduct() {
    let name = document.getElementById("name").value;
    let qty = document.getElementById("qty").value;

    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    let item = { 
        productName: name, 
        quantity: qty,
        addedDate: date,
        addedTime: time
    };

    products.push(item);
    localStorage.setItem("inventory", JSON.stringify(products));
    showProducts();
}

function showProducts() {
    let saved = localStorage.getItem("inventory");
    if(saved){
        products = JSON.parse(saved);
    }

    let data = "";
    products.forEach((p, index) => {
        data += `<li>
        <b>${p.productName}</b> - Qty: ${p.quantity} <br>
        <small>Added on: ${p.addedDate} at ${p.addedTime}</small>
        <button onclick="deleteProduct(${index})">Delete</button>
        </li><br>`;
    });

    document.getElementById("list").innerHTML = data;
}

function deleteProduct(i) {
    products.splice(i, 1);
    localStorage.setItem("inventory", JSON.stringify(products));
    showProducts();
}

showProducts();
