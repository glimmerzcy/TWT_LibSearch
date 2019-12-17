import React from 'react';
import './Book.css';
import {Link, NavLink} from 'react-router-dom'

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: this.props.cover ? this.props.cover : ""
        };

        this.showDefaultImage = this.showDefaultImage.bind(this);
        this.handleImageError = this.handleImageError.bind(this);
    }


    showDefaultImage(event) {
        event.target.src = require("./assets/image-error.png");
    }

    handleImageError() {
        this.setState({
            imageSrc: require("./assets/image-error.png")
        });
    }

    render() {
        const url = `${this.props.data.id}`;
        const book = (
            <div className="book-card">
                <img className="book-image" src={this.state.imageSrc} onError={this.handleImageError} alt="book" />
                <div className="book-info">
                    <Link to={url} className="book-title">{this.props.data.title}</Link>
                    <p>作者： {this.props.data.author}</p>
                    <p>出版社： {this.props.data.publisher}</p>
                    <p>书籍编号： {this.props.data.id}</p>
                </div>
            </div>
            
        );
        return book;
    }
}

export default Book;