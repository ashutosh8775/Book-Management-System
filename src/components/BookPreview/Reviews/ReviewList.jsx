import React, {Component} from "react";
import StarRatingComponent from 'react-star-rating-component';

class ReviewList extends Component {
    constructor(props){
        super(props);
    }
    state = {  }
    render() { 
         if (this.props.loading) {
            return <h2>Loading...</h2>;
        }
        return ( 
            <div className="review-list">
                {
                    this.props.reviewList.map(review => {
                        return (
                            <div class="card mb-3" key={review.id}>
                                <div class="card-body">
                                    <h5 class="card-title">{review.name}</h5>
                                    <StarRatingComponent 
                                        name="rating" 
                                        starCount={5}
                                        value={3}
                                        editing={false}
                                    />
                                    <h6 class="card-subtitle mb-2 text-muted">{review.email}</h6>
                                    <p class="card-text">{review.body}</p>
                                </div>
                            </div>  
                        )  
                    })
                }
            </div>
         );
    }
}
 
export default ReviewList;