import React, { Component } from 'react';
import { component } from '../framework';

@component('dashboard')
export class Dashboard extends Component{ 
    render(){
        return(<div>this is dashboard</div>)
    }
}