const deactive = (observer) => {
	const $ = {}
	const ref = (key, val) => {
		Object.defineProperty($, key, {
			configurable: true,
			enumerable: true,
			get() {
				return val
			},
			set(newVal) {
				val = observer(key, newVal, val)
			}
		})

		return () => {
			delete $[key]
		}
	}

	return {ref, $}
}

module.exports = {deactive}
