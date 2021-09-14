/**
 * ©2021 Commerce Layer Inc.
 * Source code generated automatically by SDK codegen from OpenAPI schema 2.3.0
 * Generation date: 14-09-2021
 **/

import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ListResponse } from '../resource'
import { /* QueryBuilderRetrieve, QueryBuilderList, */QueryParamsList, QueryParamsRetrieve } from '../query'

import { Market } from './markets'
import { Customer } from './customers'
import { ShippingAddress } from './shipping_addresses'
import { BillingAddress } from './billing_addresses'
import { AvailablePaymentMethod } from './available_payment_methods'
import { AvailableCustomerPaymentSource } from './available_customer_payment_sources'
import { PaymentMethod } from './payment_methods'
import { CreditCard } from './credit_cards'
import { LineItem } from './line_items'
import { Shipment } from './shipments'
import { Transaction } from './transactions'
import { Authorization } from './authorizations'
import { Capture } from './captures'
import { Void } from './voids'
import { Refund } from './refunds'
import { Attachment } from './attachments'


type OrderRel = ResourceId & { type: typeof Orders.TYPE }
type MarketRel = ResourceId & { type: 'markets' }
type CustomerRel = ResourceId & { type: 'customers' }
type ShippingAddressRel = ResourceId & { type: 'shipping_addresses' }
type BillingAddressRel = ResourceId & { type: 'billing_addresses' }
type PaymentMethodRel = ResourceId & { type: 'payment_methods' }
type CreditCardRel = ResourceId & { type: 'credit_cards' }


interface Order extends Resource {
	
	number?: number
	status?: string
	payment_status?: string
	fulfillment_status?: string
	guest?: boolean
	editable?: boolean
	customer_email?: string
	language_code?: string
	currency_code?: string
	tax_included?: boolean
	tax_rate?: number
	freight_taxable?: boolean
	requires_billing_info?: boolean
	country_code?: string
	shipping_country_code_lock?: string
	coupon_code?: string
	gift_card_code?: string
	gift_card_or_coupon_code?: string
	subtotal_amount_cents?: number
	subtotal_amount_float?: number
	formatted_subtotal_amount?: string
	shipping_amount_cents?: number
	shipping_amount_float?: number
	formatted_shipping_amount?: string
	payment_method_amount_cents?: number
	payment_method_amount_float?: number
	formatted_payment_method_amount?: string
	discount_amount_cents?: number
	discount_amount_float?: number
	formatted_discount_amount?: string
	adjustment_amount_cents?: number
	adjustment_amount_float?: number
	formatted_adjustment_amount?: string
	gift_card_amount_cents?: number
	gift_card_amount_float?: number
	formatted_gift_card_amount?: string
	total_tax_amount_cents?: number
	total_tax_amount_float?: number
	formatted_total_tax_amount?: string
	subtotal_tax_amount_cents?: number
	subtotal_tax_amount_float?: number
	formatted_subtotal_tax_amount?: string
	shipping_tax_amount_cents?: number
	shipping_tax_amount_float?: number
	formatted_shipping_tax_amount?: string
	payment_method_tax_amount_cents?: number
	payment_method_tax_amount_float?: number
	formatted_payment_method_tax_amount?: string
	adjustment_tax_amount_cents?: number
	adjustment_tax_amount_float?: number
	formatted_adjustment_tax_amount?: string
	total_amount_cents?: number
	total_amount_float?: number
	formatted_total_amount?: string
	total_taxable_amount_cents?: number
	total_taxable_amount_float?: number
	formatted_total_taxable_amount?: string
	subtotal_taxable_amount_cents?: number
	subtotal_taxable_amount_float?: number
	formatted_subtotal_taxable_amount?: string
	shipping_taxable_amount_cents?: number
	shipping_taxable_amount_float?: number
	formatted_shipping_taxable_amount?: string
	payment_method_taxable_amount_cents?: number
	payment_method_taxable_amount_float?: number
	formatted_payment_method_taxable_amount?: string
	adjustment_taxable_amount_cents?: number
	adjustment_taxable_amount_float?: number
	formatted_adjustment_taxable_amount?: string
	total_amount_with_taxes_cents?: number
	total_amount_with_taxes_float?: number
	formatted_total_amount_with_taxes?: string
	fees_amount_cents?: number
	fees_amount_float?: number
	formatted_fees_amount?: string
	duty_amount_cents?: number
	duty_amount_float?: number
	formatted_duty_amount?: string
	skus_count?: number
	line_item_options_count?: number
	shipments_count?: number
	payment_source_details?: object
	token?: string
	cart_url?: string
	return_url?: string
	terms_url?: string
	privacy_url?: string
	checkout_url?: string
	placed_at?: string
	approved_at?: string
	cancelled_at?: string
	payment_updated_at?: string
	fulfillment_updated_at?: string
	archived_at?: string
	expires_at?: string

