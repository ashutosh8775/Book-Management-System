import React from 'react';
import Review from '../components/BookPreview/Reviews/Review';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from "fetch-mock"

Enzyme.configure({ adapter: new Adapter() });

describe('Review Component', ()=>{
  it('Check Ui is loaded or not', ()=> {
      expect(shallow(<Review/>)).toMatchSnapshot();
  });

  it("Check paginate function", () => {
      const wrap = shallow(<Review />);
      wrap.instance().myRef.current = {scrollIntoView : jest.fn() };
      wrap.instance().paginate(2);
      expect(wrap.state().currentPage).toBe(2);
  });

  it("Check handle click function", () => {
      const wrap = shallow(<Review />);
      const reviewsList = [
        { 
          book_id: 3,
          date: "2021-06-18T08:12:32.000Z",
          id: 46,
          rating: 1,
          review: "Not up to the mark",
          title: "Don't Read",
          user_id: 1,
          username: "Ram"
        }
      ]
      wrap.instance().handleClick(reviewsList);
      expect(wrap.state().reviewsList).toEqual(reviewsList);
  });

  it('fetches successfully data from an API', () => {
    const wrap = shallow(<Review />);
    const reviewsList = [
      { 
        book_id: 3,
        date: "2021-06-18T08:12:32.000Z",
        id: 46,
        rating: 1,
        review: "Not up to the mark",
        title: "Don't Read",
        user_id: 1,
        username: "Ram"
      }
    ]

    fetchMock.get('http://localhost:3002/getReview/3', reviewsList);

	  wrap.instance().getReviews(3)
	    .then(res => {
	    	expect(res).toEqual(reviewsList);
        expect(wrap.state().reviewsList).toEqual(reviewsList);
        expect(wrap.state().loading).toEqual(false);
	    })
	  .catch(err => {
      expect(err).toEqual(err);
	  });
  });
 

});