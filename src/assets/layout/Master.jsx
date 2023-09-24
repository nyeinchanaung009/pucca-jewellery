import React, { useEffect } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";

import './Master.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Master = ({children}) => {

  const locae = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return (
    <div>
      <Nav/>
        
          <SwitchTransition>
            <CSSTransition key={locae.pathname} appear={true} classNames="fade"  timeout={100}>

              <main className=' '>
                {children}
              </main>

            </CSSTransition>
          </SwitchTransition>

      <Footer/>
    </div>
  )
}

export default Master