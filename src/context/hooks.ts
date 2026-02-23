import { useContext } from "react";
import { FormContext } from "./context";

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
