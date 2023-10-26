import React, { createContext, useContext, useReducer } from 'react';

// Create a context
const FormDataContext = createContext();

// Initial state
const initialState = {
  city: '',
  start_location: '',
  start_date: '',
  end_date: '',
  budget: '',
  interests: '',
};

// Define the reducer function
const formDataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      return { ...state, city: action.payload };
    case 'UPDATE_START_LOCATION':
      return { ...state, start_location: action.payload };
    case 'UPDATE_START_DATE':
      return { ...state, start_date: action.payload };
    case 'UPDATE_END_DATE':
        return { ...state, end_date: action.payload };
    case 'UPDATE_BUDGET':
      return { ...state, budget: action.payload };
    case 'UPDATE_INTERESTS':
      return { ...state, interests: action.payload };
    default:
      return state;
  }
};

// Create the context provider component
export const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formDataReducer, initialState);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to access the context
export const useFormData = () => {
  return useContext(FormDataContext);
};
