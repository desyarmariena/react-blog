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
    
    componentDidMount() {
        setTimeout(() => {
            //cara mengubah state
            this.setState( {loading: false} )
        }, 1000)
    }

    render() {
        return (
            // <h1>Loading : { JSON.stringify(this.state.loading) }</h1>
            <SearchBar/>
        )
    }
}

// export agar komponen bisa dipakai di tempat lain
export default App
