import React, { useContext } from 'react';
import ProductCategoryRow from './productCategory';
import ProductRow from './row';
import { DataContext } from './datacontext';

const ProductTable = () => {
    const { state } = useContext(DataContext);

    const rows = [];
    let lastCategory = null;

    state.products.forEach((product) => {
        if (state.search && !product.name.toLowerCase().includes(state.search.toLowerCase())) {
            return;
        }
        if (state.inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
