const React = require('react');
const Image = require('nordic/image');

const View = (props) => {
    const {message, products} = props

    return(
        <>
            <h2>{message}</h2>
                <ul>
                    {
                        products.map(pct => {
                            return (<li>
                                        <h2>{pct.title}</h2>
                                        <h3>{pct.price}</h3>
                                        <Image src={pct.thumbnail} lazyload="off"/>
                                        
                                    </li>)
                        })
                    }
                </ul>
        </>
    )
}

module.exports = View;