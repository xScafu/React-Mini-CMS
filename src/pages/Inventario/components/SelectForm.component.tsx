import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAddCategoryIsOpen } from "../../../features/toggleDialogSlice";

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
  const dispatch = useDispatch();

  const addOption = {
    label: "+ Aggiungi nuova categoria",
    value: "aggiungiCategoria",
  };
  const options = [
    addOption,
    ...(categoriesName ?? []).map((category: string) => ({
      label: category,
      value: category.toLowerCase(),
    })),
  ];

  return (
    <div className={`input-wrapper ${gridClass}`}>
      <label
        className={`js-labels js-nomeProdotto-label ${errorClass}`}
        htmlFor={inputId}
      >
        {labelContent}
      </label>
      <Controller
        control={control}
        name={inputName}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            value={value ?? null}
            className="selectForm"
            options={options}
            readOnly={setReadOnly}
            disablePortal={true}
            isOptionEqualToValue={(option, value) =>
              option?.value === value?.value
            }
            getOptionLabel={(option) => option?.label ?? ""}
            onChange={(event, selected) => {
              if (selected?.value === "aggiungiCategoria") {
                dispatch(setAddCategoryIsOpen(true));
                return;
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Categorie"
                margin="none"
                variant="standard"
              />
            )}
          />
        )}
      />
    </div>
  );
}
