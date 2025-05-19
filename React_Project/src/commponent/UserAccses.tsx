import { useContext, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField,
    Alert
} from "@mui/material";
import UserProfile from "./UserProfile";
import { UserContext } from "./UserReducer";
import axios from "axios";
import { Title } from "@mui/icons-material";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const style = {
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    padding: 2
}

const UserAccses = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState('');
    const [myUser, setMyUser] = useState({
        password: '',
        email: ''
    })

    const [state, dispatch] = useContext(UserContext);
    const handleSubmit = async () => {

        const url = 'http://localhost:3000/api/user/';

        try {
            const res = await axios.post(url + status, myUser)
            console.log('res-login', res);

            if (status === 'login')
                dispatch({
                    type: 'ADD',
                    data: res.data.user
                })
            else if (status === 'register')
                dispatch({
                    type: 'ADD',
                    data: {
                        id: res.data.userId,
                        email: myUser.email,
                        password: myUser.password
                    }
                })
            setIsLogin(true)
            setLoginOpen(false);
        } catch (e: any) {
            console.error(e)
            setMessage(e.response.data.message)
        }
    }

    return (
        <>
            {!isLogin ?
                <Box sx={style} >
                    <Button color="primary" variant="outlined" onClick={() => { setLoginOpen(true); setStatus('login') }}>Login</Button>
                    <Button color="primary" variant="outlined" onClick={() => { setLoginOpen(true); setStatus('register') }}>SignUp</Button>
                </Box > :
                <UserProfile />
            }
            <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
                <Box sx={boxStyle} >
                    <Grid container rowSpacing={1} >
                        
                        {/* <Title sx={{ marginBottom: 2 }} >{status === 'login' ? 'Login' : 'SignUp'}</Title> */}
                        <TextField label='Email' type="email" onChange={(e) => { setMyUser({ ...myUser, email: e.target.value }); setMessage('') }} />
                        <TextField label='Password' type="password" onChange={(e) => { setMyUser({ ...myUser, password: e.target.value }); setMessage('') }} />
                        <Grid size={6}>
                            <Button variant="contained" onClick={handleSubmit}> {status} </Button>
                        </Grid>
                        {message != "" && <Alert severity="warning">{message}</Alert>}
                    </Grid>
                </Box>
            </Modal>

        </>)
}
export default UserAccses