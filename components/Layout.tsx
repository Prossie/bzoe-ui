import React,{ FunctionComponent } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Header from "components/Header";
import AppContainer from "./AppContainer";
import Footer from './Footer.js'
import { Box,ResponsiveContext } from "grommet";

import ShareThis from 'components/shareThis'
import throttle from 'lodash.throttle';
import GetInTouchWidget from 'components/getInTouchWidget'
import Link from 'next/link'
import { initGA, logPageView } from 'analytics'
import Chatbot from 'components/chatbot'

const useStyles=makeStyles({
    layout:{
        height:'100%',
      backgroundColor:'transparent',
    
    }
})



const Layout:FunctionComponent=({children,
    showShareThis,
  })=>{

    const size=React.useContext(ResponsiveContext )

const classes=useStyles()

const [showMobileMenu,setShowMobileMenu]=React.useState(false)
    const [scrollStyle, setScrollStyle] = React.useState({ padding: '0px 0px' });

  
    const toggleShowMobileMenu=React.useCallback(()=>{
setShowMobileMenu(!showMobileMenu)
    },[showMobileMenu])

  React.useEffect(() => {
    // every time you scroll
    window.addEventListener(
      'scroll',
      throttle(() => {
        // after 300 ms
        const scrollPosition = Math.round(window.scrollY); // get scrollposition

        // If we've scrolled 100px, add "padding" class to the header
        if (scrollPosition > 100) {
          setScrollStyle({ padding: '10px 20px' });
        } else {
          // If not, remove "remove" class from header
          setScrollStyle({ padding: '0px 0px' });
        }
      }, 300)
    );
  }, []);

  const logout = () => {
   
    window.location.replace('/');
  };

  React.useEffect(
    ()=>{

      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    

    },[]
  )

 
  

    return (
        <AppContainer className={classes.layout}>
      <Box>
      {showShareThis&& <ShareThis/> } 
      <Header hideMenu={false} {...{showMobileMenu,toggleShowMobileMenu}}/>
       
      {children}
      </Box>
      <Chatbot/>
       <Footer id="footer" />
        </AppContainer>
    )
}

export default Layout;