import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { User } from './listrow'

export function UserList(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>username</th>
                    </tr>
                </thead>
                <User data={props.data}/>
            </Table>
        </div>
    )
 }