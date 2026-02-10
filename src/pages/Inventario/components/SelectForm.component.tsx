import { Controller } from "react-hook-form";
import Select from "react-select";
import { setAddCategoryIsOpen } from "../../../features/category/addCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import type { Category } from "../../../core/Types";

export default function SelectForm({
  control,
  gridClass,
  inputName,
  inputId,
  labelContent,
  errorClass,
  categoriesName,
  setReadOnly,
}) {
  const detailIsOpen = useSelector(
    (state: boolean) => state.dialog.detailIsOpen
  );
  const dispatch = useDispatch();

  const addCategory = {
    value: "aggiungiCategoria",
    label: "+ Aggiungi nuova categoria",
  };

  const options = categoriesName.map((category) => ({
    value: category.toLowerCase(),
    label: category,
  }));

  options.push(addCategory);

  return (
    <div className={`selectForm input-wrapper ${gridClass}`}>
      <label className={errorClass} htmlFor={inputId}>
        {labelContent}
      </label>

      <Controller
        name={inputName}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Select
            isDisabled={setReadOnly}
            options={options}
            isClearable
            placeholder=""
            classNamePrefix={"react-select"}
            className={fieldState.error ? "error" : ""}
            onBlur={field.onBlur}
            value={
              options.find((option) => option.value === field.value?.value) ||
              null
            }
            onChange={(selectedOption) => {
              field.onChange(selectedOption);
              if (selectedOption.value === addCategory.value) {
                dispatch(setAddCategoryIsOpen(true));
              }
            }}
          />
        )}
      />
    </div>
  );
}
