import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  //cat is pathname, example prducts/coat,
  //filters is option values of filter menu, example color and size,
  //sort is the option values of sort menu, example newesr, asc,dec
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products?categories=${cat}`
            : //for some reason "category" doesn't work but if changed to
              //another word it somehow starts working
              "http://localhost:4000/api/products"
        );
        setProducts(res.data); //extracts products data from database
      } catch (err) {}
    };
    getProducts(); //basically gets all the data for products at startup
  }, [cat]);

  useEffect(() => {
    cat && //cat contains pathname example "localH:8k/products/coat"
      setFilteredProducts(
        products.filter(
          //as of now products is an array which contains product data
          (item) =>
            //filters contains filter menu values
            //Object.entries seprates an object into key value pair
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
        )
      );
  }, [products, cat, filters]);
  console.log(JSON.stringify(filteredProducts, null, 2));
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(filteredProducts); //filtered product data
  return (
    <Container>
      {cat //if pathname is there show filtered one else show default product values
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products //contains product data array
            .slice(0, 3)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
