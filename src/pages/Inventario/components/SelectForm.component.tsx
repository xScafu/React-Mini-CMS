import { Controller, type Control } from "react-hook-form";
import Select from "react-select";
import { setAddCategoryIsOpen } from "../../../features/category/addCategorySlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAppSelector } from "../../../store/store";
import type { Category, Product } from "../../../core/Types";

export default function SelectForm({
  control,
  gridClass,
  inputName,
  inputId,
  labelContent,
  errorClass,
  categoriesName,
  setReadOnly,
  setValue,
}: {
  control?: Control;
  gridClass?: string;
  inputName?: string;
  inputId?: string;
  labelContent?: string;
  errorClass?: string;
  categoriesName: string[];
  setReadOnly?: boolean;
  setValue?: Product["product"] | Category["category"];
}) {
  const [toggleModify, setToggleModify] = useState(false);

  const detailIsOpen = useAppSelector((state) => state.dialog.detailIsOpen);
  const dispatch = useDispatch();

  const setCategoryValue =
    setValue && "tagCategoria" in setValue && "nomeCategoria" in setValue
      ? { value: setValue.tagCategoria, label: setValue.nomeCategoria }
      : null;

  const addCategory = {
    value: "aggiungiCategoria",
    label: "+ Aggiungi nuova categoria",
  };

  const options = categoriesName.map((category: string) => ({
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
        name={inputName ?? ""}
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Select
            menuIsOpen={setReadOnly ? false : undefined}
            options={options}
            isSearchable={!setReadOnly}
            isClearable={false}
            placeholder=""
            classNamePrefix={"react-select"}
            className={fieldState.error ? "error" : ""}
            onBlur={field.onBlur}
            defaultValue={
              (detailIsOpen && setReadOnly) || (detailIsOpen && !toggleModify)
                ? options.find(
                    (option) => option.value === setCategoryValue?.value,
                  )
                : options.find((option) => option.value === field.value?.value)
            }
            onChange={(selectedOption) => {
              field.onChange(selectedOption);
              if (
                selectedOption &&
                selectedOption.value === addCategory.value
              ) {
                dispatch(setAddCategoryIsOpen(true));
              } else {
                dispatch(setAddCategoryIsOpen(false));
              }
            }}
            onMenuOpen={() => setToggleModify(true)}
          />
        )}
      />
    </div>
  );
}
