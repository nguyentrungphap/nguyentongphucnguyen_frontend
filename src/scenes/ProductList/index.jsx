import React, { useEffect, useState } from "react";

// API
import categoryApi from "../../Api/categoryApi";
import productApi from "../../Api/productApi";

// Component
import CategoryMenu from "./components/CategoryMenu";
import ProductBox from "../../components/ProductBox";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Paginate.jsx";
import Filter from "./components/Filter.jsx";

export default function ProductList() {
  const { pageNum } = useParams();

  const [categories, setCategories] = useState({});
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [filterKey, setFilterKey] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const handleFilterByName = (e) => {
    setFilterKey(e.target.value);
  };
  const handleFilterByMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };
  const handleFilterByMinPrice = (e) => {
    setMinPrice(e.target.value);
  };
  const handleFilterByCategory = (e) => {
    setCategory(e.target.innerText);
  };
  const params = {
    populate: "*",
    pagination: {
      page: pageNum ? pageNum : 1,
      pageSize: 12,
    },
    filters: {
      productName: {
        $contains: filterKey ? filterKey : null,
      },
      price: {
        $lt: maxPrice ? maxPrice : null,
        $gte: minPrice ? minPrice : null,
      },

      category: {
        categoryName: {
          $eq: category ? category : null,
        },
      },
    },
  };
  const myView1 = loading ? (
    <Loading />
  ) : (
    <CategoryMenu
      categories={categories}
      handleFilterByCategory={handleFilterByCategory}
    />
  );
  const myView2 = loading ? <Loading /> : <ProductBox products={products} />;

  const featchData = async () => {
    // const response1 = await categoryApi.getAll(); // lấy 2 s để chạy xong
    // const response2 = await productApi.getAll(params); // lay 3s để chạy xong
    Promise.all([categoryApi.getAll(), productApi.getAll(params)]).then(
      ([response1, response2]) => {
        // console.log(response1);
        setCategories(response1.data.data);
        setProducts(response2.data.data);
        setTotalPage(response2.data.meta.pagination.pageCount);
        // console.log("re", response2);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    featchData();
  }, [pageNum, filterKey, maxPrice, category, minPrice]);

  return (
    <div className="row">
      <div id="sidebar" className="span3">
        {myView1}
      </div>
      <div className="span9">
        <Filter
          handleFilterByName={handleFilterByName}
          handleFilterByMaxPrice={handleFilterByMaxPrice}
          handleFilterByMinPrice={handleFilterByMinPrice}
        />
        {myView2}
      </div>
      <Pagination
        totalPage={totalPage}
        currentPage={pageNum ? pageNum : 1}
        basePath="http://localhost:3000/products/page/"
      />
    </div>
  );
}
