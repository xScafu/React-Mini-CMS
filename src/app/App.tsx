import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

function App() {
  const AppLayout = lazy(() => import("./AppLayout"));

  return (
    <>
      <Suspense fallback={<Loading />}>
        <AppLayout />
      </Suspense>
    </>
  );
}

export default App;
