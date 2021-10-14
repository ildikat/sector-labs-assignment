# Sector Labs Gists Displayer

This project was created with [Create React App](https://github.com/facebook/create-react-app).

The for the badge style Bootstrap was used.

# Enchancements, optimizations
The application uses Redux to store the searched use, gist lists in a global store. This makes it possible to reach the stored elements without the need to send them down the tree. This also reduces the calls to the API, as we only fetch them once, and the child elements use that data.


Multiple calls to the GitHub API affects the loading time of the application, and the API has a number of maximum calls per an hour. This is why application needs to make the minimum calls when needed. 

In the earlier stages, the application called the API with each letter the user typed in the search input. This resulted in multiple calls of the API when it didn't need to. The solution was to only make the API call when the user pressed a "Search" button. Another solution could be to send the call when the user stopped typing for a short period of time.

Another problem encountered with the number of calls was when displaying the gists. With each gist the application needs to make a call to find out the last forks. This means that each render made <code> 1+nr_of_gists</code> calls, which can be a lot if the specific GitHub user created multiple gists.

The solution for this problem is to not all gists at once, a pagination was created where only 5 gists are displayed. The rest of the gists can be seen by navigating with two buttons: <code>"prev"</code> and <code>"next"</code>. This minimizes the calls sent at once and also reduces the cost of rendering every component of the list, because only a portion is displayed. 

Another suggestion to reduce the problem of multiple API calls is to cache the fetched data. The downfall for this is that if the data will be modified, the application will still work with the old stashed one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

