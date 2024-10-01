import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../redux/productSlice';
import styles from '../styles/CategorySelector.module.css';

const CategorySelector = ({ categories }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.products.selectedCategory);

    return (
        <select className={styles.categorySelect} onChange={(e) => dispatch(setSelectedCategory(e.target.value))} value={selectedCategory}>
            <option value="">All Categories</option>
            {categories.map((category) => (
                <option key={category.slug} value={category.name}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategorySelector;
