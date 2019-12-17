import React from 'react';
import Book from './Book';
import './BookTable.css'

class BookTable extends React.Component {

    render() {
        const books = [];

        this.props.data.forEach((book) => {
            books.push(
                <Book data={book}></Book>
            );
        });

        return (
            <div className="book-table">
                <div className="book-total">
                    <p>共检索到<span className="red">{books.length}</span>本书籍</p>
                </div>

                {books}
                <div className="blank-box"></div>
            </div>
        );

    }
}

export default BookTable;