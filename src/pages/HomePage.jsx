import React, { useContext, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { mainContext } from '../contexts/MainContext';

const HomePage = () => {
    const {getProducts, products, deleteProduct} = useContext(mainContext)
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products);
    return (
        <div>
            Home page
            <Link to="/create">Создать продукт</Link>
            {
                products ? (
                    products.length ? (
                        <table>
                            <thead>
                                <tr>
                                    {/* <th>Photo</th> */}
                                    <th>Art</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                    <th>Type</th>
                                    <th>Color</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((i) => (
                                        <tr key={i.id}>
                                            {/* <td>
                                                <img width="50" src={i.image} alt="" />
                                            </td> */}
                                        <td>{i.art}</td>
                                        <td>{i.price}</td>
                                        <td>{i.size}</td>
                                        <td>{i.type}</td>
                                        <td>{i.color}</td>
                                        <td>
                                            <button onClick={() => deleteProduct(i.id)}>Del</button>
                                        </td>
                                    </tr>
                                    ))
                                }
                               
                            </tbody>
                        </table>
                    ) : (
                        <h2>Product list empty</h2>
                    )
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default HomePage;