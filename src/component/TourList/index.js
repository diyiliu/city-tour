import React, {Component} from 'react';
import './style.scss'
import {tourData} from '../tourData'
import Tour from "../Tour";

class TourList extends Component {
    state = {
        tours: tourData
    }

    handleRemoveTour = (id) => {
        const { tours } = this.state;
        const filterTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: filterTours
        });
    }

    render() {
        const {tours} = this.state;
        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.handleRemoveTour}/>
                    )
                })}
            </section>
        );
    }
}

export default TourList;