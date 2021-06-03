import React, { useState,useEffect, useMemo } from 'react';
import '../../../scss/cart.scss';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const Cart = (props) => {
  // const listCart  = useSelector(store => store.Cart)
  const [data,setData]               = useState(props.Cart);
  const [totalPrice,changeTotalPrice]= useState(0);
  const [soluong,changeSoluong]      = useState(0);
  const [price,changePrice]          = useState(0);
  const [deleteItem1,changeDelete]   = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const deleteItem = (obj) => {
    console.log(obj);
    let data1 = data;
    data1 = data1.filter( ( item ) => {
      return item.id != obj.id
    });
    setData(data1);
    changeDelete(data1);
    console.log(deleteItem1);
  }
  // function handelDathang(){
  //   <Redirect to={{pathname: "/thanhtoan"}}/>
  // }
  // useEffect(
  //   setSubtotal(data.reduce((acc, item) => acc+Number(item.total),0)),[data]
  // )
  function thayDoiSoLuong(value,item){
    if(value === "+"){
      data.map( (item1,index) => {
        if(item1.id == item.id){
          item1.soluong = item1.soluong + 1;
          item1.total   = item1.soluong * item.price;
          changePrice(item1.soluong * item.price)
          changeSoluong(soluong + 1)
        }
      })
    }else if(value === "-" && item.soluong != 0){
      data.map( (item1,index) => {
        if(item1.id == item.id){
          item1.soluong = item1.soluong - 1;
          item1.total   = item1.soluong * item.price;
          changeSoluong(soluong - 1)
        }
      })
    }
    setData(data);
  };
  const data1 = useMemo(() => {
    const datatable = data;
    console.log(datatable);
    return datatable;
  },[soluong,price,changeDelete,deleteItem1])
  return (
    <div className="cart">
      <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th className="cart__table--name">Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {data1 && (
            data1.map((item, index)=> {
              return (
                <>
                  <tr key={index}>
                    <td><img src={item.img}/></td>
                    <td colSpan="2" className="cart__table--name"><span>{item.name}</span></td>
                    <td className="cart__table--price">{item.price}</td>
                    <td>
                      <div className="cart__table__number">
                        <div>
                        <input value={item.soluong}/>
                        <button className="cart__table__number--increment" onClick={()=>thayDoiSoLuong("+",item)}>+</button>
                        <button className="cart__table__number--decrement" onClick={()=>thayDoiSoLuong("-",item)}>-</button>
                        </div>
                        <div className="cart__table--delete">
                        <a onClick={() => deleteItem(item)}><i class="fal fa-trash-alt"></i><span>Xóa</span></a>
                        </div>
                      </div>
                    </td>
                    <td className="cart__table--price">{1000*item.total} VND</td>
                  </tr>
                </>
              )
            })
          )}
        </tbody>
      </table>
      </div>
      <div className="totalCost__container">
        <div className="totalCost">
          <div className="totalCost__text">Tổng:</div>
          <div className="totalCost__number"> 
          {data1 ? 1000*data.reduce((acc, item) => acc+Number(item.total),0)+ ' VND' : 0}
          </div>
        </div>
        <div className="totalCost__button">
            <Link className="ant-btn ant-btn-primary ant-btn-dangerous" to="/dathang">
            <i class="fas fa-shopping-cart"></i>
            &nbsp;Tiến hành đặt hàng</Link>
        </div>
        <div className="payment">
            <div className="paymentItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1599px-Visa_Inc._logo.svg.png" alt="visa">
            </img>
            </div>
            <div className="paymentItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="visa">
            </img>
            </div>
            <div className="paymentItem">
            <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="visa">
            </img>
            </div>
            <div className="paymentItem">
            <img src="https://news.nganluong.vn/wp-content/themes/teacup_press_news/image/logo.png" alt="visa">
            </img>
            </div>
            <div className="paymentItem">
            <img src="https://thuthuatmaytinh.vn/wp-content/uploads/2019/02/ZaloPay-logo.png" alt="visa">
            </img>
            </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    Cart : state.Cart
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {

  }
}
// export default connect(mapStateToProps, null)(Cart)
export default connect(mapStateToProps, null)(Cart)
