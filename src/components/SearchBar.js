import React from 'react'

const SearchBar = props => {
    return(
        <div style={styles.contentSearch}>
            <input 
                style={styles.inputSearch}
                type="text"
                placeholder="Search articles here..." 
                /* value={props.search} */
                onChange={props.onChangeSearch} />
        </div>
    )
}

// css inline 
const styles = {
    inputSearch: {
        width: 500,
        height: 20,
    },
    contentSearch: {
        backgroundColor: "red",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar

// note: komponen dianjurkan functional componen / stateless agar dapat fokus ke UI, bukan logic