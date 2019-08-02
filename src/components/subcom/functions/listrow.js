import React, { Component } from 'react';

export function User(props) {
    return (
        <tbody>
            {props.data.map(element => {
                return (
                    <tr key={element._id}>
                        <td>{element.username}</td>
                    </tr>)
            })}
        </tbody>
    )
}