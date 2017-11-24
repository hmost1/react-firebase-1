Base React web app with Firebase integration. 

Firebase Setup: 
1. Login to firebase.google.com, create new project

Initial setup: 
1. git clone https://github.com/hmost1/react-firebase-1.git
2. Fill in the file src/firebase_keys.json with your firebase keys
(can be found under your project overview > "Add Firebase to your web app")

Production (firebase) deployment setup (only needs to be done once): 
1. npm run build
2. npm install -g firebase-tools
3. firebase init

  * login, follow prompts to select correct project
  * for initial services, select database and hosting 
  * type in "build" to public folder 
  
4. firebase deploy (or npm deploy) 

Rebuild and deploy: 
npm run build && npm deploy 


Local development: (CAUTION: local development is linked to prod db initially)
npm start 


