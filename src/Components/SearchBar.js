import React, { Component } from 'react';
class SearchBar extends Component {
    state = { term: '' }
    onInputChange(event) {
        console.log(event.target.value);

    }
    onFromSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)

    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form">
                    <div className="field">
                        <label style={{ color: 'green' }}>Image Search </label>
                        <input type='text'
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} placeholder='Eg:cars' />
                    </div>

                </form>

            </div>
        );
    }
}

export default SearchBar;
