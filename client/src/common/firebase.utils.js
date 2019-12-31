import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyA4IxOY6L0AurRFQ_WkdEAIuLpmamCkTxY",
	authDomain: "everest-1db20.firebaseapp.com",
	databaseURL: "https://everest-1db20.firebaseio.com",
	projectId: "everest-1db20",
	storageBucket: "everest-1db20.appspot.com",
	messagingSenderId: "33476943878",
	appId: "1:33476943878:web:0da7dea4f5243afb7b2387"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log(`error creating user: ${error}`);
		}
	}

	return userRef;
};

export const convertSnapshotToMap = snapshot => {
	const transformedCollection = snapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id
	}));

	return transformedCollection;
};

export const convertTimestampsToDates = array => {};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const tasksRef = firestore.collection("tasks");
export const projectsRef = firestore.collection("projects");

export default firebase;
