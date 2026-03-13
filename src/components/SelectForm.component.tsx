import type { UseFormRegisterReturn } from "react-hook-form";
import Select, { type SingleValue } from "react-select";

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

export default function SelectForm({
  gridClass,
  errorClass,
  labelContent,
  registerProp,
  placeholder,
  setReadOnly,
  options,
  defaultValue,
  selectId,
}: SelectFormProps) {
  const handleChange = (newValue: SingleValue<Option>) => {
    if (registerProp) {
      registerProp.onChange({
        target: {
          name: registerProp.name,
          value: newValue ? newValue.value : "",
        },
      });
    }
  };

  return (
    <>
      <div className={`select-form ${gridClass}`}>
        <label htmlFor="gender" className={`${errorClass}`}>
          {labelContent}
        </label>
        <Select
          {...registerProp}
          id={selectId}
          options={options}
          defaultValue={defaultValue ? defaultValue : null}
          classNamePrefix="react-select"
          className={`${errorClass}`}
          placeholder={placeholder}
          isDisabled={setReadOnly}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
