# Everest

An open-source ReactJS-based to-do list application. Features:

-  Natural Language Date Processing of tasks for an easier, faster, and more natural in-app experience (e.g. "meditate next friday at 8pm")
-  Create custom projects/categories to organize your tasks (e.g. Work, School, Health, etc.)
-  Filter tasks by All, Today, Week, or Inbox view to gain a more holistic look at your commitments
-  Data synchronization with Firebase server, so your data is everywhere you go
-  Sign in with email and password or One click sign-in with Google
- PWA-compatible, so you can install this app on any of your devices

# Inspiration

I remember seeing a video on Youtube of a developer attempting to build a Todoist (popular task manager) clone in ReactJS. Immediately felt inspired and dared to recreate the core features that Todoist has to offer. Hope you enjoy!

# What I Learned

-  Data normalization
-  New way of creating and structuring Redux code (thanks @acemarke)
   -  I shared my code with the Reactiflux community and was introduced to a new way of creating Redux reducers, actions, store, etc. Many thanks to one of Redux's maintainers, Mark Erikson. Redux boilerplate is much smaller and cleaner.
-  Redux duck pattern
-  Creating, Reading, Updating, and Deleting data from database
-  Handling private and public routes/pages
-  Firebase security rules
-  useCallback and useReducer hook
-  Single Responsibility Principle
-  momentJS date utility
-  NLP date parsing (using chrono-node)

# How to Build

To run locally, clone the repository and run:

```
npm install
```

Once all of the dependencies are installed, you can start the development server with:

```
npm start
```

This project leverages the use of Google's Firestore Database. To connect your Firestore instance to this app, edit the _firebase.utils.js_ file and enter your config. Hack away!
