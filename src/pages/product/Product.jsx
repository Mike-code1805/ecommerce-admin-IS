import { Link, useLocation } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../mockData';
import { Publish } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  console.log({ inputs });
  console.log({ file });
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={product.img} alt='' className='productInfoImg' />
            <span className='productName'>{product.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{product._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input
              name='title'
              type='text'
              placeholder={product.title}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input
              name='desc'
              type='text'
              placeholder={product.desc}
              onChange={handleChange}
            />
            <label>Price</label>
            <input
              name='price'
              type='text'
              placeholder={product.price}
              onChange={handleChange}
            />
            <label>In Stock</label>
            <select name='inStock' onChange={handleChange} id='idStock'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <input
                type='file'
                id='file'
                onChange={(e) => setFile(e.target.files[0])}
              />
              <img src={product.img} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
