🛠️ Project Setup
To get started with the application:

bash
Copy
Edit
git clone <your-repo-url>
cd myapp
npm install
npm start



💡 Overview
This assignment appeared to be a simple product listing and cart implementation. However, upon reviewing the provided API, I noticed that the product objects lacked a quantity field. To enable full cart functionality (such as increasing/decreasing quantity), I added a quantity property to each product manually after fetching the data.



🧠 My Approach
🔄 State Management with React Context API
To manage global cart state across multiple components, I used the React Context API.

Defined the cart state in the main parent component.

Used Context.Provider to pass the cart data and functions.

Accessed it in child components using Context.Consumer.




🛒 Cart Functionality
Add to Cart:
Checked if the product already exists in the cart. If not, added it with quantity: 1.

Increase Quantity:
Located the product by ID in the cart list and incremented the quantity.

Decrease Quantity:
Located the product by ID and decremented the quantity, ensuring it doesn't go below 1.

Remove from Cart:
Filtered out the selected product from the cart array.

Update Cart State:
All changes to cart were handled immutably and updated using setCartList.



⚠️ Challenges Faced
Initially overlooked the missing quantity field in API response.

After recognizing the issue, manually added a quantity: 1 field to each fetched product object.

Faced a layout bug on tablet devices where the footer shifted upward.

Solved it by refactoring the main container layout using Flexbox for consistent alignment.



📦 Packages Used
create-react-app

react-router-dom@5.2.0

react-spinners – for loading indicators



🎁 Features Implemented
✅ Product listing with Add to Cart

✅ Search functionality to filter products by title

✅ Dark Mode / Light Mode toggle from the navbar

✅ React Spinner loading indicator while fetching data

✅ Empty State Handling

Displayed a placeholder image when the cart or search result is empty



✨ Additional Improvements
While the core functionality was completed, I made the following enhancements:

Responsive Design: Ensured layout is responsive on mobile and desktop. Footer now behaves correctly across screen sizes.

UI Polish: Styled components for better user experience using custom CSS.



🚀 Future Scope
Given more time, I would:

Integrate Next.js for better performance and server-side rendering.

Implement User Authentication and Cart Persistence.

Add Backend Integration for a complete e-commerce experience.



🙌 Final Note
This project was developed using:

React for UI

CSS for styling

Context API for state management

I look forward to the opportunity to build more advanced applications using Next.js and explore more full-stack features in future tasks.

