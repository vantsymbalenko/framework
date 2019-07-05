import React from 'react';
import { Dashboard } from './components/dashboard'
import { ComponentRegistry, DatasourceRegistry, ValueValidatorRegistry, TransfromerRegistry } from './framework';
import { StaticDataSource, QueryDataSource} from './datasources'

const componentRegistry = new ComponentRegistry().registerAll(
  Dashboard
);

const dataSourceRegistry = new DatasourceRegistry().registerAll(
  StaticDataSource,
  QueryDataSource
)

const validatorRegistry = new ValueValidatorRegistry()

const transformerRegistry = new TransfromerRegistry()

const routes = createRoutesAndComponentsFromConfiguration({
  dataSourceRegistry,
  componentRegistry,
  validatorRegistry,
  transformerRegistry
})



function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
