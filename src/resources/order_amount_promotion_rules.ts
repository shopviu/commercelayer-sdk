import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { PercentageDiscountPromotion, PercentageDiscountPromotionType } from './percentage_discount_promotions'
import type { FreeShippingPromotion, FreeShippingPromotionType } from './free_shipping_promotions'
import type { FreeGiftPromotion, FreeGiftPromotionType } from './free_gift_promotions'
import type { FixedPricePromotion, FixedPricePromotionType } from './fixed_price_promotions'
import type { ExternalPromotion, ExternalPromotionType } from './external_promotions'
import type { FixedAmountPromotion, FixedAmountPromotionType } from './fixed_amount_promotions'


type OrderAmountPromotionRuleType = 'order_amount_promotion_rules'
type OrderAmountPromotionRuleRel = ResourceRel & { type: OrderAmountPromotionRuleType }
type PercentageDiscountPromotionRel = ResourceRel & { type: PercentageDiscountPromotionType }
type FreeShippingPromotionRel = ResourceRel & { type: FreeShippingPromotionType }
type FreeGiftPromotionRel = ResourceRel & { type: FreeGiftPromotionType }
type FixedPricePromotionRel = ResourceRel & { type: FixedPricePromotionType }
type ExternalPromotionRel = ResourceRel & { type: ExternalPromotionType }
type FixedAmountPromotionRel = ResourceRel & { type: FixedAmountPromotionType }


interface OrderAmountPromotionRule extends Resource {
	
	readonly type: OrderAmountPromotionRuleType

	order_amount_cents?: number
	order_amount_float?: number
	formatted_order_amount?: string

	promotion?: PercentageDiscountPromotion | FreeShippingPromotion | FreeGiftPromotion | FixedPricePromotion | ExternalPromotion | FixedAmountPromotion

}


interface OrderAmountPromotionRuleCreate extends ResourceCreate {
	
	order_amount_cents?: number

	promotion: PercentageDiscountPromotionRel | FreeShippingPromotionRel | FreeGiftPromotionRel | FixedPricePromotionRel | ExternalPromotionRel | FixedAmountPromotionRel

}


interface OrderAmountPromotionRuleUpdate extends ResourceUpdate {
	
	order_amount_cents?: number

	promotion?: PercentageDiscountPromotionRel | FreeShippingPromotionRel | FreeGiftPromotionRel | FixedPricePromotionRel | ExternalPromotionRel | FixedAmountPromotionRel

}


class OrderAmountPromotionRules extends ApiResource<OrderAmountPromotionRule> {

	static readonly TYPE: OrderAmountPromotionRuleType = 'order_amount_promotion_rules' as const
	// static readonly PATH = 'order_amount_promotion_rules'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<OrderAmountPromotionRule>> {
		return this.resources.list<OrderAmountPromotionRule>({ type: OrderAmountPromotionRules.TYPE }, params, options)
	}

	async create(resource: OrderAmountPromotionRuleCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<OrderAmountPromotionRule> {
		return this.resources.create<OrderAmountPromotionRuleCreate, OrderAmountPromotionRule>({ ...resource, type: OrderAmountPromotionRules.TYPE }, params, options)
	}

	async update(resource: OrderAmountPromotionRuleUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<OrderAmountPromotionRule> {
		return this.resources.update<OrderAmountPromotionRuleUpdate, OrderAmountPromotionRule>({ ...resource, type: OrderAmountPromotionRules.TYPE }, params, options)
	}

	async delete(id: string | ResourceId, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete((typeof id === 'string')? { id, type: OrderAmountPromotionRules.TYPE } : id, options)
	}


	isOrderAmountPromotionRule(resource: any): resource is OrderAmountPromotionRule {
		return resource.type && (resource.type === OrderAmountPromotionRules.TYPE)
	}


	relationship(id: string | ResourceId | null): OrderAmountPromotionRuleRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: OrderAmountPromotionRules.TYPE } : { id: id.id, type: OrderAmountPromotionRules.TYPE }
	}


	type(): OrderAmountPromotionRuleType {
		return OrderAmountPromotionRules.TYPE
	}

}


export default OrderAmountPromotionRules

export type { OrderAmountPromotionRule, OrderAmountPromotionRuleCreate, OrderAmountPromotionRuleUpdate, OrderAmountPromotionRuleType }
