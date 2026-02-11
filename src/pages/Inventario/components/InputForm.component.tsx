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
