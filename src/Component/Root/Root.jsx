import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className=" bg-white">
            <Header></Header>
            <Outlet className=""></Outlet>
        </div>
    );
};

export default Root;