export default function Animal(props) {
  return (
    <>
      <section className="animal" style={{ top: props.top, left: props.left }}>
        <h2>{props.name}</h2>
        <h3>{props.says}</h3>
      </section>
    </>
  );
}
