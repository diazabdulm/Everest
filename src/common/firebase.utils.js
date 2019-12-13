import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import config from "../constants/firebaseConfig";

firebase.initializeApp(config);

export const createUserProfileDocument =  async (userAuth, additionalData) => {
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.id);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertTasksSnapshotToMap = tasks => {
  const transformedTaskCollection = tasks.docs.map(doc => {
    const { text, date, projectId } = doc.data();

    return {
      text,
      date,
      projectId,
      id: doc.id
    };
  });

  return transformedTaskCollection;
};

export const convertProjectsSnapshotToMap = projects => {
  const transformedProjectCollection = projects.docs.map(doc => {
    const { text } = doc.data();

    return {
      text,
      id: doc.id
    };
  });

  return transformedProjectCollection;
};

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
