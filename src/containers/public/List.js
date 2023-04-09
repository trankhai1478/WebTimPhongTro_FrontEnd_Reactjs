import React from "react";
import { Button } from "../../component";
import Item from "./Item";
const List = () => {
    return (
        <div className="w-full p-2 bg-white shadow-md rounded-md">
            <div className="flex items-center justify-between my-3">
                <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
                <span>Cập nhật: 05/04/2023</span>
            </div>
            <div className="flex items-center gap-2 my-2">
                <span>Sắp xếp:</span>
                <Button bgColor='bg-gray-200' text='Mặc định' />
                <Button bgColor='bg-gray-200' text='Mới nhất' />

            </div>
            <div className="items">
                <Item />
                {/* <Item />
                <Item /> */}
            </div>
        </div>
    )
}
export default List;