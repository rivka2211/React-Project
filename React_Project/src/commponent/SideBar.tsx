import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from './UserReducer';

export default function SideBar() {
    const [state, setState] = React.useState({
        right: false,
    });
    const [user]=React.useContext(UserContext);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, right: open });
            };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem key="Home" disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="About" disablePadding>
                    <ListItemButton component={Link} to="/about">
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key="Recipes" disablePadding>
                    <ListItemButton component={Link} to="/recipes">
                        <ListItemIcon>
                            < MenuBookIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Recipes" />
                    </ListItemButton>
                </ListItem>
               {user.id!=0&&(
                <ListItem key="Add Recipe" disablePadding>
                    <ListItemButton component={Link} to="/addrecipe">
                        <ListItemIcon>
                            <RestaurantIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Recipe" />
                    </ListItemButton>
                </ListItem>)}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}