import React, {Component} from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import ReviewPagination from "./ReviewPagination";
import axios from "axios"
import "./Review.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Review extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    state = { 
        reviewsList : [],
        loading: false,
        currentPage: 1,
        reviewPerPage: 5
    }

    getReviews = (book_id) => {
        this.setState({loading: true});
        return fetch('http://localhost:3002/getReview' + "/" + book_id)
        .then(response => { return response.json();})
        .then(data => {
            this.setState({reviewsList: data});
            this.setState({loading: false});
            return data;
        })
        .catch(err => {
            return err;
        })
    }

    paginate = (pageNumber) => {
        this.setState({currentPage: pageNumber});
        this.myRef.current.scrollIntoView();
    }

    handleClick = obj => {
        this.setState({reviewsList: obj});
    }

    componentDidMount(){
        this.getReviews(this.props.book_id);
    }

    render() { 
        const indexOfLastReview = this.state.currentPage * this.state.reviewPerPage;
        const indexOfFirstReview = indexOfLastReview - this.state.reviewPerPage;
        const currentPosts =  this.state.reviewsList.slice(indexOfFirstReview, indexOfLastReview);
        
        return ( 
            <div className="review-section pb-5 pt-5" ref={this.myRef}>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-8">
                            <h2 className="border-bottom-green pb-2 mb-4">Reviews</h2>
                            {
                                this.state.loading ? 
                                    <Loader
                                        type="ThreeDots"
                                        color="#198754"
                                        height={60}
                                        width={60}
                                    />
                                :
                                    this.state.reviewsList.length < 1 ?
                                        <h5>No Reviews.</h5> 
                                    :
                                        <ReviewList reviewList={currentPosts}/>
                            }
                            
                            {
                                this.state.reviewsList.length > this.state.reviewPerPage ?
                                <ReviewPagination  
                                    reviewPerPage={this.state.reviewPerPage}
                                    totalReview={this.state.reviewsList.length}
                                    paginate={this.paginate}
                                    currentPage={this.state.currentPage}
                                /> : ''
                            }
                            
                        </div>
                        <div className="col-lg-4">
                            <ReviewForm 
                                reviewsList={this.state.reviewsList} 
                                getReviews={this.getReviews} 
                                handleClick={this.handleClick}
                                book_id={this.props.book_id}
                                calcAvgRating={this.props.calcAvgRating}
                            />
                        </div>
                   </div>
                </div>     
            </div>    
        );
    }
}
 
export default Review;