import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { Sku, SkuType } from './skus'
import type { StockLocation, StockLocationType } from './stock_locations'
import type { Shipment, ShipmentType } from './shipments'
import type { LineItem, LineItemType } from './line_items'
import type { Event } from './events'


type StockTransferType = 'stock_transfers'
type StockTransferRel = ResourceRel & { type: StockTransferType }
type SkuRel = ResourceRel & { type: SkuType }
type StockLocationRel = ResourceRel & { type: StockLocationType }
type ShipmentRel = ResourceRel & { type: ShipmentType }
type LineItemRel = ResourceRel & { type: LineItemType }


interface StockTransfer extends Resource {
	
	readonly type: StockTransferType

	sku_code?: string
	status?: 'draft' | 'upcoming' | 'picking' | 'in_transit' | 'completed' | 'cancelled'
	quantity: number
	completed_at?: string
	cancelled_at?: string

	sku?: Sku
	origin_stock_location?: StockLocation
	destination_stock_location?: StockLocation
	shipment?: Shipment
	line_item?: LineItem
	events?: Event[]

}


interface StockTransferCreate extends ResourceCreate {
	
	sku_code?: string
	quantity: number

	sku: SkuRel
	origin_stock_location: StockLocationRel
	destination_stock_location: StockLocationRel
	shipment?: ShipmentRel
	line_item?: LineItemRel

}


interface StockTransferUpdate extends ResourceUpdate {
	
	sku_code?: string
	_upcoming?: boolean
	_picking?: boolean
	_in_transit?: boolean
	_complete?: boolean
	_cancel?: boolean

	sku?: SkuRel
	origin_stock_location?: StockLocationRel
	destination_stock_location?: StockLocationRel

}


class StockTransfers extends ApiResource<StockTransfer> {

	static readonly TYPE: StockTransferType = 'stock_transfers' as const

	async create(resource: StockTransferCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockTransfer> {
		return this.resources.create<StockTransferCreate, StockTransfer>({ ...resource, type: StockTransfers.TYPE }, params, options)
	}

	async update(resource: StockTransferUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockTransfer> {
		return this.resources.update<StockTransferUpdate, StockTransfer>({ ...resource, type: StockTransfers.TYPE }, params, options)
	}

	async delete(id: string | ResourceId, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete((typeof id === 'string')? { id, type: StockTransfers.TYPE } : id, options)
	}

	async sku(stockTransferId: string | StockTransfer, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Sku> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<Sku>({ type: 'skus' }, `stock_transfers/${_stockTransferId}/sku`, params, options) as unknown as Sku
	}

	async origin_stock_location(stockTransferId: string | StockTransfer, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockLocation> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<StockLocation>({ type: 'stock_locations' }, `stock_transfers/${_stockTransferId}/origin_stock_location`, params, options) as unknown as StockLocation
	}

	async destination_stock_location(stockTransferId: string | StockTransfer, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<StockLocation> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<StockLocation>({ type: 'stock_locations' }, `stock_transfers/${_stockTransferId}/destination_stock_location`, params, options) as unknown as StockLocation
	}

	async shipment(stockTransferId: string | StockTransfer, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Shipment> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<Shipment>({ type: 'shipments' }, `stock_transfers/${_stockTransferId}/shipment`, params, options) as unknown as Shipment
	}

	async line_item(stockTransferId: string | StockTransfer, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<LineItem> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<LineItem>({ type: 'line_items' }, `stock_transfers/${_stockTransferId}/line_item`, params, options) as unknown as LineItem
	}

	async events(stockTransferId: string | StockTransfer, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Event>> {
		const _stockTransferId = (stockTransferId as StockTransfer).id || stockTransferId as string
		return this.resources.fetch<Event>({ type: 'events' }, `stock_transfers/${_stockTransferId}/events`, params, options) as unknown as ListResponse<Event>
	}


	isStockTransfer(resource: any): resource is StockTransfer {
		return resource.type && (resource.type === StockTransfers.TYPE)
	}


	relationship(id: string | ResourceId | null): StockTransferRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: StockTransfers.TYPE } : { id: id.id, type: StockTransfers.TYPE }
	}


	type(): StockTransferType {
		return StockTransfers.TYPE
	}

}


export default StockTransfers

export type { StockTransfer, StockTransferCreate, StockTransferUpdate, StockTransferType }
