// filter() selects only the cars belonging to this category.
const categoryCars = products.filter(function (car) {
    return car.category === "SUV";
});
renderProducts(categoryCars);
updateCartCount();
