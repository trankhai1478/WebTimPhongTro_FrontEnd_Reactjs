import React, { memo } from "react";


const Button = ({ text, textColer, bgColor, IcAfter, onClick, fullWidth }) => {

    return (
        <button
            type="button"
            className={`p-2 ${textColer} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-cecnter gap-1 `}
            onClick={onClick}
        >
            <span> {text}</span>
            <span>{IcAfter && <IcAfter />}</span>

        </button>
    )
}
export default memo(Button)