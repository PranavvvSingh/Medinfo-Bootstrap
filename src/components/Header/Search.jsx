import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
import { InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';

export default function Search(){
  const[searchText, setSearchText]= useState("")

    function handleSubmit(event){
      event.preventDefault();
      setSearchText("");
      window.location.href="http://localhost:5173/"+"search/"+searchText;
    }

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur = () => {
      setIsFocused(false);
    };

    
    return(
    <Form onSubmit={handleSubmit}>
        <InputGroup >
            <Form.Control
                type="text"
                placeholder="Search..." 
                className={isFocused ? 'opacity-100' : 'opacity-50'}
                value={searchText}
                spellCheck="true"
                required // to avoid empty values in search parameter
                onChange={(event)=>setSearchText(event.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <InputGroup.Text><SearchIcon/></InputGroup.Text>
        </InputGroup>
    </Form>);
}