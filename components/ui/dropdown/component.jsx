import React, { PureComponent, useState, useEffect, useRef, createRef, forwardRef } from 'react';

export const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));

export const CustomMenu = forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
        <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
        >
            <ul className="list-unstyled">
            {children}
            </ul>
        </div>
        );
    },
);
