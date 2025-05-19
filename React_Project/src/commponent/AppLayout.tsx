import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "./SideBar";

const AppLayout = () => {

    const style = {
        border: "2px solide blue",
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '15px'
    }
    const styleOut = {
        // top: "10%",
        right: 0, border: "4px solide red",
        //  backgroundColor: "blueviolet" ,
        width:"100%"
    }
    return (<>
      
        <Box sx={style}>
            <SideBar/>
        </Box>

        <Box  sx={styleOut}>
            <Outlet />
        </Box>
    </>)

}

export default AppLayout