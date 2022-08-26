# Shopster-ecommerce

![Shopster App](https://i.imgur.com/Xfvm4fA.png)

## Overview:

- Shopster is an eCommerce app using redux for state management
- Products can be filtered using the navigation according to categories
- Every product has an unique id and is accesible using routing.
- The final cart page dispatches actions to the state to update number of items in the cart and their quantities
- The different pages of the application use Server Side Rendering, for the home page, Static Site Genration for the product pages and Client side fetching for the cart checkout.

## Stack

- **Framework**: [Next.js](https://reactjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Styled Components](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/)
- **Testing**: 
    - [React Testing Library](https://testing-library.com/)
    - [Jest](https://jestjs.io/)
- **Deployment**: [Vercel](https://www.vercel.com/)
- **API**: 
    - [GraphQL](https://graphql.org/)
    - [Apollo Client](https://www.apollographql.com/)
    - [API Route](https://scandiwebserve.herokuapp.com/)


## Running Locally

```bash
$ git clone https://github.com/andrewdoro/vestis-ecommerce.git
$ cd shopster app
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Styling

Styling for the application is powered by the styled components library and is written in javascript files in the /components/styled directory. Files containing styles for the application are prefixed with '.styled.js' for easier recognition. The configuration for writing media queries is contained in 'mediaqueries.js' which are exported and then imported to the relavant style files for responsive design.


## New Learnings

There were various new tools I learned in the development of this application and are listed such:
- Deeper understanding of the SSG, SSR and ISG concepts and capabilities of the Nextjs framework. 
- Utilizing Redux and Redux for complex and immutable state management in applications.
- The protocols for the consumption of GraphQL APIs


## Testing

Testing was setup for this project using the structure found at [this article:](https://blog.jarrodwatts.com/how-to-set-up-nextjs-with-jest-react-testing-library-and-playwright)


## License

[MIT](https://choosealicense.com/licenses/mit/)

