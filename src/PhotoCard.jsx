const PhotoCard = ({ url, title, description }) => {
  return (
    <article
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <img src={url} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
};

export default PhotoCard;
