import AccountForm from "./components/AccountForm.component";
import { useUsers } from "./hook/useUsers";

export default function Account() {
  const { users, loading } = useUsers();

  const currentUser = users.find((user) => user._id === "gf18");

  const nomeAccount = currentUser?.username ?? "Sconosciuto";

  if (!loading)
    return (
      <>
        <section className="account">
          <div className="container-header">
            <h1 className="section-title">{`Benvenuto, ${nomeAccount}`}</h1>
          </div>
          <div className="container">
            {currentUser && <AccountForm user={currentUser} />}
          </div>
        </section>
      </>
    );
}
