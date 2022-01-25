// createContext - used to instantiate a new context object; creates the global state data and functionality container
// useContext - React Hook that allows us to use the state created from createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// instantiate global state object
const StoreContext = createContext();

// Provider wraps application in to make state data available to all other components
// Consumer grabs and usese the data held by the Provider
const { Provider } = StoreContext;

// instantiate Global state
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };