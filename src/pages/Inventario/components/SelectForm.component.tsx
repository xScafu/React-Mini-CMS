import Select from "react-select";
import { Controller } from "react-hook-form";

export default function SelectForm({
  control,
  gridClass,
  inputName,
  inputId,
  labelContent,
  errorClass,
  setReadOnly,
  categoriesName,
}) {
  const options = categoriesName.map((category: string) => ({
    value: category.toLowerCase(),
    label: category,
  }));

  return (
    <div className={`input-wrapper ${gridClass}`}>
      <label
        className={`js-labels js-nomeProdotto-label ${errorClass}`}
        htmlFor={inputId}
      >
        {labelContent}
      </label>

      <Controller
        name={inputName}
        control={control}
        render={({ field }) => {
          const selectedOption = options.find(
            (option) => option.value === field.value
          );

          return (
            <Select
              value={selectedOption}
              options={options}
              inputId={inputId}
              className={`js-input ${errorClass}`}
              isDisabled={setReadOnly}
              onChange={(option) => field.onChange(option.value)}
              onBlur={field.onBlur}
            />
          );
        }}
      />
    </div>
  );
}
