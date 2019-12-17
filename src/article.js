import React from 'react';
import Search from './Search';
import BookDetail from './BookDetail';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Article() {
    return (
        <div className="article">
            <Router>
                <Switch>
                    <Route path="/:id" component={BookDetail} />
                    <Route path="/" component={Search} />
                </Switch>
            </Router>
        </div>
    );
}

export default Article;