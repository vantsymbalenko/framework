import { createContext } from 'react';

export interface ContextConfiguration {
    dashboards: any
    currentDashboard: number
}

const initialState: ContextConfiguration = {
    dashboards: [],
    currentDashboard: 0
}

const Context = createContext(initialState);

export default Context