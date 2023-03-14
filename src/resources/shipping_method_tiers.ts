import { ApiResource, Resource, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { ShippingMethod } from './shipping_methods'
import type { Attachment } from './attachments'


type ShippingMethodTierType = 'shipping_method_tiers'
type ShippingMethodTierRel = ResourceRel & { type: ShippingMethodTierType }


interface ShippingMethodTier extends Resource {
	
	readonly type: ShippingMethodTierType

	name: string
	up_to?: number
	price_amount_cents: number
	price_amount_float?: number
	formatted_price_amount?: string

	shipping_method?: ShippingMethod
	attachments?: Attachment[]

}


class ShippingMethodTiers extends ApiResource<ShippingMethodTier> {

	static readonly TYPE: ShippingMethodTierType = 'shipping_method_tiers' as const
	// static readonly PATH = 'shipping_method_tiers'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<ShippingMethodTier>> {
		return this.resources.list<ShippingMethodTier>({ type: ShippingMethodTiers.TYPE }, params, options)
	}

	async shipping_method(shippingMethodTierId: string | ShippingMethodTier, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ShippingMethod> {
		const _shippingMethodTierId = (shippingMethodTierId as ShippingMethodTier).id || shippingMethodTierId as string
		return this.resources.fetch<ShippingMethod>({ type: 'shipping_methods' }, `shipping_method_tiers/${_shippingMethodTierId}/shipping_method`, params, options) as unknown as ShippingMethod
	}

	async attachments(shippingMethodTierId: string | ShippingMethodTier, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		const _shippingMethodTierId = (shippingMethodTierId as ShippingMethodTier).id || shippingMethodTierId as string
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `shipping_method_tiers/${_shippingMethodTierId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	isShippingMethodTier(resource: any): resource is ShippingMethodTier {
		return resource.type && (resource.type === ShippingMethodTiers.TYPE)
	}


	relationship(id: string | ResourceId | null): ShippingMethodTierRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: ShippingMethodTiers.TYPE } : { id: id.id, type: ShippingMethodTiers.TYPE }
	}


	type(): ShippingMethodTierType {
		return ShippingMethodTiers.TYPE
	}

}


export default ShippingMethodTiers

export type { ShippingMethodTier, ShippingMethodTierType }
