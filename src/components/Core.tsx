export default function Core({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="core">
        <div className="main-container">{children}</div>
      </main>
    </>
  );
}
