import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderSharp';
import React, {useState} from 'react'

export default function Article({name,description,tags,source,sourceUrl}) {
  const [shadow,toggleShadow]=useState(false)
  const shadowStyle = shadow === true ? "w-75 shadow bg-body-tertiary rounded" :"w-75 shadow-none";

  const handleHeadingClick = () => {
    window.location.href = sourceUrl;
  };

  return (
      <Card className={`w-75 mx-auto m-3 ${shadow?"shadow bg-body-tertiary rounded":""}`} 
      onMouseEnter={()=>toggleShadow(true)} 
      onMouseLeave={()=>toggleShadow(false)}>
        <Card.Body className="px-2 py-2">

          <div className="d-flex justify-content-between">
            <h5 onClick={handleHeadingClick} style={{cursor:'pointer'}}>
            {name}
            </h5>
            <BookmarkIcon fontSize="medium" className="m-1"/>
          </div>
          
          Source: <i>{source.name}({source.acronym})</i>

          <Card.Text className="text-muted mb-2">{description}</Card.Text>

          {tags.length > 0 && <Stack direction="horizontal" gap={3} className="overflow-x-auto">
            {tags.map((tag)=>(
              <Button key={crypto.randomUUID()} variant="info" 
              size="sm" className="text-nowrap" 
              style={{cursor:'default'}}>
              {tag.name}</Button>
            ))}
          </Stack>}
        </Card.Body>
        </Card>
  );
}
