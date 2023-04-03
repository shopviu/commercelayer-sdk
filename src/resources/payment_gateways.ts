import { ApiResource } from '../resource'
import type { Resource, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsList } from '../query'

import type { PaymentMethod } from './payment_methods'


type PaymentGatewayType = 'payment_gateways'
type PaymentGatewayRel = ResourceRel & { type: PaymentGatewayType }


interface PaymentGateway extends Resource {
	
	readonly type: PaymentGatewayType

	name: string

	payment_methods?: PaymentMethod[] | null

}


class PaymentGateways extends ApiResource<PaymentGateway> {

	static readonly TYPE: PaymentGatewayType = 'payment_gateways' as const

	async payment_methods(paymentGatewayId: string | PaymentGateway, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<PaymentMethod>> {
		const _paymentGatewayId = (paymentGatewayId as PaymentGateway).id || paymentGatewayId as string
		return this.resources.fetch<PaymentMethod>({ type: 'payment_methods' }, `payment_gateways/${_paymentGatewayId}/payment_methods`, params, options) as unknown as ListResponse<PaymentMethod>
	}


	isPaymentGateway(resource: any): resource is PaymentGateway {
		return resource.type && (resource.type === PaymentGateways.TYPE)
	}


	relationship(id: string | ResourceId | null): PaymentGatewayRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: PaymentGateways.TYPE } : { id: id.id, type: PaymentGateways.TYPE }
	}


	type(): PaymentGatewayType {
		return PaymentGateways.TYPE
	}

}


export default PaymentGateways

export type { PaymentGateway, PaymentGatewayType }
