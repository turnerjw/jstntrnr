import React from "react";

const rowElements = (children, rows) =>
    children.map((child, index) =>
        React.cloneElement(child, { rows: rows, key: index })
    );

const GridRow = ({ children, rows }) => <>{rowElements(children, rows)}</>;

export default GridRow;
