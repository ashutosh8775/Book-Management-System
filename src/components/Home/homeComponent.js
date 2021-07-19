import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { useHistory, useParams } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
// import {logo} from "/*.jpg";

// import './home.css';
// console.log(logo,'logo')
const imageData = {
    "data":[
        {"id":1,"path":"/images/book1.jpg"},
        {"id":2,"path":"/images/book2.jpg"},
        {"id":3,"path":"/images/book3.jpg"},
        {"id":4,"path":"/images/book4.jpg"},
        {"id":5,"path":"/images/book5.jpg"},
        {"id":6,"path":"/images/book6.jpg"},
        {"id":7,"path":"/images/book7.jpg"},
        {"id":8,"path":"/images/book8.jpg"},
        {"id":9,"path":"/images/book9.jpg"},
        {"id":10,"path":"/images/book10.jpg"}
    ]
}
function Home() {
    const [booksData, getBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    let history = useHistory();

    const getData = async () => {
        setLoading(true)
        const res = await axios.get("http://localhost:3002/books");
        let finalData = res.data.output;
        finalData.forEach(element => {
            imageData.data.forEach(image => {
                if(image.id == element.id){            
                    element.imagePath = image.path;
                }
            });
           
        });
        getBooks(finalData);
        setLoading(false)
    }
    useEffect(()=>{
        getData();
    },[])

    //redirectTo book preview page
    console.log(history,'ll');
    function viewBook(book){
        history.push("/bookPreview"+"/"+book.id);
    }

    return (
            
    <section className="online-courses">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                    <div className="online-courses-text-widget">
                        <h2>Online Books</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus delectus error possimus vitae dolorum odio aliquam! Veritatis eos, nesciunt velit saepe quis, numquam sed nisi consequatur recusandae, atque quasi.</p>
                        <a href="#" className="btn btn-warning btn-sm">Popular Books</a>
                    </div>
                </div>
             </div>
             <div className="row mt-5">
             {loading ? 
                <Spinner animation="border"/>: 
                    
                    booksData.map((book) =>{
                    return (

                    <div className="col-lg-4 col-md-4" key={book.id} >
                        <div className="card online-course-card">
                            <img src={book.imagePath} height="350"/>
                            <div className="card-body">
                            <h3 className="card-title">{book.name}</h3>
                            <StarRatingComponent 
                                name="rating" 
                                starCount={5}
                                value={Number(book.avg_ratings)}
                                editing={false}
                            />
                            <p className="card-text">{book.description}</p>
                            <button type="button" className="btn btn-sm btn-primary" onClick={() => viewBook(book)}>View Book</button>
                            </div>
                        </div>
                    </div>
                        )
                    })             
                }
                </div>
    </div>
</section>
    );
}

export default Home;