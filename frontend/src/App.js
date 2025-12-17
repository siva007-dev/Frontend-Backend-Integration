
function App() {
  return (
   <form action={`${process.env.REACT_APP_BACKEND_URL}/name`} method="get">
    <input name="username"></input>
    <input name="password"></input>
    <button>Submit</button>
</form>
  );
}

export default App;
