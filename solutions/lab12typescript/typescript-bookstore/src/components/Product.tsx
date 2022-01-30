import styles from './Product.module.css';
import PropTypes from 'prop-types';

interface Props {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  inCart: string;
}

const Product: React.FC<Props> = (props) => {
  const { title, author, published, country, lang, pages, image, url, price } =
    props;

  function handleClick() {
    if (props.inCart) {
      props.removeFromCart(props.id);
    } else {
      props.addToCart(props.id);
    }
  }

  return (
    <div className={styles.product}>
      <div>
        <img
          className={styles.thumbnail}
          src={image ? 'images/' + image : 'images/default.jpg'}
          alt="{title}"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price: ${price}
          <br />
        </p>
        <button onClick={handleClick}>
          {props.inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

Product.defaultProps = {
  title: '',
  price: '',
};

export default Product;