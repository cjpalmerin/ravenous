import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'bestMatch': 'best_match',
    'highestRated': 'rating',
    'mostReviewed': 'review_count'
}

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionValue = sortByOptions[sortByOption];
            <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        return (
            < div className="SearchBar" >
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div >
        )
    }
}
