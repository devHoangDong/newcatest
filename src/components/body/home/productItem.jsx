import React from 'react';
import { Card } from 'antd';
import '../../../scss/ProjectItem.scss';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../redux/counterSlice'



const ProductItem = ({ dataItem }) => {
  console.log(dataItem);
  const dispatch = useDispatch()

  const addproduct = () => {
    dispatch(addCart(dataItem))
  }
  return (
    <div className="productItem">
      <Card
        hoverable
        cover={<img alt="example" src='https://chukysonewca.info/wp-content/uploads/2020/09/newcas.png'
        />}
        style={{ backgroundColor: '#FEF9F7', padding: 0 }}
      >
        <div className="productItem__footer">
          <div className="productItem__footer--title">
            <label>{dataItem.name}</label>
          </div>
          <div className="productItem__footer--price">
            <label>{dataItem.price} VND</label>
          </div>
          <div className="productItem__footer--addCart">
            <div onClick={addproduct}>THÊM VÀO GIỎ HÀNG</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductItem
