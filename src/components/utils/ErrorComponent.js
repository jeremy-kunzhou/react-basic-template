import React from 'react';

export const Error = ({message}) => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>{message}</p>
        </div>
    );
};