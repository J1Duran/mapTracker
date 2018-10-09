
## Getting started

### Installation Map Tracker Beta

Although I prefer yarn, you can use either yarn or npm:

- `npm install` or simply `yarn`

### Run development

- `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### Run production build

- `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### DIRECTORIO DE APP

```
maptrack
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    │   ├── GoogleMap.js
    │   ├── MapTracker.js
    │   └── Marker.js
    ├── const
    │   ├── center_map.js  
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
    └── env.sample
```

### MAP KEY

  - add api key in .env local
