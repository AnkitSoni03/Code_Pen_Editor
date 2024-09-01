import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

import Editor from "./Editor";

import { Box, styled } from '@mui/material';

const Container = styled(Box)({
    display: 'flex',
    backgroundColor: '#060606',
    height: '57vh'
});


const Code = () => {

   const {html, setHtml, css, setCss, js, setJs}= useContext(DataContext);
    return (
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#ff3C41"
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onChange={setCss}
            />
            <Editor
                heading="JavaScript"
                icon="{}"
                color="#FCD000"
                value={js}
                onChange={setJs}
            />
        </Container>
    );
}

export default Code;
