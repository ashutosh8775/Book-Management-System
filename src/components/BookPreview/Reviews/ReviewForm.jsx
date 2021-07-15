import React, {Component} from "react";
import {Accordion, Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends Component {
    constructor(props){
        super(props);

        this.state = { 
            rating: 0,
            title: '',
            description: '',
            ratingErrMsg: '',
            descErrMsg: '',
        }
    }
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({rating: nextValue});
        this.setState({ratingErrMsg: ''});
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value, descErrMsg: ''});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.rating < 1 && this.state.description == ''){
             this.setState({ratingErrMsg: 'Rating is required', descErrMsg:'Review Description in required'});
        } else if(this.state.rating < 1){
            this.setState({ratingErrMsg: 'Rating is required'});
        } else if (this.state.description == ''){
            this.setState({descErrMsg:'Review Description in required'});
        } else {
            console.log('state==',this.state)
            //api call will come here
        }
    }

    render() { 
        return ( 
            <div className="review-form-wrapper">
                <Accordion>
                    <Accordion.Toggle eventKey="0" className="no-event">
                            Post A review
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <form onSubmit={this.handleFormSubmit} autoComplete="off">
                                 <div className="mb-1 form-star-wrapper">
                                    <label className="form-label">Add your rating</label>
                                    <StarRatingComponent 
                                        name="rating" 
                                        starCount={5}
                                        value={this.state.rating}
                                        onStarClick={this.onStarClick}
                                    />
                                    <small className="error">
                                        {this.state.ratingErrMsg ? this.state.ratingErrMsg : ""}
                                    </small>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Add a written review</label>
                                    <textarea type="text" className="form-control" id="description" placeholder="What did you like or dislike?" name="description" onChange={this.handleInputChange} rows="5" value={this.state.description}/>

                                    <small className="error">
                                        {this.state.descErrMsg ? this.state.descErrMsg : ""}
                                    </small>
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Add a title</label>
                                    <input type="text" className="form-control" id="title" name="title" placeholder="Sum up your review in one line" onChange={this.handleInputChange} value={this.state.title}/>

                                    {/* <small className="error">
                                        {this.state.errors.title ? this.state.errors.title : ""}
                                    </small> */}
                                </div>
                                <button type="submit" className="btn btn-success mt-3">Submit</button>
                            </form>
                        </Card.Body>
                    </Accordion.Collapse>
                   
                </Accordion>
            </div>
        );
    }
}
 
export default ReviewForm;