import React from 'react';
import List from './components/List';
import Search from './components/Search';

function ItemList({ update }) {
    return (
        <div>
            <Search />
            <List />
        </div>
    );
}


export default ItemList;

