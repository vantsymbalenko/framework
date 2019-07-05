import { getComponentTypeData, ComponentType } from "./componentHelpers";

export class ComponentRegistrationError extends Error {
	constructor(component) {
		super(
			`Component ${component.name ||
				'unknown'} does not have a registered type. Try registering using '@component("some-type-name")'`
		)
	}
}

export class DuplicateComponentError extends Error {
	constructor(type: string) {
		super(`Component ${type} was previously registered`)
	}
}

export abstract class AbstractTypeRegistry<TRegistration>{
    private _components: Map<string, TRegistration> = new Map()
    readonly componentList = this._components

    combine?(existing: TRegistration, additional: TRegistration): TRegistration


    registerAll(...components: TRegistration[]) {
		for (const component of components) {
			this.register(component)
		}
		return this
    }
    
    register(component: TRegistration) {
		const type = getComponentTypeData(component)
		if (!type) {
			throw new ComponentRegistrationError(component)
		}

		if (this._components.has(type.type)) {
			throw new DuplicateComponentError(type.type)
		}

		this._components.set(type.type, component)
		this.registerAliases(type, component)
		return this
    }
    
    private registerAliases(
		type: Readonly<ComponentType>,
		component: TRegistration,
		replace: boolean = false,
		throwError: boolean = true
	) {
		if (type.aliases) {
			for (const alias of type.aliases) {
				if (this._components.has(alias)) {
					if (this.combine) {
						const combined = this.combine(this._components.get(alias), component)
						this._components.set(alias, combined)
					} else {
						if (replace) {
							this._components.set(alias, component)
						} else {
							if (throwError) {
								throw new DuplicateComponentError(alias)
							}
						}
					}
				} else {
					this._components.set(alias, component)
				}
			}
		}
	}

}