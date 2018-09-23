import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'

const link =
"https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {
    // extends React Component agar lifecycle React dapat dijalankan
    constructor(){    
        super() //method super wajib dipakai

        //inisialisasi data/state
        this.state = {
            loading: true,            
            search: "",
            blogs: []
        }
    }
    
    /* componentDidMount() {
        setTimeout(() => {
            //cara mengubah state
            this.setState( {loading: false} )
        }, 1000)
    } */

    componentDidMount() {
        this.handleGetBlogs()
    }

    // method untuk mengambil semua yang diketik di search bar
    handleTypeSearch = event => {
        this.setState( {
            search: event.target.value
        })
        /* console.log(this.state.search); */
    }

    // method untuk ambil data blog dari json
    handleGetBlogs = () => {
        fetch(link)
          .then( res => res.json() )
          .then( res => this.setState({ blogs: res }))
    }

    render() {

        console.log( this.state.blogs )

        return (
            <div>
                {/* <h1>Loading : { JSON.stringify(this.state.loading) }</h1> */}
                <SearchBar 
                search={ this.state.search }
                onChangeSearch={ this.handleTypeSearch }
                />
                { this.state.blogs.map((blog, index) => (
                    <BlogList 
                    title="Title 1"
                    content="Content 1"
                    />
                ))}
            </div>
        )
    }
}

// export agar komponen bisa dipakai di tempat lain
export default App
