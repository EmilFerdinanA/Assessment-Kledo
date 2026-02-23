import type { IDistricts, IProvince, IRegencies } from "@/interface/dao";
import { createContext, useEffect, useState } from "react";

interface FormType {
  province: IProvince | null;
  regencies: IRegencies | null;
  districts: IDistricts | null;
}

interface IContext {
  form: FormType;
  handleChange: <K extends keyof FormType>(name: K, value: FormType[K]) => void;
  handleReset: () => void;
}

const initialForm: FormType = {
  province: null,
  regencies: null,
  districts: null,
};

const FormContext = createContext<IContext | undefined>(undefined);

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [form, setForm] = useState<FormType>(() => {
    const exist = localStorage.getItem("form");
    return exist ? JSON.parse(exist) : initialForm;
  });

  function handleChange<K extends keyof FormType>(name: K, value: FormType[K]) {
    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "province") {
        updated.regencies = null;
        updated.districts = null;
      }

      if (name === "regencies") {
        updated.districts = null;
      }

      return updated;
    });
  }

  function handleReset() {
    setForm(initialForm);
  }

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  const value = { form, handleChange, handleReset };
  return <FormContext value={value}>{children}</FormContext>;
};

export { FormContext, FormContextProvider };
