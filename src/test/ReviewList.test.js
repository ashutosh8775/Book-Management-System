import React from 'react';
import ReviewList from '../components/BookPreview/Reviews/ReviewList';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewList Component', ()=>{

    it('List of Reviews', () => {
        const reviewList = [
        { 
            book_id: 3,
            date: "2021-06-18T08:12:32.000Z",
            id: 46,
            rating: 1,
            review: "Not up to the mark",
            title: "Don't Read",
            user_id: 1,
            username: "Ram"
        },
        { 
            book_id: 3,
            date: "2021-06-18T08:12:32.000Z",
            id: 47,
            rating: 2,
            review: "Good Book",
            title: "Awesome",
            user_id: 1,
            username: "test123"
        }
        ];
        const wrapper = shallow(<ReviewList reviewList={reviewList} />);
        expect(wrapper.find('div.card').length).toBe(reviewList.length);
    });
})