import type { UseFormRegisterReturn } from "react-hook-form";

export default function InputForm({
  gridClass,
  inputName,
  inputType,
  inputId,
  labelContent,
  errorClass,
  registerProp,
  setReadOnly,
  errorMessage,
}: {
  gridClass?: string;
  inputName?: string;
  inputType?: string;
  inputId?: string;
  labelContent?: string;
  errorClass?: string;
  registerProp?: UseFormRegisterReturn;
  setReadOnly?: boolean;
  errorMessage?: string;
}) {
  return (
    <>
      <div className={`input-wrapper ${gridClass}`}>
        <label className={` ${errorClass}`} htmlFor={inputId}>
          {labelContent}
        </label>
        <input
          {...registerProp}
          className={`${errorClass}`}
          type={inputType}
          name={inputName}
          id={inputId}
          readOnly={setReadOnly}
        ></input>
        {errorMessage}
      </div>
    </>
  );
}
