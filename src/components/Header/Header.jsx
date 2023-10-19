import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Viral from '@mui/icons-material/LocalFireDepartment';
import BookmarkIcon from '@mui/icons-material/BookmarkAdded';
import Featured from '@mui/icons-material/BarChart';
import { useResolvedPath, useMatch } from 'react-router-dom';

import Search from './Search.jsx'
import Trigger from './Trigger.jsx'

function CustomLink({href, children}){
  const path = useResolvedPath(href);
  const isActive = useMatch({ path: path.pathname })
  
  return(
    <Nav.Link href={href} 
    className={`d-flex align-self-stretch align-items-center ${isActive?'active':''}`}>
      {children}
    </Nav.Link>
  )
}

export default function Header() {  
    return (
      <Navbar expand="lg" className="bg-info-subtle d-flex justify-content-between px-3 py-0" sticky="top">
        <Nav className="d-flex align-self-stretch">
            <CustomLink href='/featured'>
              <Trigger
                tip="Featured Media"
                icon={<Featured />}
                name="Featured" />
            </CustomLink>
            <CustomLink href='/'>
            <Trigger
              tip="Get the most Popular media"
              icon={<Viral />}
              name="Popular" />
            </CustomLink>
            <CustomLink href='/saved'>
              <Trigger
                tip="Find your Saved articles"
                icon={<BookmarkIcon fontSize="small" />}
                name="Saved" />
            </CustomLink>
          </Nav>

        <Navbar.Brand href="/">
          <p className='mb-0 ps-2 pe-2 fs-2 fw-medium text-white bg-info rounded'>
            MedInfo</p>
        </Navbar.Brand>
        
        <Search/>
      </Navbar>
    );
  }