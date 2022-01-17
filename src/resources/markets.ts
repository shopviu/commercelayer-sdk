import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Merchant } from './merchants'
import { PriceList } from './price_lists'
import { InventoryModel } from './inventory_models'
import { TaxCalculator } from './tax_calculators'
import { CustomerGroup } from './customer_groups'
import { Attachment } from './attachments'


type MarketRel = ResourceRel & { type: typeof Markets.TYPE }
type MerchantRel = ResourceRel & { type: 'merchants' }
type PriceListRel = ResourceRel & { type: 'price_lists' }
type InventoryModelRel = ResourceRel & { type: 'inventory_models' }
type TaxCalculatorRel = ResourceRel & { type: 'tax_calculators' }
type CustomerGroupRel = ResourceRel & { type: 'customer_groups' }


interface Market extends Resource {
	
	number?: number
	name?: string
	facebook_pixel_id?: string
	checkout_url?: string
	external_prices_url?: string
	private?: boolean

	merchant?: Merchant
	price_list?: PriceList
	inventory_model?: InventoryModel
	tax_calculator?: TaxCalculator
	customer_group?: CustomerGroup
	attachments?: Attachment[]

}


interface MarketCreate extends ResourceCreate {
	
	name: string
	facebook_pixel_id?: string
	checkout_url?: string
	external_prices_url?: string

	merchant: MerchantRel
	price_list: PriceListRel
	inventory_model: InventoryModelRel
	tax_calculator?: TaxCalculatorRel
	customer_group?: CustomerGroupRel

}


interface MarketUpdate extends ResourceUpdate {
	
	name?: string
	facebook_pixel_id?: string
	checkout_url?: string
	external_prices_url?: string

	merchant?: MerchantRel
	price_list?: PriceListRel
	inventory_model?: InventoryModelRel
	tax_calculator?: TaxCalculatorRel
	customer_group?: CustomerGroupRel

}


class Markets extends ApiResource {

	static readonly TYPE: 'markets' = 'markets'
	// static readonly PATH = 'markets'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Market>> {
		return this.resources.list({ type: Markets.TYPE }, params, options)
	}

	async create(resource: MarketCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.create({ ...resource, type: Markets.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.retrieve<Market>({ type: Markets.TYPE, id }, params, options)
	}

	async update(resource: MarketUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.update({ ...resource, type: Markets.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: Markets.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isMarket(resource: any): resource is Market {
		return resource.type && (resource.type === Markets.TYPE)
	}


	relationship(id: string | ResourceId | null): MarketRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: Markets.TYPE } : { id: id.id, type: Markets.TYPE }
	}


	type(): string {
		return Markets.TYPE
	}

}


export default Markets

export { Market, MarketCreate, MarketUpdate }
