# Twine frontend interview repository

## Getting started

Using Node `12`

1. Install packages
   `npm install`

2. Run `json-server` for mock APIs (on Port 4000)
   `npm run server-mockjson`

3. Run in your local development (on Port 3000)
   `npm run start`


Reference : https://whimsical.com/twine-l3-frontend-engineer-take-home-test-FDth34JfUTk5FQqw6Smv8s


## About the Project
 - Used `antd` as UI Framework Library
 - Used Functional Components with `React Hooks`
 - Used `useState, useEffect` for State Management
 - Used `useReducer` and passed the `state` and `dispatch` of the counter to `useContext`
 - Used `useContext` for easier access to counter information across Components
 - Used `LocalStorage` for persisting information post reload
 - Added `eventListener` for changes to storage to sync changes to local storage across tabs using the same information
 - Used `HOC` with `BaseLayout` for getting different Layout 
 - Used `json-server` to start a server to host the mock APIs
    - http://localhost:4000/rehireEligibleEmployees
    - http://localhost:4000/rehireUnknownEmployees
    - http://localhost:4000/rehireInEligibleEmployees 
    - Data is being loaded from `mockAPIData.json`
 - Used `useQuery` for Data Fetching from the mock APIs
 - Used Composition and Conditional Rendering wherever necessary

 ## Possible Improvements
  - Better definition of Context to avoid over-loading all components