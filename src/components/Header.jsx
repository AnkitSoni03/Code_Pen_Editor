

import { AppBar , Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)({
    background: 'black',
    height: 65
  });
 
const Header = () => {

   const LOGO="codepen-logo-MY.gif"     

    return (
        <Container position='static'>
            <Toolbar>
            <img src={LOGO} alt="Logo" style={{ width : 80 }} />
            <div><h2> CodePen-Editor</h2></div>
            </Toolbar>
        </Container>
    )
}

export default Header;