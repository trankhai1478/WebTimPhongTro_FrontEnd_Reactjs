import React, { useCallback } from 'react';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../component';
import icons from '../../ultils/icons';
import { useNavigate, Link } from 'react-router-dom';
import { path } from '../../ultils/constant';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
const { AiOutlinePlusCircle } = icons;
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, []);
    return (
        <div className='w-3/5'>
            <div className='w-full flex items-center justify-between'>
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-[240px] h-[70px] object-contain'
                    />
                </Link>

                <div className='flex items-center gap-1'>
                    {!isLoggedIn &&
                        <div className='flex items-center gap-1'>
                            <small>Tìm Phòng Trọ xin chào</small>
                            <Button text={'Đăng Nhập'} textColer='text-white' bgColor='bg-[#3961fb]' onClick={() => goLogin(false)} />
                            <Button text={'Đăng Ký'} textColer='text-white' bgColor='bg-[#3961fb]' onClick={() => goLogin(true)} />
                        </div>
                    }
                    {isLoggedIn &&
                        <div className='flex items-center gap-1'>
                            <small>Tên !</small>
                            <Button text={'Đăng Xuất'} textColer='text-white' bgColor='bg-[#3961fb]'
                                onClick={() => dispatch(actions.logout())}

                            />

                        </div>
                    }
                    <Button text={'Đăng Tin Mới'} textColer='text-white' bgColor='bg-red-700' IcAfter={AiOutlinePlusCircle} />
                </div>

            </div>
        </div>
    )
}
export default Header;