import React, {useState,useEffect} from 'react';
import '../../../../scss/ProjectItem.scss';
import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import TokenItem from "../../home/tokenItem";
import Button from "@material-ui/core/Button";
import userApi from "../../../../api/userApi";
const TokenList = ({dataItem}) => {
  const [tokenlist, setTokenlist] = useState(null)
  const addToken = async () => {
        const genTokenSiteUrl = 'https://logintoken.up.newca.vn/'
        const response = await fetch(genTokenSiteUrl)
        const jsonData = await response.json()
        jsonData.email = 'mr.tiennv@gmail.com'
        const resToken = await userApi.addToken(jsonData)
    };
  const fetchApi = async () => {
        const params = {
            email: "mr.tiennv@gmail.com"
        }
        const response = await userApi.getToken(params)
        setTokenlist(response)
    }
  useEffect(() => {
      fetchApi()
      console.log(tokenlist)
    });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
      <div className = "listItem">
        <div className="listItem__title">Danh sách token</div>
        <Slider {...settings}>
          {
              tokenlist && tokenlist.map((item, index) => {
              return (
                  <div key={index}>
                    <TokenItem dataItem={item} />
                  </div>
              )
            })
          }
        </Slider>
        <div>
          <Button variant="contained" color="secondary" onClick={addToken}> Thêm CTS</Button>
        </div>
      </div>
  )
}

export default TokenList
