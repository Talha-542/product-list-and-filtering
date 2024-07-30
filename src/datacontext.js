import { createContext, useReducer } from 'react';

const initialState = {
    products: [
        { category: "Fruits", price: "Rs300", stocked: true, name: "Apple" },
        { category: "Fruits", price: "Rs10000", stocked: false, name: "Dragonfruit" },
        { category: "Fruits", price: "Rs2000", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "Rs250", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "Rs140", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "Rs100", stocked: true, name: "Peas" },
        { category: "Vegetables", price: "Rs100", stocked: true, name: "Timatar" },
        { category: "Dry Fruit", price: "Rs2000", stocked: true, name: "Wallnut" }
    ],
    search: '',
    inStockOnly: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, search: action.payload };
        case 'TOGGLE':
            return { ...state, inStockOnly: !state.inStockOnly };
        default:
            return state;
    }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
