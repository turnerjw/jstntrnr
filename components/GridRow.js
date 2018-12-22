import React from "react";

const rowElements = (children, rows) =>
    React.Children.map(children, (child, index) =>
        React.cloneElement(child, { rows: rows, key: index })
    );

const GridRow = ({ children, rows }) => <>{rowElements(children, rows)}</>;

export default GridRow;
