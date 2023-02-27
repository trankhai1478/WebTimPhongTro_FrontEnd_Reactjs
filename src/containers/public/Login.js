import React, { useState, useEffect } from 'react';
import { apiRegister } from '../../services/auth';
import { Button } from '../../component';
import InputForm from '../../component/InputForm';
import { useLocation } from 'react-router-dom';
import * as action from '../../store/action';
import { useDispatch } from 'react-redux';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch()

    const [isRegister, setRegeister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: ''
    });
    useEffect(() => {
        setRegeister(location.state?.flag)
    }, [location.state?.flag])

    const handleSubmit = async () => {
        dispatch(action.register(payload))
        console.log(payload);


    }
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister && <InputForm label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'} />}

                <InputForm label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'} />
                <InputForm label={'MẬT KHẨU'} value={payload.password} setValue={setPayload} type={'password'} />

                <Button
                    text={isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
                    bgColor='bg-[#3961fb]'
                    textColer='text-white justify-center'
                    fullWidth
                    onClick={handleSubmit}
                />

            </div>
            <div className='mt-7 flex items-center justify-between'>
                {isRegister ? <small>Bạn đã có tài khoản ?<span
                    onClick={() => setRegeister(false)}
                    className='text-blue-500 hover:underline cursor-pointer'
                >Đăng nhập ngay</span></small> :
                    <>
                        <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn quên mật khẩu</small>
                        <small onClick={() => setRegeister(true)}
                            className='text-[blue] hover:text-[red] cursor-pointer'>Tạo tài khoản
                        </small>
                    </>
                }
            </div>
        </div>
    )
}
export default Login;