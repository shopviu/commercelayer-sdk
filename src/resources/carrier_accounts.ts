import { ApiResource, Resource, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { Market } from './markets'
import type { Attachment } from './attachments'


type CarrierAccountType = 'carrier_accounts'
type CarrierAccountRel = ResourceRel & { type: CarrierAccountType }


interface CarrierAccount extends Resource {
	
	readonly type: CarrierAccountType

	name?: string
	easypost_type?: string
	easypost_id?: string

	market?: Market
	attachments?: Attachment[]

}


class CarrierAccounts extends ApiResource<CarrierAccount> {

	static readonly TYPE: CarrierAccountType = 'carrier_accounts' as const

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<CarrierAccount>> {
		return this.resources.list<CarrierAccount>({ type: CarrierAccounts.TYPE }, params, options)
	}

	async market(carrierAccountId: string | CarrierAccount, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		const _carrierAccountId = (carrierAccountId as CarrierAccount).id || carrierAccountId as string
		return this.resources.fetch<Market>({ type: 'markets' }, `carrier_accounts/${_carrierAccountId}/market`, params, options) as unknown as Market
	}

	async attachments(carrierAccountId: string | CarrierAccount, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		const _carrierAccountId = (carrierAccountId as CarrierAccount).id || carrierAccountId as string
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `carrier_accounts/${_carrierAccountId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	isCarrierAccount(resource: any): resource is CarrierAccount {
		return resource.type && (resource.type === CarrierAccounts.TYPE)
	}


	relationship(id: string | ResourceId | null): CarrierAccountRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: CarrierAccounts.TYPE } : { id: id.id, type: CarrierAccounts.TYPE }
	}


	type(): CarrierAccountType {
		return CarrierAccounts.TYPE
	}

}


export default CarrierAccounts

export type { CarrierAccount, CarrierAccountType }
