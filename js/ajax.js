let ajaxLoaded = () => {
    let item = ""
    $.ajax({
        "url": "../api/products.json",
        "method": "GET",
        "type": "json",
        "data": {},
        "success": function (response) {
            console.log(response)
            response.map(function (elem,index) {

                item += `
                <div class="product">
                <img src=${elem.image} alt="product-image">
                <i class="fa-solid fa-heart"></i>
                <h1>${elem.productName}</h1>
                <p>${elem.description}</p>
                <a href="/products" data-link>${elem.link}</a>
</div>
                `
            })
            document.getElementById("product").innerHTML = item
        }
    })
}
    document.addEventListener("DOMContentLoaded", ajaxLoaded)

