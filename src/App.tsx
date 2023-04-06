import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

const App: React.FC = () => {
  const [expandOn, setExpandOn] = useState(false);
  return (
    <>
      <div className=" grid grid-cols-12 relative">
        <div
          className={`flex justify-between place-items-center ${
            expandOn ? "col-span-3" : "absolute -left-56"
          }`}
        >
          <div>Logo and title</div>
          <div className="relative">
            {expandOn ? (
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                onClick={() => setExpandOn(false)}
              />
            ) : (
              <Button
                className={`${!expandOn ? " absolute left-32" : ""}`}
                shape="circle"
                icon={<RightOutlined />}
                onClick={() => setExpandOn(true)}
              />
            )}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default App;
