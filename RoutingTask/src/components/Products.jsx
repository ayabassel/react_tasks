import React from "react";
import { ProductItem } from "./ProductItem";

export function Products() {
    let productsList = [
        {
            id: 1,
            productName: "Calvin Klein Slim Fit Suit",
            description: "Calvin Klein Slim Fit Suit Separates Linen-Blend, Tan",
            price: 13900,
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3XE1_23_CALVIN_KLEIN_TAN_TWILL_MAIN?$40GridDesktop$"
        },
        {
            id: 2,
            productName: "Linen Slim Fit Suit",
            price: 10990,
            description: "JOE Joseph Abboud Linen Slim Fit Suit Separates, Tan",
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3RTA_23_JOE_JOSEPH_ABBOUD_TAN_CHAMBRAY_MAIN?$40GridDesktop$"
        },
        {
            id: 3,
            productName: "Light Gray Sharkskin Suit",
            description: "Calvin Klein X-Fit Slim Fit Suit Separates, Light Gray Sharkskin",
            price: 16490,
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3VTL_16_CALVIN_KLEIN_LIGHT_GRAY_SHARKSKIN_MAIN?$40GridDesktop$"
        },
        {
            id: 4,
            productName: "Classic Fit Linen Suit",
            price: 10900,
            description: "Lauren by Ralph Lauren Navy Classic Fit Linen Suit Separates",
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3VDP_01_LAUREN_BY_RALPH_LAUREN_NAVY_SOLID_MAIN?$40GridDesktop$"
        },
        {
            id: 5,
            productName: "Blue Classic Fit Suit",
            price: 12090,
            description: "Michael Strahan Postman Blue Classic Fit Suit",
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3V4H_14_MICHAEL_STRAHAN_BLUE_POSTMAN_NEW_MAIN?$40GridDesktop$"
        },
        {
            id: 6,
            productName: "Modern Fit Suit",
            price: 10900,
            description: "Michael Kors Modern Fit Suit Separates, Tan",
            src: "https://image.menswearhouse.com/is/image/TMW/MW40_3XCV_05_MICHAEL_KORS_TAN_SOLID_MAIN?$40GridDesktop$"
        }
    ]
    return (
        <div className='bg-dark p-5 text-center text-light'>
            <h2 className='text-white mb-4'>Our Products</h2>
            <div className="container">
                <div className="row  m-3 text-dark">
                    {productsList.map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })}

                </div>
            </div>
        </div>
    )
}