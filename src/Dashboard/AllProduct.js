import React from 'react';

const AllProduct = ({p, index}) => {
    const {name, prize, availableQuantity, minQuantity} = p;
    return (
        <>
            <tr>
              <th>{index+1}</th>
              <td>{name}</td>
              <td>{prize}</td>
              <td>{availableQuantity}</td>
              <td>{minQuantity}</td>
            </tr>
        </>
    );
};

export default AllProduct;