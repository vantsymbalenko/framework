interface Tab {
	children: Child[]
}

interface Child {
	type: string
	configuration: object
}

interface DashboardConfiguration {
	type: string
	configuration: object
	tabs: Tab[]
}

const IDENTIFICATOR = Symbol('frst-identificator')

function getKey(index: number = -1) {
	return function() {
		++index
		return `component-${index}`
	}
}

export class SaveContext {
	private configurationWithKeys
	private getKey: () => string = getKey()
	constructor(private  configuration: DashboardConfiguration[]) {
		this.configurationWithKeys = this.setKeys(configuration)
	}

	setKeys(configuration: DashboardConfiguration[]) {
        const clonedConfiguration: DashboardConfiguration[] = Object.assign([], configuration)

        function setKeysToGivenConfiguration(config: any){
            config[IDENTIFICATOR] = this.getKey();
            Object.keys(config).forEach(key => {
                if(Array.isArray(config[key])){
                    config[key].forEach(item => {
                        setKeysToGivenConfiguration(item)
                    })
                }
                if(typeof config[key] === 'object'){
                    setKeysToGivenConfiguration(config[key])
                }
            })
        }
        
        return setKeysToGivenConfiguration(clonedConfiguration);
    }
    
    get config(){
        return this.configurationWithKeys
    }
}
