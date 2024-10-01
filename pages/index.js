import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { setProducts, setCurrentPage } from '../redux/productSlice';
import { setCategories } from '../redux/categorySlice';
import styles from '../styles/Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.products.selectedCategory);
    const searchQuery = useSelector((state) => state.products.searchQuery);
    const currentPage = useSelector((state) => state.products.currentPage);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://dummyjson.com/products/categories');
            dispatch(setCategories(response.data));
        };

        fetchCategories();
    }, [dispatch]);

    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get(`https://mern-product-catalogue-backend.onrender.com/api/products?category=${selectedCategory || ''}&page=${currentPage}`);
              if (response.data) {
                  dispatch(setProducts({ products: response.data.products, total: response.data.total }));
              } else {
                  console.error('No data received:', response);
              }
          } catch (error) {
              console.error('Error fetching products:', error); // Log the error
          }
      };

      fetchProducts();
  }, [dispatch, selectedCategory, currentPage]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product Display</h1>
            <SearchBar />
            <CategorySelector categories={useSelector((state) => state.categories.items)} />
            <ProductList />
        </div>
    );
};

export default Home;
