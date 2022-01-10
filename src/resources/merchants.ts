import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ListResponse } from '../resource'
import { /* QueryBuilderRetrieve, QueryBuilderList, */QueryParamsList, QueryParamsRetrieve } from '../query'

import { Address } from './addresses'
import { Attachment } from './attachments'


type MerchantRel = ResourceId & { type: typeof Merchants.TYPE }
type AddressRel = ResourceId & { type: 'addresses' }


interface Merchant extends Resource {
	
	name?: string

	address?: Address
	attachments?: Attachment[]

}


interface MerchantCreate extends ResourceCreate {
	
	name: string

	address: AddressRel

}


interface MerchantUpdate extends ResourceUpdate {
	
	name?: string

	address?: AddressRel

}


class Merchants extends ApiResource {

	static readonly TYPE: 'merchants' = 'merchants'
	// static readonly PATH = 'merchants'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Merchant>> {
		return this.resources.list({ type: Merchants.TYPE }, params, options)
	}

	async create(resource: MerchantCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Merchant> {
		return this.resources.create({ ...resource, type: Merchants.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Merchant> {
		return this.resources.retrieve<Merchant>({ type: Merchants.TYPE, id }, params, options)
	}

	async update(resource: MerchantUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Merchant> {
		return this.resources.update({ ...resource, type: Merchants.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: Merchants.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isMerchant(resource: any): resource is Merchant {
		return resource.type && (resource.type === Merchants.TYPE)
	}


	relationship(id: string | ResourceId): MerchantRel {
		return (typeof id === 'string') ? { id, type: Merchants.TYPE } : { id: id.id, type: Merchants.TYPE }
	}


	type(): string {
		return Merchants.TYPE
	}

}


export default Merchants

export { Merchant, MerchantCreate, MerchantUpdate }
