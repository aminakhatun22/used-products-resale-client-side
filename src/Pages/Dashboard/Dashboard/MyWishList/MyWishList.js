import React from 'react';

const MyWishList = ({ setWishList, wishList }) => {
    const { Name } = wishList;
    return (
        <div>
            {Name}
        </div>
    );
};

export default MyWishList;