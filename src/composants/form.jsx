export default function Form({ input, send, state }) {
  return (
    <form onSubmit={(e) => send(e)}>
      <input type="text" value={state} onInput={(e) => input(e)} />
      <button className="btn btn-form">Create</button>
    </form>
  );
}
