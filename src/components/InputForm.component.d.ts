import type { UseFormRegisterReturn } from "react-hook-form";
export default function InputForm({ gridClass, inputName, inputType, inputId, labelContent, errorClass, registerProp, setReadOnly, errorMessage, placeholder, }: {
    gridClass?: string;
    inputName?: string;
    inputType?: string;
    inputId?: string;
    labelContent?: string;
    errorClass?: string;
    registerProp?: UseFormRegisterReturn;
    setReadOnly?: boolean;
    errorMessage?: string;
    placeholder?: string;
}): import("react/jsx-runtime").JSX.Element;
