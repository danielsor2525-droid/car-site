// filter() selects only the cars belonging to this category.
const categoryCars = products.filter(function (car) {
    return car.category === "Electric Cars";
});
renderProducts(categoryCars);
updateCartCount();
