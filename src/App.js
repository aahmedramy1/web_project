import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router";


const App = ({ isImage }) => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {

        if (isImage) {
            navigate(`/images/${input}`);
        }
        else {
            navigate(`/web/${input}`);
        }

    };

    return (
        <>
            <NavBar />
            <div className=" flex  justify-center  h-screen  items-center  w-full flex-col gap-6" >
                <div className="flex flex-col  justify-center items-center gap-2">
                    <div><iframe src="https://giphy.com/embed/2kXLNQypdX9O1A3zxX" width="100%" height="100%" title='test' frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
                    <div className=" text-5xl font-bold ">
                        HASO
                    </div>
                    <div className=" text-md   self-end">
                        {isImage ? "Images" : "Web"}
                    </div>
                </div>


                <div className=" flex  w-4/5 justify-center items-center gap-4">
                    <input type={"text"} className=" w-1/2  border border-black border-solid rounded-md  h-12 pl-2 " value={input} onChange={onInputChange} />
                    <div className=" border-2 border-solid border-blue-800 p-1 rounded-md  cursor-pointer bg-blue-800 text-white hover:bg-white hover:text-blue-800 px-3 " onClick={handleSubmit}>
                        Submit
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
