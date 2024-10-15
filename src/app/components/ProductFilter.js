import { useState, useEffect } from "react";
import styles from "./ProductFilter.module.css";

export default function ProductFilter({filter: init, onChange}) {
  const [filter, setFilter] = useState(init)

  useEffect(() => {
    setFilter(init)
  }, [init])

  const handleChange = (e) => {
    setFilter(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search Products..." value={filter} onChange={handleChange} />
    </div>
  );
}
