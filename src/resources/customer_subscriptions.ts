import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Customer } from './customers'


type CustomerSubscriptionRel = ResourceRel & { type: typeof CustomerSubscriptions.TYPE }


interface CustomerSubscription extends Resource {
	
	customer_email?: string

	customer?: Customer

}


interface CustomerSubscriptionCreate extends ResourceCreate {
	
	customer_email: string
	
}


type CustomerSubscriptionUpdate = ResourceUpdate


class CustomerSubscriptions extends ApiResource {

	static readonly TYPE: 'customer_subscriptions' = 'customer_subscriptions'
	// static readonly PATH = 'customer_subscriptions'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<CustomerSubscription>> {
		return this.resources.list({ type: CustomerSubscriptions.TYPE }, params, options)
	}

	async create(resource: CustomerSubscriptionCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<CustomerSubscription> {
		return this.resources.create({ ...resource, type: CustomerSubscriptions.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<CustomerSubscription> {
		return this.resources.retrieve<CustomerSubscription>({ type: CustomerSubscriptions.TYPE, id }, params, options)
	}

	async update(resource: CustomerSubscriptionUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<CustomerSubscription> {
		return this.resources.update({ ...resource, type: CustomerSubscriptions.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: CustomerSubscriptions.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isCustomerSubscription(resource: any): resource is CustomerSubscription {
		return resource.type && (resource.type === CustomerSubscriptions.TYPE)
	}


	relationship(id: string | ResourceId | null): CustomerSubscriptionRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: CustomerSubscriptions.TYPE } : { id: id.id, type: CustomerSubscriptions.TYPE }
	}


	type(): string {
		return CustomerSubscriptions.TYPE
	}

}


export default CustomerSubscriptions

export { CustomerSubscription, CustomerSubscriptionCreate, CustomerSubscriptionUpdate }
