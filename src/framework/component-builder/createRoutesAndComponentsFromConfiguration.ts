export function createRoutesAndComponentsFromConfiguration(
	{ componentRegistry, dataSourceRegistry, validatorRegistry, transformerRegistry },
	routesConfiguration,
) {

    
    // const componentContext
    // const configurationWithKeys = ;
	const routes = routesConfiguration.map(dashboardConfig => {
        const containerComponent = componentRegistry.getComponent(dashboardConfig.type);

        if(!containerComponent){
            console.warn(`Component ${dashboardConfig.type} was specified as root component for dashboard but wasn't found in component register. Have you registered this component?`)
            return {}
        }

        
	})
}
