import React from 'react';

const ProductBookingModal = ({ bookedProduct }) => {
    const { Name } = bookedProduct;
    return (
        <div>



            {/* Put this part before </body> tag */}
            < input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{Name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default ProductBookingModal;