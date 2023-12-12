### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of the React Router is to enable the navigation among views in a React application. It maintains the standard structure and behavior of a web application, allowing users to use the browser's back and forward buttons, and providing the ability to bookmark a specific view. React Router uses the concept of dynamic routing, which allows routing to be defined as the application is rendering, making the routes more flexible and tailored to the user's experience.

- What is a single page application?
A Single Page Application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app. In an SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

- What are some differences between client side and server side routing?
In client-side routing, the client downloads the page from the server, then the routing happens internally, allowing the user to navigate between pages without the server needing to be involved. The browser uses JavaScript to render the page. In server-side routing, the server downloads the page from the server every time the user navigates to a new page, and the browser reloads the page. The server renders the page using HTML.

- What are two ways of handling redirects with React Router? When would you use each?
<Redirect /> component: This is a component provided by React Router that will immediately navigate to a new location. It's useful when you want to redirect from one route to another in response to some condition (like a user not being authenticated).
history.push or history.replace: These are methods provided by the history object in React Router. history.push adds a new entry onto the history stack, while history.replace replaces the current entry. You might use these methods in response to user actions, like clicking a button.

- What are two different ways to handle page-not-found user experiences using React Router? 
Using the <Switch> and <Route> components with no path: The <Switch> component renders the first child <Route> or <Redirect> that matches the location. If none of the <Route> components match, you can add a <Route> without a path at the end, and it will act as a catch-all for undefined routes.
Using the history object's location property: If you want more control over when the "not found" page is shown, you can use the location property of the history object. You can check if history.location matches any of your defined paths, and if not, render the "not found" page. This is a more manual approach and might be useful in more complex applications.
- How do you grab URL parameters from within a component using React Router?

- What is context in React? When would you use it?
In React, Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

You would use Context when you have global data that many components in your application need to access, and you want to avoid prop drilling (passing data through intermediate components). This is particularly useful in larger applications where passing props through a deep component tree can become cumbersome.
- Describe some differences between class-based components and function
  components in React.
Syntax: Class components require a more verbose syntax, including the constructor, render method, and this keyword. Functional components have a simpler syntax and are easier to read and write.
Lifecycle Methods: Class components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. Functional components did not originally have access to these lifecycle methods, but with the introduction of Hooks in React 16.8, you can use useEffect to achieve similar results.
- What are some of the problems that hooks were designed to solve?
React Hooks were introduced to solve several problems commonly encountered in React development:

Complexity in Reusing Stateful Logic: Before Hooks, patterns like render props and higher-order components were used to reuse stateful logic, but these could lead to harder-to-understand code due to "wrapper hell". Hooks allow you to reuse stateful logic without changing your component hierarchy.

Classes Confuse Both People and Machines: Class components can be confusing for developers, especially those new to React or JavaScript. They also complicate certain optimizations in React. Hooks let you use more of React's features without classes.

Difficult to Understand Component Lifecycles: With classes, it's difficult to ensure related code is in the same place. For example, componentDidMount and componentDidUpdate often contain duplicate code to sync state with props. Hooks allow you to split one component into smaller functions based on what pieces are related (e.g., setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.

Large Components Become Hard to Understand: As components grow, they become harder to understand. Hooks let you split components into smaller functions as mentioned above.