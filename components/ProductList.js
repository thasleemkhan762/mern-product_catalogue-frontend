import { useSelector } from 'react-redux';
import styles from '../styles/ProductList.module.css';

const ProductList = () => {
    const products = useSelector((state) => state.products.items);

    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <div key={product.id} className={styles.productItem}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <img className={styles.productImage} src={product.images[0]} alt={product.title} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
