import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event.target.value);
    }

    handleSubmit(event) {
        this.props.searchBooks(this.props.inputvalue);
        event.preventDefault();
    }

    render() {
        return (
            <div className={this.props.start ? "Search-start" : "Search-box"}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className="input-box" type="text" value={this.props.inputvalue} onChange={this.handleChange} />
                    </label>
                    <input className="submit-box" type="submit" value="检索" />
                </form>
            </div>
        );
    }
}

export default SearchBar;