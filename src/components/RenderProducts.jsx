import { useState } from "react";

import styles from "./RenderProducts.module.css";
import Spinner from "./Spinner";
import Button from "./Button";

function RenderProducts({ result }) {
  const [loading, setLoading] = useState(true);
  const [bought, setBought] = useState(false);
  const { title, img, price } = result;

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          {loading ? <Spinner /> : null}
          <img
            src={img}
            alt={title}
            onLoad={handleImageLoad}
            style={loading ? { display: "none" } : {}}
          />
        </div>
        <div className={styles.cardInfo}>
          <h1 className={styles.cardTitle}>{title}</h1>
          <h2>{price}</h2>
          <Button
            type={bought ? "locked" : "green"}
            onClick={() => setBought(true)}
            className={styles.cardBtn}
          >
            {bought ? "Added to cart !" : "Add to cart"}
          </Button>
          {/* <button className={styles.button}>Add to cart</button> */}
        </div>
      </div>
    </div>
  );
}

export default RenderProducts;
