/**
 * ©2021 Commerce Layer Inc.
 * Source code generated automatically by SDK codegen from OpenAPI schema 2.3.0
 * Generation date: 21-07-2021
 **/

import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, DocWithData, ResourceId } from '../resource'
import { /* QueryBuilderRetrieve, QueryBuilderList, */QueryParamsList, QueryParamsRetrieve } from '../query'





interface Adjustment extends Resource {
	
	name?: string
	currency_code?: string
	amount_cents?: number
	amount_float?: number
	formatted_amount?: string
	
}


interface AdjustmentCreate extends ResourceCreate {
	
	name: string
	currency_code: string
	amount_cents: number
	
}


interface AdjustmentUpdate extends ResourceUpdate {
	
	name?: string
	currency_code?: string
	amount_cents?: number
	
}


class Adjustments extends ApiResource {

	static readonly TYPE: 'adjustments' = 'adjustments'
	// static readonly PATH = 'adjustments'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<Adjustment[] | DocWithData<Adjustment>> {
		return this.resources.list({ type: Adjustments.TYPE }, params, options)
	}

	async create(resource: AdjustmentCreate, options?: ResourcesConfig): Promise<Adjustment | DocWithData<Adjustment>> {
		return this.resources.create(Object.assign(resource, { type: Adjustments.TYPE }) , options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Adjustment | DocWithData<Adjustment>> {
		return this.resources.retrieve<Adjustment>({ type: Adjustments.TYPE, id }, params, options)
	}

	async update(resource: AdjustmentUpdate, options?: ResourcesConfig): Promise<Adjustment | DocWithData<Adjustment>> {
		return this.resources.update({ ...resource, type: Adjustments.TYPE }, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		this.resources.delete({ type: Adjustments.TYPE, id }, options)
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isAdjustment(resource: any): resource is Adjustment {
		return resource.type && (resource.type === Adjustments.TYPE)
	}

	/*
	filter(): QueryBuilderRetrieve {
		return new QueryBuilderRetrieve(Adjustments.TYPE)
	}
	*/

	/*
	filterList(): QueryBuilderList {
		return new QueryBuilderList(Adjustments.TYPE)
	}
	*/

	relationship(id: string): ResourceId & { type: typeof Adjustments.TYPE } {
		return { id, type: Adjustments.TYPE }
	}

}


export default Adjustments

export { Adjustment, AdjustmentCreate, AdjustmentUpdate }
