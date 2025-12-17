function App() {
  return (
    <form action={`${import.meta.env.VITE_BACKEND_URL}/name`} method="get">
      <input name="username" />
      <input name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
