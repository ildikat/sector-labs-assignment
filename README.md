# Sector Labs Gists Displayer

This project was created with [Create React App](https://github.com/facebook/create-react-app).

The for the badge style Bootstrap was used.

# Enchancements, optimizations
The application uses Redux to store the searched use, gist lists in a global store. This makes it possible to reach the stored elements without the need to send them down the tree. This also reduces the calls to the API, as we only fetch them once, and the child elements use that data.


The application should minimize the calls to the GitHub API, because this affects the loading time of tha application, and the API has a number of maximum calls per an hour. The application needs to make minimum calls as needed. Regarding this problem, the application called the API with each letter the user typed in the search input. This resulted in multiple calls when it didn't need to. The solution was to only make the API call when the user pressed a "Search" button.

Another problem encountered with the number of calls was when displaying the gists. With each gist the application needs to make a call to find out the last forks. Instead of showing all gists at once, a pagination was created where only 5 gists are displayed. The rest of the gists can be seen by navigating with two buttons: "prev" and "next". This minimizes the calls sent at once.

If the multiple calls are a problem, the fetched data can be stored. The downfall for this is that if the data will be modified, the application will still work with the old stashed one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

