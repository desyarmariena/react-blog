import React from 'react'

const SearchBar = props => {
    return(
        <div>
            <input 
             type="text"
             placeholder="Search articles here..." 
             /* value={props.search} */
             onChange={props.onChangeSearch} />
        </div>
    )
}

export default SearchBar

// note: komponen dianjurkan functional componen / stateless agar dapat fokus ke UI, bukan logic