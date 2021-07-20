import React from 'react';
import Home from '../components/Home/homeComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";
import fetchMock from "fetch-mock"

Enzyme.configure({ adapter: new Adapter() });

describe('Home Component', ()=>{
    it('Check Ui is loaded or not', ()=> {
        expect(shallow(<Home/>)).toMatchSnapshot();
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
    
        fetchMock.get('http://localhost:3002/books', reviewsList);
    
            wrap.instance().getReviews(3)
                .then(res => {
                    expect(res).toEqual(reviewsList);
                })
            .catch(err => {
          
                expect(err).toEqual(null, err);
            });
        
      });

});