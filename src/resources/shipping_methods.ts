import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Market } from './markets'
import { ShippingZone } from './shipping_zones'
import { ShippingCategory } from './shipping_categories'
import { DeliveryLeadTime } from './delivery_lead_times'
import { Attachment } from './attachments'


type ShippingMethodRel = ResourceRel & { type: typeof ShippingMethods.TYPE }
type MarketRel = ResourceRel & { type: 'markets' }
type ShippingZoneRel = ResourceRel & { type: 'shipping_zones' }
type ShippingCategoryRel = ResourceRel & { type: 'shipping_categories' }


interface ShippingMethod extends Resource {
	
	name?: string
	currency_code?: string
	disabled_at?: string
	price_amount_cents?: number
	price_amount_float?: number
	formatted_price_amount?: string
	free_over_amount_cents?: number
	free_over_amount_float?: number
	formatted_free_over_amount?: string
	price_amount_for_shipment_cents?: number
	price_amount_for_shipment_float?: number
	formatted_price_amount_for_shipment?: string

	market?: Market
	shipping_zone?: ShippingZone
	shipping_category?: ShippingCategory
	delivery_lead_time_for_shipment?: DeliveryLeadTime
	attachments?: Attachment[]

}


interface ShippingMethodCreate extends ResourceCreate {
	
	name: string
	currency_code?: string
	price_amount_cents: number
	free_over_amount_cents?: number

	market?: MarketRel
	shipping_zone: ShippingZoneRel
	shipping_category: ShippingCategoryRel

}


interface ShippingMethodUpdate extends ResourceUpdate {
	
	name?: string
	currency_code?: string
	price_amount_cents?: number
	free_over_amount_cents?: number

	market?: MarketRel
	shipping_zone?: ShippingZoneRel
	shipping_category?: ShippingCategoryRel

}


class ShippingMethods extends ApiResource {

	static readonly TYPE: 'shipping_methods' = 'shipping_methods'
	// static readonly PATH = 'shipping_methods'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<ShippingMethod>> {
		return this.resources.list<ShippingMethod>({ type: ShippingMethods.TYPE }, params, options)
	}

	async create(resource: ShippingMethodCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingMethod> {
		return this.resources.create({ ...resource, type: ShippingMethods.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingMethod> {
		return this.resources.retrieve<ShippingMethod>({ type: ShippingMethods.TYPE, id }, params, options)
	}

	async update(resource: ShippingMethodUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingMethod> {
		return this.resources.update({ ...resource, type: ShippingMethods.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: ShippingMethods.TYPE, id }, options)
	}

	async market(shippingMethodId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.fetch<Market>({ type: 'markets' }, `shipping_methods/${shippingMethodId}/market`, params, options) as unknown as Market
	}

	async shipping_zone(shippingMethodId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingZone> {
		return this.resources.fetch<ShippingZone>({ type: 'shipping_zones' }, `shipping_methods/${shippingMethodId}/shipping_zone`, params, options) as unknown as ShippingZone
	}

	async shipping_category(shippingMethodId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingCategory> {
		return this.resources.fetch<ShippingCategory>({ type: 'shipping_categories' }, `shipping_methods/${shippingMethodId}/shipping_category`, params, options) as unknown as ShippingCategory
	}

	async delivery_lead_time_for_shipment(shippingMethodId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<DeliveryLeadTime> {
		return this.resources.fetch<DeliveryLeadTime>({ type: 'delivery_lead_times' }, `shipping_methods/${shippingMethodId}/delivery_lead_time_for_shipment`, params, options) as unknown as DeliveryLeadTime
	}

	async attachments(shippingMethodId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `shipping_methods/${shippingMethodId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isShippingMethod(resource: any): resource is ShippingMethod {
		return resource.type && (resource.type === ShippingMethods.TYPE)
	}


	relationship(id: string | ResourceId | null): ShippingMethodRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: ShippingMethods.TYPE } : { id: id.id, type: ShippingMethods.TYPE }
	}


	type(): string {
		return ShippingMethods.TYPE
	}

}


export default ShippingMethods

export { ShippingMethod, ShippingMethodCreate, ShippingMethodUpdate }
