import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';
import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search products..."
          value={setSearchQuery}
          onChange={handleSearch}
        />
      </div>
    );
};

export default SearchBar;
