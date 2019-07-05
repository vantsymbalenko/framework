import { ContextConfiguration } from './context'
import * as Actions from './actions/types'

function reducer(state: ContextConfiguration, { type, payload }: Actions.Actions): ContextConfiguration {
	switch (type) {
		default: {
			return state
		}
	}
}

export default reducer
