import React, { createContext, useContext, useReducer } from "react";

// Create a context
const FormDataContext = createContext();

// Initial state
const initialState = {
  location: {
    city: "",
    name: "",
    latitude: "",
    longitude: "",
  },
  start_date: "",
  end_date: "",
  number_of_days_available: "",
  budget: "",
  preferences: [],
};

const formDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CITY":
      return {
        ...state,
        location: { ...state.location, city: action.payload },
      };
    case "UPDATE_START_LOCATION":
      return {
        ...state,
        location: { ...state.location, name: action.payload },
      };
    case "UPDATE_Latitude":
      return {
        ...state,
        location: { ...state.location, latitude: action.payload },
      };
    case "UPDATE_Longitude":
      return {
        ...state,
        location: { ...state.location, longitude: action.payload },
      };
    case "UPDATE_START_DATE":
      return { ...state, start_date: action.payload };
    case "UPDATE_END_DATE":
      return { ...state, end_date: action.payload };
    case "UPDATE_NUMBER_OF_DAYS_AVAILABLE":
      return { ...state, number_of_days_available: action.payload };
    case "UPDATE_BUDGET":
      return { ...state, budget: action.payload };
    case "UPDATE_INTERESTS":
      return { ...state, preferences: action.payload };
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
