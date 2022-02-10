import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { StockLocation } from './stock_locations'
import { ShippingMethod } from './shipping_methods'
import { Attachment } from './attachments'


type DeliveryLeadTimeRel = ResourceRel & { type: typeof DeliveryLeadTimes.TYPE }
type StockLocationRel = ResourceRel & { type: 'stock_locations' }
type ShippingMethodRel = ResourceRel & { type: 'shipping_methods' }


interface DeliveryLeadTime extends Resource {
	
	min_hours?: number
	max_hours?: number
	min_days?: number
	max_days?: number

	stock_location?: StockLocation
	shipping_method?: ShippingMethod
	attachments?: Attachment[]

}


interface DeliveryLeadTimeCreate extends ResourceCreate {
	
	min_hours: number
	max_hours: number

	stock_location: StockLocationRel
	shipping_method: ShippingMethodRel

}


interface DeliveryLeadTimeUpdate extends ResourceUpdate {
	
	min_hours?: number
	max_hours?: number

	stock_location?: StockLocationRel
	shipping_method?: ShippingMethodRel

}


class DeliveryLeadTimes extends ApiResource {

	static readonly TYPE: 'delivery_lead_times' = 'delivery_lead_times'
	// static readonly PATH = 'delivery_lead_times'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<DeliveryLeadTime>> {
		return this.resources.list<DeliveryLeadTime>({ type: DeliveryLeadTimes.TYPE }, params, options)
	}

	async create(resource: DeliveryLeadTimeCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<DeliveryLeadTime> {
		return this.resources.create({ ...resource, type: DeliveryLeadTimes.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<DeliveryLeadTime> {
		return this.resources.retrieve<DeliveryLeadTime>({ type: DeliveryLeadTimes.TYPE, id }, params, options)
	}

	async update(resource: DeliveryLeadTimeUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<DeliveryLeadTime> {
		return this.resources.update({ ...resource, type: DeliveryLeadTimes.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: DeliveryLeadTimes.TYPE, id }, options)
	}

	async stock_location(deliveryLeadTimeId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockLocation> {
		return this.resources.fetch<StockLocation>({ type: 'stock_locations' }, `delivery_lead_times/${deliveryLeadTimeId}/stock_location`, params, options) as unknown as StockLocation
	}

	async shipping_method(deliveryLeadTimeId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingMethod> {
		return this.resources.fetch<ShippingMethod>({ type: 'shipping_methods' }, `delivery_lead_times/${deliveryLeadTimeId}/shipping_method`, params, options) as unknown as ShippingMethod
	}

	async attachments(deliveryLeadTimeId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `delivery_lead_times/${deliveryLeadTimeId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isDeliveryLeadTime(resource: any): resource is DeliveryLeadTime {
		return resource.type && (resource.type === DeliveryLeadTimes.TYPE)
	}


	relationship(id: string | ResourceId | null): DeliveryLeadTimeRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: DeliveryLeadTimes.TYPE } : { id: id.id, type: DeliveryLeadTimes.TYPE }
	}


	type(): string {
		return DeliveryLeadTimes.TYPE
	}

}


export default DeliveryLeadTimes

export { DeliveryLeadTime, DeliveryLeadTimeCreate, DeliveryLeadTimeUpdate }
