// components/ProductCard.js

import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

const ProductCard = ({product}) => {
  const {name, price, description, image} = product

  return (
    <div className={styles.container}>
      <Image src={image} alt={name} width={250} height={250} />
      <p>
        <b>{name}</b>
      </p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
