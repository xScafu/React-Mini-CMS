import type { UseFormRegisterReturn } from "react-hook-form";
import Select from "react-select";

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
}: {
  gridClass?: string;
  errorClass?: string;
  labelContent?: string;
  registerProp?: UseFormRegisterReturn;
  placeholder?: string;
  setReadOnly?: boolean;
  defaultValue?: string;
  selectId?: string;
}) {
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
        />
      </div>
    </>
  );
}
