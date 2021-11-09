import React from "react";

export const Progress = (props: any) => {
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span
                        className="
          text-xs
          font-semibold
          inline-block
          py-1
          px-2
          uppercase
          rounded-full
          bg-purple-200
        "
                        style={{ color: '#00A78E' }}
                    >
                        {props.myTilte}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600"
                        style={{ color: '#00A78E' }}
                    >
                        {props.myPercent}
                    </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                <div
                    style={{ background: "#00A78E", width: props.myPercent }}
                    className="
        shadow-none
        flex flex-col
        text-center
        whitespace-nowrap
        text-white
        justify-center
      "
                ></div>
            </div>
        </div>
    )
}