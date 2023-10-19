import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Article from './Article.jsx'
import axios from 'axios'
import NoResults from './NoResults.jsx';
import SearchIcon from '@mui/icons-material/Search';
import Spinner from 'react-bootstrap/Spinner';

export default function SearchResults() {
    const { searchText } = useParams();
    const [loading,setLoading] = useState(true);
    const [results, setResults] = useState([]);

    const fullUrl = "http://localhost:8081/search"+"/"+searchText;

    useEffect(() => {
        axios.get(fullUrl)
            .then((response) => {
                setResults(response.data.results);
            })
            .catch((error) => (console.log("Error fetching data!")))
            .finally(()=>setLoading(false))
    }, []);

    if(loading){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Spinner animation="border" variant="info"/>
                <span className="m-2 fs-4 text-muted">Loading...</span>
            </div>
        )
    }
    else{
        if (results.length !== 0) {
            return (
                <>
                    <p style={{ width: '70%' }} className='mx-auto d-block mt-3 fs-5'>
                        <SearchIcon />Search results for "<span className='text-capitalize'>{searchText}</span>"
                    </p>
                    {results.map((res) => (
                        <Article key={res.id} name={res.name} description={res.description}
                            tags={res.tags} source={res.source} sourceUrl={res.sourceUrl}
                        />
                    ))}
                </>
            )
        }
        else {
            return (<NoResults searchText={searchText} />)
        }
    }
}