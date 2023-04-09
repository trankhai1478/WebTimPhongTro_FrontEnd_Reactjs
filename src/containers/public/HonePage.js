import React from "react";

import { text } from "../../ultils/constant";
import { Province } from "../../component";

import List from "./List";
const HomePage = () => {
    return (
        <div className="border border-red-500 w-full flex flex-col gap-3">

            <div>
                <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
                <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            <div className="w-full flex gap-4">
                <div className="w-[70%]">
                    <List />
                </div>

                <div className="w-[30%] border border-green-500">
                    SideBar
                </div>
            </div>

        </div>
    )
}
export default HomePage;