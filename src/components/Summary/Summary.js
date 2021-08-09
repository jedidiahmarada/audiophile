import React from 'react'
import './Summary.css'

const Summary = () => {
    return (
        <div className="outerContainer">
            <h2 id="summary">SUMMARY</h2>

            {/* ITEM CONTAINER */}
            <div className="itemContainer">
                IMAGE CONTAINER
                
                    <img src="../../assets/cart/image-xx99-mark-two-headphones.jpg" alt="items"/>
                

                <div className="itemText">
                ITEM NAME
                <div className="itemNameCont">
                    <p id="itemName">XX99 MK II</p>
                    <p id="itemAmount">x1</p>
                </div>
                PRICE
                <p id="price">$ 2,999</p>
                </div>
            </div>
            {/* END OF ITEM CONTAINER */}

            {/* ITEM CONTAINER */}
            <div className="itemContainer">
                {/* IMAGE CONTAINER */}
                
                    <img src="../../assets/cart/image-xx59-headphones.jpg" alt="items"/>

                
                <div className="itemText">
                    {/* ITEM NAME */}
                <div className="itemNameCont">
                    <p id="itemName">XX59</p>
                    <p id="itemAmount">x2</p>
                </div>
                {/* PRICE */}
                <p id="price">$ 899</p>
                </div>
            </div>
            {/* END OF ITEM CONTAINER */}

            {/* ITEM CONTAINER */}
            <div className="itemContainer">
                {/* IMAGE CONTAINER */}
                
                    <img src="../../assets/cart/image-yx1-earphones.jpg" alt="items"/>

                <div className="itemText">
                    {/* ITEM NAME */}
                <div className="itemNameCont">
                    <p id="itemName">YX1</p>
                    <p id="itemAmount">x1</p>
                </div>
                {/* PRICE */}
                <p id="price">$ 599</p>
                </div>
            </div>
            {/* END OF ITEM CONTAINER */}

            {/* PAYMENT DESCRIPTION */}
            <div className="paymentDescCont">
                {/* TOTAL */}
                <div className="paymentTextCont">
                    <p id="greyText">TOTAL</p>
                    <p id="boldText">$ 5,396</p>
                </div>
                {/* END OF TOTAL */}

                {/* SHIPPING */}
                <div className="paymentTextCont">
                    <p id="greyText">SHIPPING</p>
                    <p id="boldText">$ 50</p>
                </div>
                {/* END OF SHIPPING */}

                {/* VAT */}
                <div className="paymentTextCont">
                    <p id="greyText">VAT (INCLUDED)</p>
                    <p id="boldText">$ 1,079</p>
                </div>
                {/* END OF VAT */}

                {/* GRAND TOTAL */}
                <div className="paymentTextCont">
                    <p id="greyText">GRAND TOTAL</p>
                    <p id="orangeText">$ 5,446</p>
                </div>
                {/* END OF GRAND TOTAL */}
            </div>
            {/* END OF PAYMENT DESCRIPTION */}

            {/* BUTTON */}
            <button>CONTINUE &amp; PAY</button>
            {/* END OF BUTTON */}
        </div>
    )
}
export default Summary;