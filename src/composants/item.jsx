const Item = ({txt, id, delFunc}) => {
  return (
    <div className="item">
      <p className="content">{txt}</p>
      <button
        className="btn"
        id={id}
        onClick={() => delFunc(id)}
      >
        delete
      </button>
    </div>
  );
};
export default Item;
