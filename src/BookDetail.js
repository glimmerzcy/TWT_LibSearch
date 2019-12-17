import React from 'react';
import './BookDetail.css';

class BookDetail extends React.Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            data: null,
        }

        this.postRequest(this.id);
        this.showDefaultImage = this.showDefaultImage.bind(this);
        this.handleImageError = this.handleImageError.bind(this);
    }

    postRequest(id) {
        const settings = {
            method: 'GET',
            mode: 'cors',
        };
        var url = `http://library.justinxiao.cn/api/bookDetail/${id}`;
        var ans = [];
        fetch(url, settings).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            ans = data.data;
            this.setState({
                data: ans,
                imageSrc: ans.cover ? ans.cover : ""
            })
        }
        ).catch(function (error) {
            alert('请求失败，请重试QAQ');
        });
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
        let book;

        if (this.state.data === null) {
            book = (<div></div>);
        }
        else {
            book = (
                <div>
                    <div className="detail-info">
                        <img className="book-image" src={this.state.imageSrc} onError={this.handleImageError} alt="book" />
                        <div className="book-info">
                            <p className="book-title">{this.state.data.title}</p>
                            <p>作者：{this.state.data.author}</p>
                            <p>出版社：{this.state.data.publisher}</p>
                            <p>书籍编号：{this.state.data.id}</p>
                        </div>
                    </div>
                    <div className="detail-introduce">
                        <p>图书简介：{this.state.data.introduce || "无"}</p>
                        <p>编者按：{this.state.data.note || "无"}</p>
                    </div>
                    <div className="detail-comment">
                        <p>评论：</p>
                        <p>张三：难得一见的好书</p>
                        <p>张三：难得一见的好书</p>
                        <p>张三：难得一见的好书</p>
                        <p>张三：难得一见的好书</p>
                    </div>
                </div>
            );
        }
        
        return book;
    }
}

export default BookDetail;