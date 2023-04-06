import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import NormalSelect from "./common/NormalSelect";
const App: React.FC = () => {
  const [expandOn, setExpandOn] = useState(false);
  return (
    <>
      <div className="  grid  grid-cols-12  relative  bg-slate-200  w-full">
        <div
          className={` flex  justify-between  place-items-start   transition ease-in-out duration-1000 bg-white p-2 ${
            expandOn ? " col-span-3" : " absolute  -left-60"
          }`}
        >
          <div className="flex place-items-center">
            <div className=" w-28">
              <img
                className=" w-full object-cover"
                src="https://assets.materialup.com/uploads/3ec8a09d-a55c-400d-8dad-827836b116de/preview.jpg"
                alt="demo"
              />
            </div>
          </div>
          <div className="top-0 relative">
            {expandOn ? (
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                onClick={() => setExpandOn(false)}
              />
            ) : (
              <Button
                className={`${
                  !expandOn ? "absolute left-32 max-md:hidden" : ""
                }`}
                shape="circle"
                icon={<RightOutlined />}
                onClick={() => setExpandOn(true)}
              />
            )}
          </div>
        </div>
        <div
          className={`${
            expandOn ? "col-span-9" : "col-span-12"
          } w-full min-h-screen`}
        >
          <div className="w-full p-1 flex justify-end">
            {/* <div><NormalSelect label="Hello"/>
</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
