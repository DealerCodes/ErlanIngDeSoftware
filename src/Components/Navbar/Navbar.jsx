import React from 'react'
import { Container } from 'react-bootstrap'
import { Content } from './styled'
import { FaAlignLeft } from "react-icons/fa";
const Navbar = ({onOpen}) => {
  return (
    <Content>
        <Container fluid>
        <div className='contentnavbar' onClick={() => onOpen()}>
          <FaAlignLeft size={"25px"} />
        </div>
        </Container>
    </Content>
  )
}

export default Navbar