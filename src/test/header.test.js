import React from 'react';
import Header from '../components/Header/headerComponent';
// import ReviewList from '../components/BookPreview/Reviews/ReviewList';
// import ReviewForm from '../components/BookPreview/Reviews/ReviewForm';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('header Component', ()=>{
    it('Check Ui is loaded or not', ()=> {
        expect(shallow(<Header/>)).toMatchSnapshot();
    });

});