// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBtd9f5phun4M4aTz6zGzYKvIn00q3I8ZM",
    authDomain: "ad-bid-space.firebaseapp.com",
    databaseURL: "https://ad-bid-space.firebaseio.com",
    projectId: "ad-bid-space",
    storageBucket: "ad-bid-space.appspot.com",
    messagingSenderId: "200201620065"
  }
};
