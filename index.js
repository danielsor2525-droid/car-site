// Pick one featured car from each category, then create cards with the DOM.
const featuredCars = products.filter(function (car) {
    return [1, 4, 7, 10].includes(car.id);
});
renderProducts(featuredCars);
updateCartCount();
