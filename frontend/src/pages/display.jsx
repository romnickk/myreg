// MyTable.js
import React, { useState, useEffect } from 'react';

function Display() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/display');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Display;
