import React, { useCallback } from 'react';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../component';
import icons from '../../ultils/icons';
import { useNavigate, Link } from 'react-router-dom';
import { path } from '../../ultils/constant';
const { AiOutlinePlusCircle } = icons;
const Header = () => {
    const navigate = useNavigate();
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, []);
    return (
        <div className='w-1100'>
            <div className='w-full flex items-center justify-between'>
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-[240px] h-[70px] object-contain'
                    />
                </Link>

                <div className='flex items-center gap-1'>
                    <small>Tìm Phòng Trọ xin chào</small>
                    <Button text={'Đăng Nhập'} textColer='text-white' bgColor='bg-[#3961fb]' onClick={() => goLogin(false)} />
                    <Button text={'Đăng Ký'} textColer='text-white' bgColor='bg-[#3961fb]' onClick={() => goLogin(true)} />
                    <Button text={'Đăng Tin Mới'} textColer='text-white' bgColor='bg-[#f73859]' IcAfter={AiOutlinePlusCircle} />
                </div>

            </div>
        </div>
    )
}
export default Header;