import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import ListItemText from '@mui/material/ListItemText';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: "center", backgroundColor: "transparent" }}>
      <CssBaseline />
      <AppBar position="sticky" open={open} style={{ backgroundColor: "rgba(54, 5, 58, 0.815)" }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <Link to="/" style={{ color: "white" }} >Infofornation </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />



        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <Link to="/" ><ListItemText primary="Home" /></Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LiveTvTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <Link to="/news" ><ListItemText primary="News" /></Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CoronavirusTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <Link to="/covid/Home" ><ListItemText primary="Covid" /></Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AirplanemodeActiveTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <Link to="/spacex" ><ListItemText primary="spacex" /></Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WbSunnyTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <Link to="/weather" ><ListItemText primary="weather" /></Link>
          </ListItem>
        </List>




        <Divider />

      </Drawer>
    </Box>
  );
}
