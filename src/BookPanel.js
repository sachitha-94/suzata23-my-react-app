import React from 'react';
import axios from 'axios';

function BookPanel() {

    const [bookName, setBookName] = React.useState('');

    function fetchBookRecords(){
        axios.get('http://localhost:8080/books')
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }


    function saveBook(){
        const value = {
            name: bookName,
            //author: 'some author'
        };

        axios.post('http://localhost:8080/book', value)
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }


    function displayBookHandler(){
        fetchBookRecords();
    }

    function saveBookHandler(){
        saveBook();
    }

    return (
        <div>
            <input type="text" placeholder='Book Name' value ={bookName} onChange ={e => setBookName(e.target.value) }/>
            <br/>
            <button onClick={saveBookHandler}>Save Book Details</button> 
            <br/>
            <h3>Show Books:</h3>
            <button onClick={displayBookHandler}>Display Books</button> 
        </div>
    );

}

export default BookPanel;
