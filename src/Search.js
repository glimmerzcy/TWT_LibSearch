import React from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            key: "",
            start: true,
        };

        this.searchBooks = this.searchBooks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postRequest = this.postRequest.bind(this);
    }

    postRequest(key) {
        const settings = {
            method: 'POST',
            mode: 'cors',
        };
        var url = `http://library.justinxiao.cn/api/search?key=${key}`;
        var ans = [];
        fetch(url, settings).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            ans = data.data;
            this.setState({
                data: ans
            })
        }
        ).catch(function (error) {
            alert('请求失败，请重试QAQ');
        });
    }

    searchBooks(key) {
        if (this.state.start) {
            this.setState({
                start: false
            })
        }
        this.postRequest(key);
    }

    handleChange(inputvalue) {
        this.setState({
            key: inputvalue,
        });
    }

    render() {
        let search;
        search = (
            <div>
                <SearchBar inputvalue={this.state.key} handleChange={this.handleChange} searchBooks={this.searchBooks} start={this.state.start} />
                {this.state.start ? <div></div> : <BookTable data={this.state.data} />}
            </div>
        );
        return search;
    }
}

export default Search;