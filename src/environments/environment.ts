// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: { production: boolean, endpoint: string; firebaseConfig: any } = {
  production: false,
  endpoint: '/data',
  firebaseConfig: {
    apiKey: "AIzaSyDQLAt9_pxbsd6nHr6F-KuTEGQJmMVUk0M",
    authDomain: "saiful-1a525.firebaseapp.com",
    databaseURL: "https://saiful-1a525.firebaseio.com",
    projectId: "saiful-1a525",
    storageBucket: "saiful-1a525.appspot.com",
    messagingSenderId: "150700498743"
  },
};
