const typeNameField = Symbol.for('componentType')

export interface ComponentType {
	type: string
	aliases: string[]
}

export function getComponentTypeData(componentOrType) {
	return componentOrType[typeNameField] as Readonly<ComponentType>
}

function setType(v: any, type: string, aliases: string[]) {
	Object.defineProperty(v, typeNameField, {
		writable: false,
		configurable: false,
		enumerable: false,
		value: Object.freeze({
			type,
			aliases
		} as ComponentType)
	})
}

export function component(type: string, ...aliases: string[]) {
	// tslint:disable-next-line: ban-types
	return (constructor: Function) => {
		setType(constructor.prototype, type, aliases)
		setType(constructor, type, aliases)
	}
}