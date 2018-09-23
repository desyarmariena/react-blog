import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class App extends Component {
    // extends React Component agar lifecycle React dapat dijalankan
    constructor(){    
        super() //method super wajib dipakai

        //inisialisasi data/state
        this.state = {
            loading: true
        }
    }
    
    /* componentDidMount() {
        setTimeout(() => {
            //cara mengubah state
            this.setState( {loading: false} )
        }, 1000)
    } */

    // untuk mengambil semua yang diketik di search bar
    handleTypeSearch = event => {
        this.setState( {
            search: event.target.value
        })
        console.log(event.target.value);
    }

    render() {
        return (
            // <h1>Loading : { JSON.stringify(this.state.loading) }</h1>
            <SearchBar 
             search={ this.state.search }
             onChangeSearch={ this.handleTypeSearch } />
        )
    }
}

// export agar komponen bisa dipakai di tempat lain
export default App
