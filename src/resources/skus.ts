import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { ShippingCategory } from './shipping_categories'
import { Price } from './prices'
import { StockItem } from './stock_items'
import { DeliveryLeadTime } from './delivery_lead_times'
import { SkuOption } from './sku_options'
import { Attachment } from './attachments'


type SkuRel = ResourceRel & { type: typeof Skus.TYPE }
type ShippingCategoryRel = ResourceRel & { type: 'shipping_categories' }


interface Sku extends Resource {
	
	code?: string
	name?: string
	description?: string
	image_url?: string
	pieces_per_pack?: number
	weight?: number
	unit_of_weight?: string
	hs_tariff_number?: string
	do_not_ship?: boolean
	do_not_track?: boolean
	inventory?: object

	shipping_category?: ShippingCategory
	prices?: Price[]
	stock_items?: StockItem[]
	delivery_lead_times?: DeliveryLeadTime[]
	sku_options?: SkuOption[]
	attachments?: Attachment[]

}


interface SkuCreate extends ResourceCreate {
	
	code: string
	name: string
	description?: string
	image_url?: string
	pieces_per_pack?: number
	weight?: number
	unit_of_weight?: string
	hs_tariff_number?: string
	do_not_ship?: boolean
	do_not_track?: boolean

	shipping_category: ShippingCategoryRel

}


interface SkuUpdate extends ResourceUpdate {
	
	code?: string
	name?: string
	description?: string
	image_url?: string
	pieces_per_pack?: number
	weight?: number
	unit_of_weight?: string
	hs_tariff_number?: string
	do_not_ship?: boolean
	do_not_track?: boolean

	shipping_category?: ShippingCategoryRel

}


class Skus extends ApiResource {

	static readonly TYPE: 'skus' = 'skus'
	// static readonly PATH = 'skus'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Sku>> {
		return this.resources.list({ type: Skus.TYPE }, params, options)
	}

	async create(resource: SkuCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Sku> {
		return this.resources.create({ ...resource, type: Skus.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Sku> {
		return this.resources.retrieve<Sku>({ type: Skus.TYPE, id }, params, options)
	}

	async update(resource: SkuUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Sku> {
		return this.resources.update({ ...resource, type: Skus.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: Skus.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isSku(resource: any): resource is Sku {
		return resource.type && (resource.type === Skus.TYPE)
	}


	relationship(id: string | ResourceId | null): SkuRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: Skus.TYPE } : { id: id.id, type: Skus.TYPE }
	}


	type(): string {
		return Skus.TYPE
	}

}


export default Skus

export { Sku, SkuCreate, SkuUpdate }
