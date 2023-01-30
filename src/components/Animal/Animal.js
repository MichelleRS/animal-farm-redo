export default function Animal(props) {
  return (
    <>
      <section className="animal" style={{ top: props.top, left: props.left }}>
        <img src={`animals/${props.image}.svg`} />
        <h2>{props.name}</h2>
        <h3>{props.says}</h3>
      </section>
    </>
  );
}
