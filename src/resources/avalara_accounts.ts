import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ListResponse } from '../resource'
import { /* QueryBuilderRetrieve, QueryBuilderList, */QueryParamsList, QueryParamsRetrieve } from '../query'

import { TaxCategory } from './tax_categories'
import { Market } from './markets'
import { Attachment } from './attachments'


type AvalaraAccountRel = ResourceId & { type: typeof AvalaraAccounts.TYPE }
type TaxCategoryRel = ResourceId & { type: 'tax_categories' }


interface AvalaraAccount extends Resource {
	
	name?: string
	username?: string
	company_code?: string
	ddp?: string

	tax_categories?: TaxCategory[]
	markets?: Market[]
	attachments?: Attachment[]

}


interface AvalaraAccountCreate extends ResourceCreate {
	
	name: string
	username: string
	password: string
	company_code: string
	ddp?: string

	tax_categories?: TaxCategoryRel[]

}


interface AvalaraAccountUpdate extends ResourceUpdate {
	
	name?: string
	username?: string
	password?: string
	company_code?: string
	ddp?: string

	tax_categories?: TaxCategoryRel[]

}


class AvalaraAccounts extends ApiResource {

	static readonly TYPE: 'avalara_accounts' = 'avalara_accounts'
	// static readonly PATH = 'avalara_accounts'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<AvalaraAccount>> {
		return this.resources.list({ type: AvalaraAccounts.TYPE }, params, options)
	}

	async create(resource: AvalaraAccountCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AvalaraAccount> {
		return this.resources.create({ ...resource, type: AvalaraAccounts.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AvalaraAccount> {
		return this.resources.retrieve<AvalaraAccount>({ type: AvalaraAccounts.TYPE, id }, params, options)
	}

	async update(resource: AvalaraAccountUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AvalaraAccount> {
		return this.resources.update({ ...resource, type: AvalaraAccounts.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: AvalaraAccounts.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isAvalaraAccount(resource: any): resource is AvalaraAccount {
		return resource.type && (resource.type === AvalaraAccounts.TYPE)
	}


	relationship(id: string | ResourceId): AvalaraAccountRel {
		return (typeof id === 'string') ? { id, type: AvalaraAccounts.TYPE } : { id: id.id, type: AvalaraAccounts.TYPE }
	}


	type(): string {
		return AvalaraAccounts.TYPE
	}

}


export default AvalaraAccounts

export { AvalaraAccount, AvalaraAccountCreate, AvalaraAccountUpdate }
