import React, { memo } from "react";
import icons from '../../ultils/icons';
const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
]
const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons
const Item = () => {
    return (
        <div className="w-full flex border-t border-orange-600 py-4">
            <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
                <img src={images[0]} alt="preview" className="w-[110px] h-[120px] object-cover" />
                <img src={images[1]} alt="preview" className="w-[110px] h-[120px] object-cover" />
                <img src={images[2]} alt="preview" className="w-[110px] h-[120px] object-cover" />
                <img src={images[3]} alt="preview" className="w-[110px] h-[120px] object-cover" />


            </div>

            <div className="w-3/5">
                <div className="flex justify-between gap-4">
                    <div className="flex items-start ">
                        {/* <span className="flex py-[2px]"> */}
                        <GrStar size={20} color="yellow" />
                        <GrStar size={20} color="yellow" />
                        <GrStar size={20} color="yellow" />
                        <GrStar size={20} color="yellow" />
                        <GrStar size={20} color="yellow" />
                        {/* </span> */}
                        <h3 className="text-red-600 font-medium ml-1">Hahaha</h3>

                    </div>

                    <div className="w-[10%] flex justify-end">
                        <BsBookmarkStarFill size={24} color="orange" />
                    </div>
                </div>
                <div className="my-2 flex items-center justify-between">
                    <span className="font-bold text-green-600">3 triệu/tháng</span>
                    <span>28m</span>
                    <span>Quận Bình Thạnh,HCM</span>
                </div>
                <p className="text-gray-500">Giảm 500k cho tháng tiền phòng đầu tiên đối với các khách hàng ký hợp đồng trong tháng 4 /2023️️️Cách CV Hoàng Văn Thụ 150mCách ĐH Tài Chính…</p>
                <div className="flex items-center my-5 justify-between">
                    <div className="flex items-center">
                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                            alt="avatar"
                            className="w-[30px] h-[30[px] object-cover rounded-full"
                        />
                        <p>Khải Trần</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button type="button" className="bg-white p-1 rounded-md">
                            Gọi 0968618841
                        </button>
                        <button type="button" className="text-blue-700 p-1 rounded-md border border-blue-700">
                            Nhắn Zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Item);