import React from "react";
import {Pagination as MaterialPagination} from '@material-ui/lab';

const Pagination = (props) => {
    return (
        <MaterialPagination
            page={props.activePage}
            onChange={(event, value) => props.onChange(value)}
            count={Math.ceil(props.totalItems / props.itemsPerPage)}
            shape="rounded"
            color="primary"
        />
    );
};

Pagination.defaultProps = {
    itemsPerPage: 30
};

export default Pagination;