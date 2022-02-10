import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourcesConfig, ResourceId, ResourceRel, ListResponse } from '../resource'
import { QueryParamsList, QueryParamsRetrieve } from '../query'

import { Market } from './markets'


type BillingInfoValidationRuleRel = ResourceRel & { type: typeof BillingInfoValidationRules.TYPE }
type MarketRel = ResourceRel & { type: 'markets' }


interface BillingInfoValidationRule extends Resource {
	
	market?: Market

}


interface BillingInfoValidationRuleCreate extends ResourceCreate {
	
	market: MarketRel

}


interface BillingInfoValidationRuleUpdate extends ResourceUpdate {
	
	market?: MarketRel

}


class BillingInfoValidationRules extends ApiResource {

	static readonly TYPE: 'billing_info_validation_rules' = 'billing_info_validation_rules'
	// static readonly PATH = 'billing_info_validation_rules'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<BillingInfoValidationRule>> {
		return this.resources.list<BillingInfoValidationRule>({ type: BillingInfoValidationRules.TYPE }, params, options)
	}

	async create(resource: BillingInfoValidationRuleCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<BillingInfoValidationRule> {
		return this.resources.create({ ...resource, type: BillingInfoValidationRules.TYPE }, params, options)
	}

	async retrieve(id: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<BillingInfoValidationRule> {
		return this.resources.retrieve<BillingInfoValidationRule>({ type: BillingInfoValidationRules.TYPE, id }, params, options)
	}

	async update(resource: BillingInfoValidationRuleUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<BillingInfoValidationRule> {
		return this.resources.update({ ...resource, type: BillingInfoValidationRules.TYPE }, params, options)
	}

	async delete(id: string, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete({ type: BillingInfoValidationRules.TYPE, id }, options)
	}

	async market(billingInfoValidationRuleId: string, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<Market> {
		return this.resources.fetch<Market>({ type: 'markets' }, `billing_info_validation_rules/${billingInfoValidationRuleId}/market`, params, options) as unknown as Market
	}


	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
	isBillingInfoValidationRule(resource: any): resource is BillingInfoValidationRule {
		return resource.type && (resource.type === BillingInfoValidationRules.TYPE)
	}


	relationship(id: string | ResourceId | null): BillingInfoValidationRuleRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: BillingInfoValidationRules.TYPE } : { id: id.id, type: BillingInfoValidationRules.TYPE }
	}


	type(): string {
		return BillingInfoValidationRules.TYPE
	}

}


export default BillingInfoValidationRules

export { BillingInfoValidationRule, BillingInfoValidationRuleCreate, BillingInfoValidationRuleUpdate }
