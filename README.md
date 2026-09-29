# Car Store

A fictional car dealership built with HTML, CSS and vanilla JavaScript. No libraries, frameworks, installation, build step or internet connection is needed to use the website.

## Open the project

1. Extract `Car-Store-Final.zip` completely.
2. Open `Car-Store/index.html` in Microsoft Edge or Chrome.
3. Browse categories, switch photos, add cars, and open Cart.

The cart is stored with localStorage in the same browser. Direct file opening and cross-page persistence were tested in Microsoft Edge. Browser settings that block storage can prevent persistence; the site displays a message when saving fails. Prices are fictional USD amounts. No payment or real purchase takes place. Photos illustrate model families and may show different years, trims or colors.

## Files and code

- `index.html` / `index.js`: home and DOM-generated featured cars.
- `sports.html` / `sports.js`: Sports Cars filtering and rendering.
- `suv.html` / `suv.js`: SUV filtering and rendering.
- `luxury.html` / `luxury.js`: Luxury Cars filtering and rendering.
- `electric.html` / `electric.js`: Electric Cars filtering and rendering.
- `cart.html` / `cart.js`: cart table, quantity buttons, removal and totals.
- `products.js`: 12 product objects in an array, plus shared rendering, image switching and cart storage functions.
- `style.css`: shared styles and responsive media queries.
- `images/`: 24 local JPEGs arranged in four category folders.
- `IMAGE-CREDITS.md`: photo sources, creators and licenses.
- `PROJECT-REPORT.md`: requirement checklist and test results.

Each HTML page loads `products.js` first and its own page script second using `defer`. Simple functions, `for` loops, `forEach()`, `filter()`, `find()`, DOM methods and event listeners demonstrate course concepts. Cart entries contain an ID and quantity; prices always come from the product catalog. Repeated additions update the existing entry.

## Try the cart calculation

Add the Porsche 911 twice, the Chevrolet Corvette once and the BMW X5 once. The cart has three rows and four cars, totaling **$370,000.00**. Quantity controls update the row totals and grand total. Removing the Corvette changes the total to **$298,000.00**. Remove every row to see the empty-cart state.

## Assignment layout

Home: header/navigation, hero, four category links, featured product cards, footer.

Category: consistent header/navigation, category introduction, filtered product cards, footer.

Cart: consistent header/navigation, table with Product / Price / Quantity / Total / Remove, final total, footer. On narrow screens the table scrolls inside its container.
