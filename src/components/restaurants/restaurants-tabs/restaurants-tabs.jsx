import {React} from "react";
import PropTypes from "prop-types";

const css = {
    root: {
        margin: "2rem 0",
        textAlign: "center",
    },
    buttonTab: {
        margin: "0 1rem",
    }
};

export const RestaurantsTabs = ({restaurants, activeRestaurant, onChangeRestaurant}) => {
    const tabs = restaurants.map(({id, name}) =>
        <button key={id}
            style={css.buttonTab}
            disabled={id === activeRestaurant}
            onClick={() => onChangeRestaurant(id)}>
            {name}
        </button>
    );
    return (
        <div style={css.root}>
            {tabs}
        </div>
    );
};

RestaurantsTabs.propTypes = {
    restaurants: PropTypes.array.isRequired,
    activeRestaurant: PropTypes.number.isRequired,
    onChangeRestaurant: PropTypes.func.isRequired,
};