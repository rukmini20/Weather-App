import { useEffect, } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon, CloudCircle as CloudCircleIcon } from "@material-ui/icons";
import styles from "./index.module.scss";
import SearchAutocomplete from '../SearchAutocomplete'
const HeadAppBar = (props: any) => {

  useEffect(()=>{
   
  }, [props.cities])
  return (
      <div className={styles.background}>
        <AppBar position="fixed">
          <Toolbar>
                <IconButton
                  onClick={() => {}}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6"><CloudCircleIcon /> Weather App</Typography>
                <SearchAutocomplete />
               
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default HeadAppBar
