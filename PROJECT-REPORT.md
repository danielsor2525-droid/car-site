# Final project report: Car Store

## Deliverables

Created six HTML files (`index.html`, `sports.html`, `suv.html`, `luxury.html`, `electric.html`, `cart.html`), seven JavaScript files (`products.js` and one named for each HTML page), one `style.css`, 24 JPEG images and three Markdown documentation files. No existing project files were present to modify or preserve.

All project files are inside the `Car-Store` folder. The final archive is `Car-Store-Final.zip`, alongside this folder in the task's outputs directory.

## Products: 12 cars, exactly four categories

| Category | Models |
| --- | --- |
| Sports Cars | Porsche 911; Chevrolet Corvette; Mazda MX-5 |
| SUV | BMW X5; Volvo XC90; Land Rover Defender |
| Luxury Cars | Mercedes-Benz S-Class; Bentley Continental GT; Rolls-Royce Ghost |
| Electric Cars | Tesla Model 3; Porsche Taycan; Hyundai Ioniq 5 |

Every product has a unique numeric ID, name, positive price, description, category and two distinct matching model photos. All 24 images are stored locally in `images/sports`, `images/suv`, `images/luxury` and `images/electric`. Downloaded photo credits and licenses are in `IMAGE-CREDITS.md`.

## PDF requirement comparison

The original one-page Hebrew assignment was read initially, visually inspected, and read again after implementation.

| PDF requirement | Implementation |
| --- | --- |
| At least 10 products in four categories | 12 objects; three cars per category |
| ID, name, price, description, category, at least two images | All fields in `products.js`; 24 local images |
| Home page | `index.html`, hero and DOM-generated featured cars |
| Functional cart | Shared add/save functions and `cart.js` |
| Add/remove products | Buttons on cards and cart rows |
| Cart displayed as a table with final price | Semantic table, row totals, grand total in `tfoot` |
| Separate category page containing its category's products | Four category pages using `filter()` |
| A JavaScript file for every HTML page | Six named page scripts, plus shared `products.js` |
| Meaningful variables, functions, IDs and filenames | Descriptive identifiers and model-based image filenames |
| Correct HTML, CSS, arrays, loops, objects, DOM, responsive design | Semantic page structure, shared CSS, explicit basic JavaScript and media queries |
| Plan/layout recommendation | Page layout described in README |

The PDF permits prefilled cart examples but does not require them. The delivered cart starts empty and works for every car.

## Verification

Browser: Microsoft Edge, opening the HTML directly with `file://`, without a web server. Responsive checks used widths of 390, 768 and 1440 pixels. Desktop home/cart and mobile category layouts were also visually inspected.

- PASS: all six pages open; navigation targets exist; styles and page scripts load.
- PASS: catalog has 12 unique IDs and exactly four categories.
- PASS: each category displays only its three matching cars.
- PASS: all 24 images load and decode; every car's Next Image button cycles and wraps.
- PASS: Add to Cart adds products; repeated additions merge into one row and increase quantity.
- PASS: increase/decrease controls work; quantity cannot go below one.
- PASS: Remove deletes the selected product; removing all products displays the empty state.
- PASS: localStorage retains cart contents across page navigation and reload.
- PASS: line totals and grand totals match exact expected amounts, including $370,000 for two Porsche 911s, one Corvette and one BMW X5.
- PASS: responsive pages have no document-level horizontal overflow. The mobile cart table scrolls within its container.
- PASS: no browser console errors or uncaught JavaScript errors during the full test.
- PASS: malformed saved JSON recovers to an empty cart.

The project uses only HTML, CSS and vanilla JavaScript, with no external runtime scripts, styles, fonts or image URLs. Photo source links are documentation only.
