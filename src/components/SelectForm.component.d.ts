import type { UseFormRegisterReturn } from "react-hook-form";
interface Option {
    value: string;
    label: string;
}
interface SelectFormProps {
    gridClass?: string;
    errorClass?: string;
    labelContent?: string;
    registerProp?: UseFormRegisterReturn;
    placeholder?: string;
    setReadOnly?: boolean;
    defaultValue?: Option | null;
    selectId?: string;
    options?: Option[];
}
export default function SelectForm({ gridClass, errorClass, labelContent, registerProp, placeholder, setReadOnly, options, defaultValue, selectId, }: SelectFormProps): import("react/jsx-runtime").JSX.Element;
export {};
