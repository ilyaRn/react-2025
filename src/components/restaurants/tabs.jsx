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

export const RestaurantsTabs = ({restaurants, activeTab, onChangeTab}) => {
    const tabs = restaurants.map(({id, name}, i) =>
        <button key={id}
            style={css.buttonTab}
            disabled={i === activeTab}
            onClick={() => onChangeTab(i)}>
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
    activeTab: PropTypes.number.isRequired,
    onChangeTab: PropTypes.func.isRequired,
};