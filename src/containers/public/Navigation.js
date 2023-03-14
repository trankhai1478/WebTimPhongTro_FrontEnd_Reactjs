import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString } from "../../ultils/constant";


const notActive = 'hover:bg-secondary2 h-full flex items-center px-4 bg-[#1266dd]'
const Active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2'
const Navigation = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategogies = async () => {
            const response = await apiGetCategories();
            if (response.data.err === 0) {
                setCategories(response.data.response)
            }
        }
        fetchCategogies();
    }, [])
    return (
        <div className="w-screen flex justify-center items-center h-[40px] bg-[#1266dd] text-white">
            <div className="w-3/5 flex h-full items-center  text-sm font-medium">
                <NavLink to={`/`}
                    className={({ isActive }) => isActive ? Active : notActive}>Trang chủ</NavLink>
                {categories?.length > 0 && categories.map((item) => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center'>
                            <NavLink to={`${formatVietnameseToString(item.value)}`}
                                className={({ isActive }) => isActive ? Active : notActive}>{item.value}</NavLink>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default Navigation;