import { useEffect } from "react";
import CountryCard from "../components/CountryCard";
import { useState } from "react";
import Header from "../components/Header";

 const Countries = () => {
    const API_URL = "https://restcountries.com/v3.1/all";
    const [countries , setCountries] = useState([]) ;
    const [filteredCountries, setFilteredCountries] = useState([]);

//     // console.log(countries);
//     useEffect(() => {
//         fetch(API_URL)
//         .then((res) => res.json())
//         .then((data) => setCountries(data))
//         .catch((error) => console.error("Error fetching data:" + error))
//     } , []) 
useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchCountries();
}, []);
    
const handleSearch = (query) => {
    const searchQuery = query.toLowerCase();
    const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery)
    );
    setFilteredCountries(filtered);
};

    return (
        <>
        <Header onSearch={handleSearch}/>
        <div
        style={
            {   marginLeft:"100px",
                margin: "50px",
                display: "flex",
                flexWrap : "wrap",
                gap: "10px"  ,              
            }
        }>
            {/* <h1> Countries </h1>  */}
            {filteredCountries.map((country) => (
                <CountryCard name = {country.name.common} 
                flagURL = {country.flags?.png || country.flags?.svg} 
                key = {country.cca3} />
            ))}
        </div>
        </>
    );
};

export default Countries;