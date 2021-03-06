import React, {Component} from "react";
import StarRatingComponent from 'react-star-rating-component';
import UserIcon from "./user_icon.jpg";
class ReviewList extends Component {
    state = {  }
    render() { 
        return ( 
           
            <div className="review-list">
                {
                    this.props.reviewList.map(item => {
                        return (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-body">
                                    <div className="user-wrp d-flex align-items-center">
                                        <img src={UserIcon} width="30" alt=""/>
                                        <p className="card-subtitle text-muted mb-0">{item.username}</p>
                                    </div>
                                    <div className="rating-wrp d-flex align-items-center">
                                        <StarRatingComponent 
                                            name="rating" 
                                            starCount={5}
                                            value={Number(item.rating)}
                                            editing={false}
                                        />
                                        <h6 className="card-title mb-0">{item.title}</h6>
                                    </div>
                                    <p className="card-text">{item.review}</p>
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