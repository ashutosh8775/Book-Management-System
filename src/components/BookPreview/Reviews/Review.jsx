import React, {Component} from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import ReviewPagination from "./ReviewPagination";
import axios from "axios"
import "./Review.css";


class Review extends Component {
    state = { 
        reviewsList : [],
        loading: false,
        currentPage: 1,
        reviewPerPage: 5
    }

    getReviews = async () => {
        this.setState({loading: true});
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        this.setState({reviewsList: res.data});
        this.setState({loading: false});
    }

    paginate = (pageNumber) => {
        this.setState({currentPage: pageNumber});
    }

    componentDidMount(){
        this.getReviews();
    }

    render() { 
        const indexOfLastReview = this.state.currentPage * this.state.reviewPerPage;
        const indexOfFirstReview = indexOfLastReview - this.state.reviewPerPage;
        const currentPosts =  this.state.reviewsList.slice(indexOfFirstReview, indexOfLastReview);

        return ( 
            <div className="review-section pb-5">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-8">
                            <h2 class="border-bottom-green pb-2 mb-4">Reviews</h2>
                            <ReviewList reviewList={currentPosts} loading={this.state.loading}/>
                            <ReviewPagination  
                                reviewPerPage={this.state.reviewPerPage}
                                totalReview={this.state.reviewsList.length}
                                paginate={this.paginate}
                                currentPage={this.state.currentPage}
                            />
                        </div>
                        <div className="col-lg-4">
                            <ReviewForm />
                        </div>
                   </div>
                </div>     
            </div>    
        );
    }
}
 
export default Review;