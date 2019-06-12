// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
		apiKey: "AIzaSyC9GFrnXAyd-5_u2nhe0Df43vcnQnaFfD0",
		authDomain: "my-awesome-project-4ec4b.firebaseapp.com",
		databaseURL: "https://my-awesome-project-4ec4b.firebaseio.com",
		projectId: "my-awesome-project-4ec4b",
		storageBucket: "my-awesome-project-4ec4b.appspot.com",
		messagingSenderId: "340508966157",
		appId: "1:340508966157:web:5300443bf72f30fa"
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
