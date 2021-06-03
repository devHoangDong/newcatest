import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import '../../../scss/EditPassword.scss';
import MyTitle from '../account/content/Title';
import { setLoading as setLoadingAction } from '../../../redux/action/userAction';
import { useDispatch } from 'react-redux';
import userApi from "../../../api/userApi";
const HelpDesk = () => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        updateUser(values)
        console.log('Success:', values);
    };
    const hepldesk_url = 'https://cskh.newca.vn/api/json/addRequest'
    const updateUser = async (params) => {

        params['apikey'] = '0FD1120C-BDD0-4EF0-B980-956D1DE8C58A'
        params['email'] = 'mr.tiennv@gmail.com'
        params['group'] = '9.WebNewCA'
        dispatch(setLoadingAction(true))
        setTimeout(() => {
            dispatch(setLoadingAction(false))
        }, 3000);
        const response = await userApi.callOtherApi(hepldesk_url,params)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    return (
        <div className="editPassword">
            <div className="editPassword__container">
                <div className="editPassword__title">
                    <MyTitle title="Gửi yêu cầu hỗ trợ" />
                </div>
                <div className="editForm">
                    <Form  {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label={"Tiêu đề"}
                            name="subject"
                            rules={[{ required: true, message: 'Tiêu đề không được để trống!' }]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            label={"Nội dung cần hỗ trợ"}
                            name="description"
                            rules={[{ required: true, message: 'Nội dung không được để trống!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default HelpDesk;
