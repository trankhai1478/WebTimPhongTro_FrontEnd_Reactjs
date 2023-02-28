import React, { useState, useEffect } from 'react';
import { Button } from '../../component';
import InputForm from '../../component/InputForm';
import { useLocation, useNavigate } from 'react-router-dom';
import * as action from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const [invalidFields, setInvalidFields] = useState([]);
    const [isRegister, setRegeister] = useState(location.state?.flag);
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        phone: '',
        password: '',
        name: ''
    });
    const { isLoggedIn } = useSelector(state => state.auth);
    useEffect(() => {
        setRegeister(location.state?.flag)
    }, [location.state?.flag])

    useEffect(() => {
        isLoggedIn && navigate('/home')
    })

    const handleSubmit = async () => {

        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        let invalids = validate(finalPayload)
        if (invalids === 0) {
            isRegister ? dispatch(action.register(payload)) : dispatch(action.login(payload))

        }



        console.log(invalids);

    }
    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break

                default:
                    break;
            }
        })
        return invalids
    }
    return (
        <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister && <InputForm setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields} label={'HỌ TÊN'} value={payload.name} setValue={setPayload} type={'name'} />}

                <InputForm setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields} label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'} />
                <InputForm setInvalidFields={setInvalidFields}
                    invalidFields={invalidFields} label={'MẬT KHẨU'} value={payload.password} setValue={setPayload} type={'password'} />

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
                    onClick={() => {
                        setRegeister(false);
                        setPayload({
                            phone: '',
                            password: '',
                            name: ''
                        })
                    }}
                    className='text-blue-500 hover:underline cursor-pointer'
                >Đăng nhập ngay</span></small> :
                    <>
                        <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn quên mật khẩu</small>
                        <small onClick={() => {
                            setRegeister(true);
                            setPayload({
                                phone: '',
                                password: '',
                                name: ''
                            })
                        }}
                            className='text-[blue] hover:text-[red] cursor-pointer'>Tạo tài khoản
                        </small>
                    </>
                }
            </div>
        </div>
    )
}
export default Login;