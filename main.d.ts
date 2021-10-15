type deactiveRefDestroyer = () => void
type deactiveRefRegisterer = (key: string, val: any) => deactiveRefDestroyer
type deactiveRefStorage = { [key: string]: any }
export type deactiveObserver = (key: string, val: any, oldVal?: any) => any
export function deactive(observer: deactiveObserver): {
	ref: deactiveRefRegisterer
	$: deactiveRefStorage
}
