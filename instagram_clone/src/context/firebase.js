import { createContext } from "react";

const FirebaseContext = createContext(null);

// provider-------component1------- (firebase init here)
// -------component2-------
// -------component3-------
// consumer-------component4------- (firebase init here)
// -------component5-------
// -------component6-------
// -------component7-------
// -------component8-------
// consumer-------component9------- (firebase init here)
export default FirebaseContext;