import { useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select/base";

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
  const [value, setValue] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(options);

  return (
    <>
      <div className={`selectForm input-wrapper ${gridClass}`}>
        <label className={` ${errorClass}`} htmlFor={inputId}>
          {labelContent}
        </label>
        <Controller
          name={inputName}
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Select
              placeholder=""
              onChange={() => onChange}
              className={`${error ? "error" : ""}`}
              options={options}
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
              onBlur={() => setMenuIsOpen(false)}
              menuIsOpen={menuIsOpen}
              onInputChange={(value) => setValue(value)}
              value={value}
            />
          )}
        />
      </div>
    </>
  );
}
