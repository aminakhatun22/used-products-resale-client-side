import React from 'react';

const CategoryProductOption = ({ pro }) => {
    const [name, location] = pro;
    return (
        <div>
            <h2>Thils{name}</h2>
        </div>
    );
};

export default CategoryProductOption;