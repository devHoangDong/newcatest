import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd'
import '../../../../scss/EditAccount.scss';
import userApi from '../../../../api/userApi'
import Button from '@material-ui/core/Button';
import MyTitle from './Title';
import { setLoading as setLoadingAction } from '../../../../redux/loadingSlice';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const EditAccount = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  const fetchApi = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await userApi.getUsers(params)
    setUser(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const setGender = value => {
    setUser({
      ...user,
      gender: value
    })
  }

  const setProvinces = value => {
    setUser({
      ...user,
      province: value
    })
  }

  const setDistrict = value => {
    setUser({
      ...user,
      district: value
    })
  }

  const setWard = value => {
    setUser({
      ...user,
      ward: value
    })
  }

  const onchangeUser = event => {
    setUser({
      ...user,
      [event.target.id]: event.target.value
    })
  }

  const updateUser = async () => {
    dispatch(setLoadingAction(true))
    setTimeout(() => {
      dispatch(setLoadingAction(false))
    }, 3000);
    const params = {
      email: user.email,
      name: user.name,
      gender: user.gender,
      birthday: user.birthday,
      province: user.province,
      district: user.district,
      ward: user.ward,
      address: user.address
    }
    console.log(params);
    await userApi.editUser(params)
  }
  const deleteAvatar = () => {
    dispatch(setLoadingAction(true))
    setTimeout(() => {
      dispatch(setLoadingAction(false))
    }, 3000);
  }

  return (
    <div className="editAccount">
      {user && (
        <Row className="editAccount__row" justify="space-around" center="xs" type='flex' gutter={{ xs: 0, sm: '.5rem', md: '1rem', lg: '2rem' }}>
          <Col xl={15} lg={15} md={22} xs={22} sm={22} className="editAccount__left">
            <div className="editAccount__title">
              <MyTitle title="S???a th??ng tin t??i kho???n" />
            </div>
            <Form
              form={form}
              initialValues={{
                remember: true
              }}
            >
              <Form.Item>
                <label>Email: {user.email}</label>
              </Form.Item>

              <label>H??? t??n:</label>
              <Form.Item
                name="name"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your username!' },
                  // ({ getFieldValue }) => ({
                  //   validator(rule, value = "") {
                  //     const re = /^[a-zA-Z]+$/;
                  //     if (value.length > 0 && !re.test(value)) {
                  //       return Promise.reject("Nh???p l???i h??? t??n");
                  //     } else {
                  //       return Promise.resolve();
                  //     }
                  //   }
                  // })
                ]}
              >
                <Input defaultValue={user.name} />
              </Form.Item>

              <label>Gi???i t??nh</label>
              <Form.Item
                name="gender"
              >
                <Select
                  placeholder="Select gender"
                  onChange={setGender}
                  defaultValue={user.gender}
                >
                  <Option value="1">Nam</Option>
                  <Option value="0">N???</Option>
                </Select>
              </Form.Item>

              <label>Sinh nh???t</label>
              <Form.Item
                name="birthday"
                onChange={onchangeUser}
              >
                <Input type="date" defaultValue={user.birthday} />
              </Form.Item>

              <label>S??? ??i???n tho???i:</label>
              <Form.Item
                name="phone"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your phone!' },
                ({ getFieldValue }) => ({
                  validator(rule, value = "") {
                    const re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                    if (value.length > 0 && !re.test(value)) {
                      return Promise.reject("s??? ??i???n tho???i ch??a ????ng ?????nh d???ng");
                    } else {
                      return Promise.resolve();
                    }
                  }
                })
                ]}
              >
                <Input defaultValue={user.phone} />
              </Form.Item>

              <label>T???nh / th??nh ph???</label>
              <Form.Item
                name="province"
              >
                <Select
                  placeholder="ch???n t???nh / th??nh ph???"
                  onChange={setProvinces}
                  defaultValue={user.province}
                >
                  <Option value="da nang">???? n???ng</Option>
                  <Option value="hai phong">h???i Ph??ng</Option>
                  <Option value="hai duong">h???i D????ng</Option>
                  <Option value="quang ning">Qu???ng Ninh</Option>
                  <Option value="ca mau">C?? mau</Option>
                  <Option value="Ha Noi">H?? N???i</Option>
                  <Option value="7">c???n th??</Option>
                </Select>
              </Form.Item>

              <label>Qu???n / Huy???n</label>
              <Form.Item
                name="district"
              >
                <Select
                  placeholder="ch???n qu???n / huy???n"
                  onChange={setDistrict}
                  defaultValue={user.district}
                >
                  <Option value="1">ha n???i</Option>
                  <Option value="2">???? n???ng</Option>
                  <Option value="3">h???i Ph??ng</Option>
                  <Option value="Ba Dinh">Ba ????nh</Option>
                  <Option value="5">Qu???ng Ninh</Option>
                  <Option value="6">C?? mau</Option>
                  <Option value="7">c???n th??</Option>
                </Select>
              </Form.Item>

              <label>Ph?????ng / X??</label>
              <Form.Item
                name="ward"
              >
                <Select
                  placeholder="ch???n ph?????ng / x??"
                  onChange={setWard}
                  defaultValue={user.ward}
                >
                  <Option value="Thanh Cong">Th??nh C??ng</Option>
                  <Option value="2">???? n???ng</Option>
                  <Option value="3">h???i Ph??ng</Option>
                  <Option value="4">h???i D????ng</Option>
                  <Option value="5">Qu???ng Ninh</Option>
                  <Option value="6">C?? mau</Option>
                  <Option value="7">c???n th??</Option>
                </Select>
              </Form.Item>

              <label>?????a ch???:</label>
              <Form.Item
                name="address"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input defaultValue={user.address} />
              </Form.Item>
              <Form.Item className="editAccount__left__groupButton">
                <Button className="btnSubmit" variant="contained" color="primary" onClick={updateUser}>
                  C???p nh???t
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xl={7} lg={6} md={22} xs={22} sm={22} className="editAccount__right">
            <div className="editAccount__right--avatar">

              <img src={user.profile_photo_path} alt="avatar" />
            </div>
            <div className="editAccount__right--btn">
              <Button variant="contained" color="secondary" onClick={deleteAvatar}> xo?? ???nh ?????i di???n </Button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default EditAccount;
