// pages/index.js
'use client'

import {useState, useMemo} from 'react';
import initProducts from "./data/products";
import Header from "./components/Header";
import styles from "./Home.module.css";
import ProductCard from "./components/ProductCard"
import ProductFilter from "./components/ProductFilter"

interface IProduct {
  id: number;
  price: string;
  name: string;
  description: string;
  image: string
}

const includesString = (str: string, pattern: string) => {
  return str.toLowerCase().includes(pattern.toLowerCase())
}

const filterProducts = (products: IProduct[], filter: string) => {
  if (!filter) return products

  return products.filter(p => {
    const {name, price, description} = p
    if (includesString(name, filter) || includesString(price, filter) || includesString(description, filter))
      return true
    return false
  })
}

export default function Home() {
  const [filter, setFilter] = useState('')

  const products = useMemo(() => {
    const ps = filterProducts(initProducts, filter)
    return ps
  }, [filter])

  const handleFilterChange = (f: string) => {
    setFilter(f)
  }

  return (
    <div>
      {/* <Head>
        <title>Product Listing</title>
        <meta
          name="description"
          content="A listing of Callaway golf products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      <main className={styles.main}>
        <ProductFilter filter={filter} onChange={handleFilterChange} />

        <div className={styles.container}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
