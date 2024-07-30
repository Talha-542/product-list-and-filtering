import React from 'react';
import './App.css';
import FilterableProductTable from './FilterProductTable';
import { DataProvider } from './datacontext';
import './styles.css'

function App() {
    return (
        <div className="App">
            <DataProvider>
                <FilterableProductTable />
            </DataProvider>
        </div>
    );
}

export default App;
