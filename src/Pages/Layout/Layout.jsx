import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar'
import AppRouter from '../../Router/AppRouter';
import { Contentbody, ContentMain,Content } from './styled'


const Layout = () => {
    const [open, setOpen] = useState(true);
    const [view, setView] = useState(false);
    const onOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);
  return (
    <ContentMain>
              <Sidebar setView={setView} show={open}  view={view} handleClose={handleClose}/>
              <Contentbody open={open} view={view} >
              <Navbar onOpen={onOpen}/>
                <Container fluid>

                   <Content>
                   <AppRouter/>
                   </Content>
    
                </Container>
              </Contentbody>
    </ContentMain>
  
  )
}

export default Layout