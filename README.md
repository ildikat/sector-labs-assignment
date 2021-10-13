# Sector Labs Gists Displayer

This project was created with [Create React App](https://github.com/facebook/create-react-app).

The application uses Redux to store the searched use, gist lists in a global store. This makes it possible to reach the stored elements without the need to send them down the tree. This also reduces the calls to the API, as we only fetch them once, and the child elements use that data.

The Github API has a number of maximum calls per an hour. This requires attention, as this number was exceeded while testing. The application needs to be careful with the calls and reduce them, therefore, instead of showing all gists at once, a pagination was created where only 5 gists are displayed. The rest of the gists can be seen by navigating with two buttons: "prev" and "next".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

