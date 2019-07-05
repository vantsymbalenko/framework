import React from 'react';

const defaultConfiguration = {
    dashboardsConfiguration: [],
    activeDashboard: undefined
}

export const ConfigurationContext = React.createContext(defaultConfiguration)

export class Configuration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dashboardsConfiguration: [],
            activeDashboard: undefined
        }
    }
}