	market?: Market
	customer?: Customer
	shipping_address?: ShippingAddress
	billing_address?: BillingAddress
	available_payment_methods?: AvailablePaymentMethod[]
	available_customer_payment_sources?: AvailableCustomerPaymentSource[]
	payment_method?: PaymentMethod
	payment_source?: CreditCard
	line_items?: LineItem[]
	shipments?: Shipment[]
	transactions?: Transaction[]
	authorizations?: Authorization[]
	captures?: Capture[]
	voids?: Void[]
	refunds?: Refund[]
	attachments?: Attachment[]

}


interface OrderCreate extends ResourceCreate {
	
	guest?: boolean
	customer_email?: string
	customer_password?: string
	language_code?: string
	shipping_country_code_lock?: string
	coupon_code?: string
	gift_card_code?: string
	gift_card_or_coupon_code?: string
	cart_url?: string
	return_url?: string
	terms_url?: string
	privacy_url?: string

	market?: MarketRel
	customer?: CustomerRel
	shipping_address?: ShippingAddressRel
	billing_address?: BillingAddressRel
	payment_method?: PaymentMethodRel
	payment_source?: CreditCardRel

}


interface OrderUpdate extends ResourceUpdate {
	
	guest?: boolean
	customer_email?: string
	customer_password?: string
	language_code?: string
	shipping_country_code_lock?: string
	coupon_code?: string
	gift_card_code?: string
	gift_card_or_coupon_code?: string
	cart_url?: string
	return_url?: string
	terms_url?: string
	privacy_url?: string
	_archive?: boolean
	_unarchive?: boolean
	_place?: boolean
	_cancel?: boolean
	_approve?: boolean
	_approve_and_capture?: boolean
	_authorize?: boolean
	_authorization_amount_cents?: number
	_capture?: boolean
	_refund?: boolean
	_update_taxes?: boolean
	_billing_address_clone_id?: string
	_shipping_address_clone_id?: string
	_customer_payment_source_id?: string
	_shipping_address_same_as_billing?: boolean
	_billing_address_same_as_shipping?: boolean
	_save_payment_source_to_customer_wallet?: boolean
	_save_shipping_address_to_customer_address_book?: boolean
	_save_billing_address_to_customer_address_book?: boolean
	_refresh?: boolean

	market?: MarketRel
	customer?: CustomerRel
	shipping_address?: ShippingAddressRel
	billing_address?: BillingAddressRel
	payment_method?: PaymentMethodRel
	payment_source?: CreditCardRel

}


class Orders extends ApiResource {

	static readonly TYPE: 'orders' = 'orders'
	// static readonly PATH = 'orders'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Order>> {
		return this.resources.list({ type: Orders.TYPE }, params, options)
	}

	async create(resource: OrderCreate, options?: ResourcesConfig): Promise<Order> {
		return this.resources.create(Object.assign(resource, { type: Orders.TYPE }) , options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Order> {
		return this.resources.retrieve<Order>({ type: Orders.TYPE, id }, params, options)
	}

	async update(resource: OrderUpdate, options?: ResourcesConfig): Promise<Order> {
		return this.resources.update({ ...resource, type: Orders.TYPE }, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		this.resources.delete({ type: Orders.TYPE, id }, options)
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isOrder(resource: any): resource is Order {
		return resource.type && (resource.type === Orders.TYPE)
	}

	/*
	filter(): QueryBuilderRetrieve {
		return new QueryBuilderRetrieve(Orders.TYPE)
	}
	*/

	/*
	filterList(): QueryBuilderList {
		return new QueryBuilderList(Orders.TYPE)
	}
	*/

	relationship(id: string | ResourceId): OrderRel {
		return (typeof id === 'string') ? { id, type: Orders.TYPE } : {id: id.id, type: Orders.TYPE }
	}

}


export default Orders

export { Order, OrderCreate, OrderUpdate }
