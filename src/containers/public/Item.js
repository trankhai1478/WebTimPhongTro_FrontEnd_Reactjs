import React, { memo, useState } from "react";
import icons from '../../ultils/icons';

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons
const indexs = [0, 1, 2, 3]
const Item = ({ images, user, title, star, description, attributes, address }) => {
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    console.log(isHoverHeart)
    return (
        <div className="w-full flex border-t border-orange-600 py-4">
            <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
                {images.length > 0 && images.filter((i, index) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className="w-[110px] h-[120px] object-cover" />
                    )
                })}

                <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4">{`${images.length} ảnh`}</span>
                <span
                    className="text-white absolute right-5 bottom-1"
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}>
                    {isHoverHeart ? <RiHeartFill size={24} color="red" /> : <RiHeartLine size={24} />}

                </span>

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
                        {title}
                        {/* </span> */}
                        {/* <h3 className="text-red-600 font-medium ml-1">Hahaha</h3> */}

                    </div>

                    <div className="w-[10%] flex justify-end">
                        <BsBookmarkStarFill size={24} color="orange" />
                    </div>
                </div>
                <div className="my-2 flex items-center justify-between">
                    <span className="font-bold text-green-600">{attributes?.price}</span>
                    <span>{attributes?.acreage}</span>
                    <span>{address}</span>
                </div>
                <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
                    {description}
                </p>
                <div className="flex items-center my-5 justify-between">
                    <div className="flex items-center">
                        <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                            alt="avatar"
                            className="w-[30px] h-[30[px] object-cover rounded-full"
                        />
                        <p>{user.name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <button type="button" className="bg-white p-1 rounded-md">
                            {`Gọi ${user.phone}`}
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