/* eslint-disable @typescript-eslint/no-explicit-any */

enum ErrorType {
	CLIENT = 'client',
	REQUEST = 'request',
	RESPONSE = 'response',
	GENERIC = 'generic'
}

class ApiError extends Error {

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static isApiError(error: any): error is ApiError {
		return error && (error.name === 'ApiError') && (error.type === ErrorType.RESPONSE)
	}

	type: string
	errors: any[] = []
	status?: number
	code?: string

	constructor(error: { message: string, type?: ErrorType }) {
		super(error.message)
		this.name = this.constructor.name
		this.type = error.type || ErrorType.GENERIC
	}

	first(): any {
		return (this.errors.length > 0) ? this.errors[0] : undefined
	}

}


export default ApiError

export { ErrorType }
