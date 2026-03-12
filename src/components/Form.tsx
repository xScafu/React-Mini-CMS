import { useForm } from "react-hook-form";

export default function Form({ children, cssClass }) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className={`${cssClass}`} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </>
  );
}
