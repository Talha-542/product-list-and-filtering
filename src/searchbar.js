import { useContext } from 'react';
import { DataContext } from './datacontext';

const SearchBar = () => {
    const { state, dispatch } = useContext(DataContext);

    const handleSearchChange = (e) => {
        dispatch({ type: 'SEARCH', payload: e.target.value });
    };

    const handleInStockChange = () => {
        dispatch({ type: 'TOGGLE' });
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={state.search}
                onChange={handleSearchChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={state.inStockOnly}
                    onChange={handleInStockChange}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    );
};

export default SearchBar;
