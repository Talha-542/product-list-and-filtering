import React from 'react';
import SearchBar from './searchbar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    );
};

export default FilterableProductTable;
