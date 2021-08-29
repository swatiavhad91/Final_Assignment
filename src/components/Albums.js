import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Header from './Header';
import Footer from './Footer';


export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 34,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => 
                   <div className="albums_flex" style={{display:"inline-block", marginLeft:"1%",marginTop:"1%", border:"solid 2px"}}>
                    <img src={pd.thumbnailUrl} alt="photos" height="100px"/>
                    {/* <p>{pd.title}</p> */}
                    </div>
        )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                    
                })
                
            });
            
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                <Header/>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                    <Footer/>
            </div>

        )
    }
}