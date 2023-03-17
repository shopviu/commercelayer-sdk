import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsList, QueryParamsRetrieve } from '../query'

import type { PaymentMethod } from './payment_methods'
import type { AxervePayment } from './axerve_payments'


type AxerveGatewayRel = ResourceRel & { type: typeof AxerveGateways.TYPE }
type AxervePaymentRel = ResourceRel & { type: 'axerve_payments' }


interface AxerveGateway extends Resource {
	
	name?: string
	login?: string

	payment_methods?: PaymentMethod[]
	axerve_payments?: AxervePayment[]

}


interface AxerveGatewayCreate extends ResourceCreate {
	
	name: string
	login: string
	api_key: string

	axerve_payments?: AxervePaymentRel[]

}


interface AxerveGatewayUpdate extends ResourceUpdate {
	
	name?: string
	login?: string
	api_key?: string

	axerve_payments?: AxervePaymentRel[]

}


class AxerveGateways extends ApiResource {

	static readonly TYPE: 'axerve_gateways' = 'axerve_gateways' as const
	// static readonly PATH = 'axerve_gateways'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<AxerveGateway>> {
		return this.resources.list<AxerveGateway>({ type: AxerveGateways.TYPE }, params, options)
	}

	async create(resource: AxerveGatewayCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AxerveGateway> {
		return this.resources.create<AxerveGatewayCreate, AxerveGateway>({ ...resource, type: AxerveGateways.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AxerveGateway> {
		return this.resources.retrieve<AxerveGateway>({ type: AxerveGateways.TYPE, id }, params, options)
	}

	async update(resource: AxerveGatewayUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<AxerveGateway> {
		return this.resources.update<AxerveGatewayUpdate, AxerveGateway>({ ...resource, type: AxerveGateways.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: AxerveGateways.TYPE, id }, options)
	}

	async payment_methods(axerveGatewayId: string | AxerveGateway, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<PaymentMethod>> {
		const _axerveGatewayId = (axerveGatewayId as AxerveGateway).id || axerveGatewayId as string
		return this.resources.fetch<PaymentMethod>({ type: 'payment_methods' }, `axerve_gateways/${_axerveGatewayId}/payment_methods`, params, options) as unknown as ListResponse<PaymentMethod>
	}

	async axerve_payments(axerveGatewayId: string | AxerveGateway, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<AxervePayment>> {
		const _axerveGatewayId = (axerveGatewayId as AxerveGateway).id || axerveGatewayId as string
		return this.resources.fetch<AxervePayment>({ type: 'axerve_payments' }, `axerve_gateways/${_axerveGatewayId}/axerve_payments`, params, options) as unknown as ListResponse<AxervePayment>
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isAxerveGateway(resource: any): resource is AxerveGateway {
		return resource.type && (resource.type === AxerveGateways.TYPE)
	}


	relationship(id: string | ResourceId | null): AxerveGatewayRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: AxerveGateways.TYPE } : { id: id.id, type: AxerveGateways.TYPE }
	}


	type(): string {
		return AxerveGateways.TYPE
	}

}


export default AxerveGateways

export { AxerveGateway, AxerveGatewayCreate, AxerveGatewayUpdate }