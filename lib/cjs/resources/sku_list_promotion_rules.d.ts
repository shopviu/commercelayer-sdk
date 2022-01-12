import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ListResponse } from '../resource';
import { /* QueryBuilderRetrieve, QueryBuilderList, */ QueryParamsList, QueryParamsRetrieve } from '../query';
import { PercentageDiscountPromotion } from './percentage_discount_promotions';
import { FreeShippingPromotion } from './free_shipping_promotions';
import { FixedAmountPromotion } from './fixed_amount_promotions';
import { FreeGiftPromotion } from './free_gift_promotions';
import { FixedPricePromotion } from './fixed_price_promotions';
import { ExternalPromotion } from './external_promotions';
import { SkuList } from './sku_lists';
import { Sku } from './skus';
declare type SkuListPromotionRuleRel = ResourceId & {
    type: typeof SkuListPromotionRules.TYPE;
};
declare type PercentageDiscountPromotionRel = ResourceId & {
    type: 'percentage_discount_promotions';
};
declare type FreeShippingPromotionRel = ResourceId & {
    type: 'free_shipping_promotions';
};
declare type FixedAmountPromotionRel = ResourceId & {
    type: 'fixed_amount_promotions';
};
declare type FreeGiftPromotionRel = ResourceId & {
    type: 'free_gift_promotions';
};
declare type FixedPricePromotionRel = ResourceId & {
    type: 'fixed_price_promotions';
};
declare type ExternalPromotionRel = ResourceId & {
    type: 'external_promotions';
};
declare type SkuListRel = ResourceId & {
    type: 'sku_lists';
};
interface SkuListPromotionRule extends Resource {
    all_skus?: boolean;
    min_quantity?: number;
    promotion?: PercentageDiscountPromotion | FreeShippingPromotion | FixedAmountPromotion | FreeGiftPromotion | FixedPricePromotion | ExternalPromotion;
    sku_list?: SkuList;
    skus?: Sku[];
}
interface SkuListPromotionRuleCreate extends ResourceCreate {
    all_skus?: boolean;
    min_quantity?: number;
    promotion: PercentageDiscountPromotionRel | FreeShippingPromotionRel | FixedAmountPromotionRel | FreeGiftPromotionRel | FixedPricePromotionRel | ExternalPromotionRel;
    sku_list?: SkuListRel;
}
interface SkuListPromotionRuleUpdate extends ResourceUpdate {
    all_skus?: boolean;
    min_quantity?: number;
    promotion?: PercentageDiscountPromotionRel | FreeShippingPromotionRel | FixedAmountPromotionRel | FreeGiftPromotionRel | FixedPricePromotionRel | ExternalPromotionRel;
    sku_list?: SkuListRel;
}
declare class SkuListPromotionRules extends ApiResource {
    static readonly TYPE: 'sku_list_promotion_rules';
    list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<SkuListPromotionRule>>;
    create(resource: SkuListPromotionRuleCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<SkuListPromotionRule>;
    retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<SkuListPromotionRule>;
    update(resource: SkuListPromotionRuleUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<SkuListPromotionRule>;
    delete(id: string, options?: ResourcesConfig): Promise<void>;
    isSkuListPromotionRule(resource: any): resource is SkuListPromotionRule;
    relationship(id: string | ResourceId): SkuListPromotionRuleRel;
    type(): string;
}
export default SkuListPromotionRules;
export { SkuListPromotionRule, SkuListPromotionRuleCreate, SkuListPromotionRuleUpdate };
