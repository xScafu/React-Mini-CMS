import { useForm } from "react-hook-form";
import InputForm from "../../../components/InputForm.component";
import SelectForm from "../../../components/SelectForm.component";
import type { User } from "../../../core/Types";
import Form from "../../../components/Form";

export default function AccountForm({ user }: { user: User }) {
  console.log(user);

  const User: User = {
    address: {
      geolocation: {
        lat: user.address.geolocation.lat,
        long: user.address.geolocation.long,
      },
      city: user.address.city,
      province: user.address.province,
      street: user.address.street,
      number: user.address.number,
      zipcode: user.address.zipcode,
    },
    id: user.id,
    email: user.email,
    username: user.username,
    password: user.password,
    name: {
      firstname: user.name.firstname,
      lastname: user.name.lastname,
    },
    gender: user.gender,
    phone: user.phone,
    __v: user.__v,
  };

  const { register } = useForm({
    defaultValues: {
      firstname: User.name.firstname,
      lastname: User.name.lastname,
      gender: User.gender,
      email: User.email,
      phone: User.phone,
      username: User.username,
      password: User.password,
      city: User.address.city,
      province: User.address.province,
      street: User.address.street,
      number: User.address.number,
      zipcode: User.address.zipcode,
    },
  });

  const selectOptions = [
    { value: "maschio", label: "Maschio" },
    { value: "femmina", label: "Femmina" },
    { value: "altro", label: "Altro" },
  ];

  const currentOption = { value: "maschio", label: "Maschio" };

  return (
    <>
      <Form cssClass="grid account-form">
        <p className="form-description">Informazioni del profilo</p>

        <div className="row">
          <div className="col-2 br-1">
            <h2 className="">Dati anagrafici</h2>
          </div>
          <div className="col-8 offset-col-3  grid">
            <div className="row input-container">
              <InputForm
                registerProp={{ ...register("firstname") }}
                labelContent="Nome"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("lastname") }}
                labelContent="Cognome"
                gridClass="col-6"
                setReadOnly={true}
              />
              <SelectForm
                registerProp={{ ...register("gender") }}
                labelContent="Sesso"
                gridClass="col-6"
                placeholder=""
                options={selectOptions}
                defaultValue={currentOption}
                setReadOnly={true}
                selectId="gender"
              />
              <InputForm
                registerProp={{ ...register("email") }}
                labelContent="E-mail"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("phone") }}
                labelContent="Telefono"
                gridClass="col-6"
                setReadOnly={true}
              />
            </div>
          </div>
          <div className="btns-container col-11">
            <button className="btn small" type="submit">
              Modifica
            </button>
            <button className="btn small">Annulla</button>
          </div>
        </div>
        <div className="row">
          <div className="col-2 br-1">
            <h2 className="">Gestione account</h2>
          </div>
          <div className="col-8 offset-col-3  grid">
            <div className="row input-container">
              <InputForm
                registerProp={{ ...register("username") }}
                labelContent="Username"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("password") }}
                labelContent="Password"
                gridClass="col-6"
                setReadOnly={true}
              />
            </div>
          </div>
          <div className="btns-container col-11">
            <button className="btn small" type="submit">
              Modifica
            </button>
            <button className="btn small">Annulla</button>
          </div>
        </div>
        <div className="row">
          <div className="col-2 br-1">
            <h2>Informazioni aggiuntive</h2>
          </div>
          <div className="col-8 offset-col-3 grid">
            <div className="row input-container">
              <InputForm
                registerProp={{ ...register("city") }}
                labelContent="Città (residenza)"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("province") }}
                labelContent="Provincia (residenza)"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("street") }}
                labelContent="Indirizzo (residenza)"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("number") }}
                labelContent="Numero (residenza)"
                gridClass="col-6"
                setReadOnly={true}
              />
              <InputForm
                registerProp={{ ...register("zipcode") }}
                labelContent="Codice postale (residenza)"
                gridClass="col-6"
                setReadOnly={true}
              />
            </div>
          </div>
          <div className="btns-container col-11">
            <button className="btn small" type="submit">
              Modifica
            </button>
            <button className="btn small">Annulla</button>
          </div>
        </div>
      </Form>
    </>
  );
}
