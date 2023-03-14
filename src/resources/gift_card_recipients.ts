import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { Customer, CustomerType } from './customers'
import type { Attachment } from './attachments'


type GiftCardRecipientType = 'gift_card_recipients'
type GiftCardRecipientRel = ResourceRel & { type: GiftCardRecipientType }
type CustomerRel = ResourceRel & { type: CustomerType }


interface GiftCardRecipient extends Resource {
	
	readonly type: GiftCardRecipientType

	email: string
	first_name?: string
	last_name?: string

	customer?: Customer
	attachments?: Attachment[]

}


interface GiftCardRecipientCreate extends ResourceCreate {
	
	email: string
	first_name?: string
	last_name?: string

	customer?: CustomerRel

}


interface GiftCardRecipientUpdate extends ResourceUpdate {
	
	email: string
	first_name?: string
	last_name?: string

	customer?: CustomerRel

}


class GiftCardRecipients extends ApiResource<GiftCardRecipient> {

	static readonly TYPE: GiftCardRecipientType = 'gift_card_recipients' as const
	// static readonly PATH = 'gift_card_recipients'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<GiftCardRecipient>> {
		return this.resources.list<GiftCardRecipient>({ type: GiftCardRecipients.TYPE }, params, options)
	}

	async create(resource: GiftCardRecipientCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<GiftCardRecipient> {
		return this.resources.create<GiftCardRecipientCreate, GiftCardRecipient>({ ...resource, type: GiftCardRecipients.TYPE }, params, options)
	}

	async update(resource: GiftCardRecipientUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<GiftCardRecipient> {
		return this.resources.update<GiftCardRecipientUpdate, GiftCardRecipient>({ ...resource, type: GiftCardRecipients.TYPE }, params, options)
	}

	async delete(id: string | ResourceId, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete((typeof id === 'string')? { id, type: GiftCardRecipients.TYPE } : id, options)
	}

	async customer(giftCardRecipientId: string | GiftCardRecipient, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Customer> {
		const _giftCardRecipientId = (giftCardRecipientId as GiftCardRecipient).id || giftCardRecipientId as string
		return this.resources.fetch<Customer>({ type: 'customers' }, `gift_card_recipients/${_giftCardRecipientId}/customer`, params, options) as unknown as Customer
	}

	async attachments(giftCardRecipientId: string | GiftCardRecipient, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		const _giftCardRecipientId = (giftCardRecipientId as GiftCardRecipient).id || giftCardRecipientId as string
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `gift_card_recipients/${_giftCardRecipientId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	isGiftCardRecipient(resource: any): resource is GiftCardRecipient {
		return resource.type && (resource.type === GiftCardRecipients.TYPE)
	}


	relationship(id: string | ResourceId | null): GiftCardRecipientRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: GiftCardRecipients.TYPE } : { id: id.id, type: GiftCardRecipients.TYPE }
	}


	type(): GiftCardRecipientType {
		return GiftCardRecipients.TYPE
	}

}


export default GiftCardRecipients

export type { GiftCardRecipient, GiftCardRecipientCreate, GiftCardRecipientUpdate, GiftCardRecipientType }
