import AccountForm from "./components/AccountForm.component";

export default function Account() {
  const nomeAccount = "Ermenegildo";

  return (
    <>
      <section className="account">
        <div className="container-header">
          <h1 className="section-title">{`Benvenuto, ${nomeAccount}`}</h1>
        </div>
        <div className="container">
          <AccountForm />
        </div>
      </section>
    </>
  );
}
