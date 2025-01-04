import { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { xml } from '@codemirror/lang-xml';
import '../App.css';

const Container = styled(Box)({
    flexGrow: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 8px 8px',
    '@media (max-width: 768px)': {
        flexBasis: 'auto',
        minHeight: '33vh',
        marginBottom: '16px'
    }
});

const Heading = styled(Box)({
    background: '#1d1e22',
    display: 'flex',
    padding: '9px 12px',
    '@media (max-width: 768px)': {
        padding: '7px 10px'
    }
});

const Header = styled(Box)({
    display: 'flex', 
    background: '#060606',
    color: '#fff',
    justifyContent: 'space-between',
    fontWeight: 700,
    '@media (max-width: 768px)': {
        fontSize: '0.9rem'
    }
});

const Editor = ({ heading, icon, color, value, onChange }) => {
    const [open, setOpen] = useState(true);

    const handleChange = (value) => {
        onChange(value);
    };

    const getExtensions = () => {
        switch (heading.toLowerCase()) {
            case 'html':
                return [xml()];
            case 'css':
                return [css()];
            case 'javascript':
                return [javascript({ jsx: true })];
            default:
                return [];
        }
    };

    return (
        <Container style={open ? null : { 
            flexGrow: 0,
            '@media (max-width: 768px)': {
                minHeight: '40px'
            }
        }}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={{ alignSelf: 'center' }}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            {open && (
                <CodeMirror
                    value={value}
                    height="100%"
                    theme="dark"
                    extensions={getExtensions()}
                    onChange={handleChange}
                    style={{ flex: 1 }}
                    basicSetup={{
                        lineNumbers: true,
                        highlightActiveLine: true,
                        highlightSelectionMatches: true,
                    }}
                />
            )}
        </Container>
    );
};

export default Editor;