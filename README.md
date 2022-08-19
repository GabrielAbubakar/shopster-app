This is a [Next.js](https://nextjs.org/) frontend project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This application also utilizes the Apollo Client to query a GraphQL API and Redux Toolkit for management of application relevant state. (User Cart State)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
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
