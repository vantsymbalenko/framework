import { createAction } from './helpers';

type FunctionType = (...args: any[]) => any;
type ActionCreatorMapObject = { [actionCreator: string]: FunctionType};

export type ActionsUnion<A extends ActionCreatorMapObject> = ReturnType<A[keyof A]>

export enum ActionTypes {
    //EXAMPLE: "EXAMPLE_ACTION_TYPE"
}

export const actions = {
	// requestStatus: (payload: Type) => createAction("type", payload)
}

export type Actions = ActionsUnion<typeof actions>