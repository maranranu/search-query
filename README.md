## About the Application

This application is about to search particular string then return the result in order of some defined priority.
   - Creates an Trie tree from csv file.
   - On searching a particular string, trie tree returns all its children after that data is pushed to priority queue on the basis of following criteria:
      - Exact match (givenName/middleName/surname) has highest priority i.e. 1
      - Priority decides on the basis of string length lower the string length higher the priority
   - UI: Very simple UI having search text area with button. Displays the result in tabular form (match str, priority and original string corresponding to search string)


#### Local installation
This app can be installed and run locally. Follow the steps below
- Clone this repo
```
git clone git@github.com:maranranu/search-query.git
```
- Install packages
```
npm install
```
- To start the application, run the following command
```
npm start
```
This launches the app on your default browser on http://localhost:3000

## This application was designed & built with the following technologies
- AngularJS: Adding extra functionality to the HTML elements
- Bootstrap: For styling the web page
- NodeJS: For backend implementation
