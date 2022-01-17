import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Market } from './markets'
import { PromotionRule } from './promotion_rules'
import { OrderAmountPromotionRule } from './order_amount_promotion_rules'
import { SkuListPromotionRule } from './sku_list_promotion_rules'
import { CouponCodesPromotionRule } from './coupon_codes_promotion_rules'
import { Attachment } from './attachments'
import { SkuList } from './sku_lists'
import { Sku } from './skus'


type PercentageDiscountPromotionRel = ResourceRel & { type: typeof PercentageDiscountPromotions.TYPE }
type MarketRel = ResourceRel & { type: 'markets' }
type PromotionRuleRel = ResourceRel & { type: 'promotion_rules' }
type OrderAmountPromotionRuleRel = ResourceRel & { type: 'order_amount_promotion_rules' }
type SkuListPromotionRuleRel = ResourceRel & { type: 'sku_list_promotion_rules' }
type CouponCodesPromotionRuleRel = ResourceRel & { type: 'coupon_codes_promotion_rules' }
type SkuListRel = ResourceRel & { type: 'sku_lists' }


interface PercentageDiscountPromotion extends Resource {
	
	name?: string
	currency_code?: string
	starts_at?: string
	expires_at?: string
	total_usage_limit?: number
	total_usage_count?: number
	active?: boolean
	percentage?: number

	market?: Market
	promotion_rules?: PromotionRule[]
	order_amount_promotion_rule?: OrderAmountPromotionRule
	sku_list_promotion_rule?: SkuListPromotionRule
	coupon_codes_promotion_rule?: CouponCodesPromotionRule
	attachments?: Attachment[]
	sku_list?: SkuList
	skus?: Sku[]

}


interface PercentageDiscountPromotionCreate extends ResourceCreate {
	
	name: string
	currency_code?: string
	starts_at: string
	expires_at: string
	total_usage_limit: number
	percentage: number

	market?: MarketRel
	promotion_rules?: PromotionRuleRel[]
	order_amount_promotion_rule?: OrderAmountPromotionRuleRel
	sku_list_promotion_rule?: SkuListPromotionRuleRel
	coupon_codes_promotion_rule?: CouponCodesPromotionRuleRel
	sku_list?: SkuListRel

}


interface PercentageDiscountPromotionUpdate extends ResourceUpdate {
	
	name?: string
	currency_code?: string
	starts_at?: string
	expires_at?: string
	total_usage_limit?: number
	percentage?: number

	market?: MarketRel
	promotion_rules?: PromotionRuleRel[]
	order_amount_promotion_rule?: OrderAmountPromotionRuleRel
	sku_list_promotion_rule?: SkuListPromotionRuleRel
	coupon_codes_promotion_rule?: CouponCodesPromotionRuleRel
	sku_list?: SkuListRel

}


class PercentageDiscountPromotions extends ApiResource {

	static readonly TYPE: 'percentage_discount_promotions' = 'percentage_discount_promotions'
	// static readonly PATH = 'percentage_discount_promotions'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<PercentageDiscountPromotion>> {
		return this.resources.list({ type: PercentageDiscountPromotions.TYPE }, params, options)
	}

	async create(resource: PercentageDiscountPromotionCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<PercentageDiscountPromotion> {
		return this.resources.create({ ...resource, type: PercentageDiscountPromotions.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<PercentageDiscountPromotion> {
		return this.resources.retrieve<PercentageDiscountPromotion>({ type: PercentageDiscountPromotions.TYPE, id }, params, options)
	}

	async update(resource: PercentageDiscountPromotionUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<PercentageDiscountPromotion> {
		return this.resources.update({ ...resource, type: PercentageDiscountPromotions.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: PercentageDiscountPromotions.TYPE, id }, options)
	}
	


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isPercentageDiscountPromotion(resource: any): resource is PercentageDiscountPromotion {
		return resource.type && (resource.type === PercentageDiscountPromotions.TYPE)
	}


	relationship(id: string | ResourceId | null): PercentageDiscountPromotionRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: PercentageDiscountPromotions.TYPE } : { id: id.id, type: PercentageDiscountPromotions.TYPE }
	}


	type(): string {
		return PercentageDiscountPromotions.TYPE
	}

}


export default PercentageDiscountPromotions

export { PercentageDiscountPromotion, PercentageDiscountPromotionCreate, PercentageDiscountPromotionUpdate }
