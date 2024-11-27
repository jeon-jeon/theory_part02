import Text from "./Text";

const Card = () => {
  return (
    <article>
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "9999px",
          objectFit: "cover",
        }}
        src="https://images.unsplash.com/photo-1457269449834-928af64c684d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8NHx8c25vd3xlbnwwfHx8fDE3MzI1ODczNDF8MA&ixlib=rb-4.0.3&q=80&w=400"
        alt=""
      />
      <h3>화이트모드</h3>
      <Text />
    </article>
  );
};

export default Card;
