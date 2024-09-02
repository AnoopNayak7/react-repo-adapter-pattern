import React, { useEffect, useState } from 'react';
import DataRepository from '../repositories/dataRepository';
import ApiAdapter from '../adapters/apiAdapter';

const apiAdapter = ApiAdapter('https://api.example.com');
const dataRepository = DataRepository(apiAdapter);

const ItemsComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await dataRepository.getAllItems();
            setItems(data);
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsComponent;