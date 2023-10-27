// Example 1: https://chat.openai.com/share/d074b2db-5b1a-44bb-82cb-5631dd8ad6c6
for (var i = 0; i < 5; i++) {
    document.getElementById("btn"+i).addEventListener('click', function() {
        console.log("Button " + i + " clicked");
    });
}


const add_numbers = (a, b) => {
    let result = a + b
    return resut
}

console.log(add_numbers(5, 10))

// Example 2: https://chat.openai.com/share/b531bdf2-9cce-41a1-8847-2ed80b85ffb1
function calculatePrice(quantity, price) {
    const originalPrice = quantity * price;
    const finalPrice = applyDiscount(originalPrice);
    return finalPrice;
}


function applyDiscount(price) {
    const discount = 0.2; // 20% discount
    const discountedPrice = price - (price * discount);
    const accountDiscount = getAccountDiscount();

    return price - accountDiscount;
}


function testCalculatePrice() {
    const actualPrice = 155
    const price = 100;
    const quantity = 2;
    const finalPrice = calculatePrice(quantity, price);
    

    assert(finalPrice === actualPrice) // 100
}