export default function InputForm({
  gridClass,
  inputName,
  inputType,
  inputId,
  labelContent,
  errorClass,
  registerProp,
  setValue,
  setReadOnly,
}) {
  return (
    <>
      <div className={`input-wrapper ${gridClass}`}>
        <label
          className={`js-labels js-nomeProdotto-label ${errorClass}`}
          htmlFor={inputId}
        >
          {labelContent}
        </label>
        <input
          {...registerProp}
          className={`js-input ${errorClass}`}
          type={inputType}
          name={inputName}
          id={inputId}
          value={setValue}
          readOnly={setReadOnly}
        ></input>
      </div>
    </>
  );
}
