import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Order } from './orders'
import { Customer } from './customers'
import { StockLocation } from './stock_locations'
import { Address } from './addresses'
import { ReturnLineItem } from './return_line_items'
import { Attachment } from './attachments'


type ReturnRel = ResourceRel & { type: typeof Returns.TYPE }
type OrderRel = ResourceRel & { type: 'orders' }
type StockLocationRel = ResourceRel & { type: 'stock_locations' }


interface Return extends Resource {
	
	number?: string
	status?: string
	customer_email?: string
	skus_count?: number
	approved_at?: string
	cancelled_at?: string
	shipped_at?: string
	rejected_at?: string
	received_at?: string
	archived_at?: string

	order?: Order
	customer?: Customer
	stock_location?: StockLocation
	origin_address?: Address
	destination_address?: Address
	return_line_items?: ReturnLineItem[]
	attachments?: Attachment[]

}


interface ReturnCreate extends ResourceCreate {
	
	order: OrderRel
	stock_location?: StockLocationRel

}


interface ReturnUpdate extends ResourceUpdate {
	
	_request?: boolean
	_approve?: boolean
	_cancel?: boolean
	_ship?: boolean
	_reject?: boolean
	_receive?: boolean
	_restock?: boolean
	_archive?: boolean
	_unarchive?: boolean

	stock_location?: StockLocationRel

}


class Returns extends ApiResource {

	static readonly TYPE: 'returns' = 'returns'
	// static readonly PATH = 'returns'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Return>> {
		return this.resources.list<Return>({ type: Returns.TYPE }, params, options)
	}

	async create(resource: ReturnCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Return> {
		return this.resources.create({ ...resource, type: Returns.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Return> {
		return this.resources.retrieve<Return>({ type: Returns.TYPE, id }, params, options)
	}

	async update(resource: ReturnUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Return> {
		return this.resources.update({ ...resource, type: Returns.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: Returns.TYPE, id }, options)
	}

	async order(returnId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Order> {
		return this.resources.fetch<Order>({ type: 'orders' }, `returns/${returnId}/order`, params, options) as unknown as Order
	}

	async customer(returnId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Customer> {
		return this.resources.fetch<Customer>({ type: 'customers' }, `returns/${returnId}/customer`, params, options) as unknown as Customer
	}

	async stock_location(returnId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockLocation> {
		return this.resources.fetch<StockLocation>({ type: 'stock_locations' }, `returns/${returnId}/stock_location`, params, options) as unknown as StockLocation
	}

	async origin_address(returnId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Address> {
		return this.resources.fetch<Address>({ type: 'addresses' }, `returns/${returnId}/origin_address`, params, options) as unknown as Address
	}

	async destination_address(returnId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Address> {
		return this.resources.fetch<Address>({ type: 'addresses' }, `returns/${returnId}/destination_address`, params, options) as unknown as Address
	}

	async return_line_items(returnId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<ReturnLineItem>> {
		return this.resources.fetch<ReturnLineItem>({ type: 'return_line_items' }, `returns/${returnId}/return_line_items`, params, options) as unknown as ListResponse<ReturnLineItem>
	}

	async attachments(returnId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `returns/${returnId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isReturn(resource: any): resource is Return {
		return resource.type && (resource.type === Returns.TYPE)
	}


	relationship(id: string | ResourceId | null): ReturnRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: Returns.TYPE } : { id: id.id, type: Returns.TYPE }
	}


	type(): string {
		return Returns.TYPE
	}

}


export default Returns

export { Return, ReturnCreate, ReturnUpdate }
