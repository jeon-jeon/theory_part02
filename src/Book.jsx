const Book = ({ image, title, description }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 15px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }}
    >
      <img
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        src={image}
        alt=""
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Book;
