import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;

        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const {location} = this.props;

        if (location.state) {
            return (
                <div className="movie__detail">
                    <h1 className="movie__detail-title">
                        {location.state.title}
                        <span className="movie__detail-year"> ({location.state.year})</span>
                    </h1>
                    <img src={location.state.poster} />
                    <p>{location.state.summary}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;