import React from 'react';



const SearchBox = ({searchChange}) => {


    return(

        <div className="pa2">
            <input type="search" placeholder="search Robots" onChange={searchChange}/>

        </div>
    );

}




export default SearchBox; 