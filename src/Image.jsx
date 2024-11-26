import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Image = ({ title, description, url }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        width: "300px",
      }}
    >
      {isLoading && <ClimbingBoxLoader />}
      <img src={url} alt="" onLoad={() => setIsLoading(false)} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default Image;
