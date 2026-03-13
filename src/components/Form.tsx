import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export default function Form({
  children,
  cssClass,
}: {
  children: React.ReactNode;
  cssClass: string;
}) {
  const { handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <>
      <form className={`${cssClass}`} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </>
  );
}
