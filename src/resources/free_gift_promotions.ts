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


type FreeGiftPromotionRel = ResourceRel & { type: typeof FreeGiftPromotions.TYPE }
type MarketRel = ResourceRel & { type: 'markets' }
type PromotionRuleRel = ResourceRel & { type: 'promotion_rules' }
type OrderAmountPromotionRuleRel = ResourceRel & { type: 'order_amount_promotion_rules' }
type SkuListPromotionRuleRel = ResourceRel & { type: 'sku_list_promotion_rules' }
type CouponCodesPromotionRuleRel = ResourceRel & { type: 'coupon_codes_promotion_rules' }
type SkuListRel = ResourceRel & { type: 'sku_lists' }


interface FreeGiftPromotion extends Resource {
	
	name?: string
	currency_code?: string
	starts_at?: string
	expires_at?: string
	total_usage_limit?: number
	total_usage_count?: number
	active?: boolean
	max_quantity?: number

	market?: Market
	promotion_rules?: PromotionRule[]
	order_amount_promotion_rule?: OrderAmountPromotionRule
	sku_list_promotion_rule?: SkuListPromotionRule
	coupon_codes_promotion_rule?: CouponCodesPromotionRule
	attachments?: Attachment[]
	sku_list?: SkuList
	skus?: Sku[]

}


interface FreeGiftPromotionCreate extends ResourceCreate {
	
	name: string
	currency_code?: string
	starts_at: string
	expires_at: string
	total_usage_limit: number
	max_quantity?: number

	market?: MarketRel
	promotion_rules?: PromotionRuleRel[]
	order_amount_promotion_rule?: OrderAmountPromotionRuleRel
	sku_list_promotion_rule?: SkuListPromotionRuleRel
	coupon_codes_promotion_rule?: CouponCodesPromotionRuleRel
	sku_list: SkuListRel

}


interface FreeGiftPromotionUpdate extends ResourceUpdate {
	
	name?: string
	currency_code?: string
	starts_at?: string
	expires_at?: string
	total_usage_limit?: number
	max_quantity?: number

	market?: MarketRel
	promotion_rules?: PromotionRuleRel[]
	order_amount_promotion_rule?: OrderAmountPromotionRuleRel
	sku_list_promotion_rule?: SkuListPromotionRuleRel
	coupon_codes_promotion_rule?: CouponCodesPromotionRuleRel
	sku_list?: SkuListRel

}


class FreeGiftPromotions extends ApiResource {

	static readonly TYPE: 'free_gift_promotions' = 'free_gift_promotions'
	// static readonly PATH = 'free_gift_promotions'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<FreeGiftPromotion>> {
		return this.resources.list<FreeGiftPromotion>({ type: FreeGiftPromotions.TYPE }, params, options)
	}

	async create(resource: FreeGiftPromotionCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<FreeGiftPromotion> {
		return this.resources.create({ ...resource, type: FreeGiftPromotions.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<FreeGiftPromotion> {
		return this.resources.retrieve<FreeGiftPromotion>({ type: FreeGiftPromotions.TYPE, id }, params, options)
	}

	async update(resource: FreeGiftPromotionUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<FreeGiftPromotion> {
		return this.resources.update({ ...resource, type: FreeGiftPromotions.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: FreeGiftPromotions.TYPE, id }, options)
	}

	async market(freeGiftPromotionId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.fetch<Market>({ type: 'markets' }, `free_gift_promotions/${freeGiftPromotionId}/market`, params, options) as unknown as Market
	}

	async order_amount_promotion_rule(freeGiftPromotionId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<OrderAmountPromotionRule> {
		return this.resources.fetch<OrderAmountPromotionRule>({ type: 'order_amount_promotion_rules' }, `free_gift_promotions/${freeGiftPromotionId}/order_amount_promotion_rule`, params, options) as unknown as OrderAmountPromotionRule
	}

	async sku_list_promotion_rule(freeGiftPromotionId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<SkuListPromotionRule> {
		return this.resources.fetch<SkuListPromotionRule>({ type: 'sku_list_promotion_rules' }, `free_gift_promotions/${freeGiftPromotionId}/sku_list_promotion_rule`, params, options) as unknown as SkuListPromotionRule
	}

	async coupon_codes_promotion_rule(freeGiftPromotionId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<CouponCodesPromotionRule> {
		return this.resources.fetch<CouponCodesPromotionRule>({ type: 'coupon_codes_promotion_rules' }, `free_gift_promotions/${freeGiftPromotionId}/coupon_codes_promotion_rule`, params, options) as unknown as CouponCodesPromotionRule
	}

	async attachments(freeGiftPromotionId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `free_gift_promotions/${freeGiftPromotionId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}

	async sku_list(freeGiftPromotionId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<SkuList> {
		return this.resources.fetch<SkuList>({ type: 'sku_lists' }, `free_gift_promotions/${freeGiftPromotionId}/sku_list`, params, options) as unknown as SkuList
	}

	async skus(freeGiftPromotionId: string, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Sku>> {
		return this.resources.fetch<Sku>({ type: 'skus' }, `free_gift_promotions/${freeGiftPromotionId}/skus`, params, options) as unknown as ListResponse<Sku>
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isFreeGiftPromotion(resource: any): resource is FreeGiftPromotion {
		return resource.type && (resource.type === FreeGiftPromotions.TYPE)
	}


	relationship(id: string | ResourceId | null): FreeGiftPromotionRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: FreeGiftPromotions.TYPE } : { id: id.id, type: FreeGiftPromotions.TYPE }
	}


	type(): string {
		return FreeGiftPromotions.TYPE
	}

}


export default FreeGiftPromotions

export { FreeGiftPromotion, FreeGiftPromotionCreate, FreeGiftPromotionUpdate }
