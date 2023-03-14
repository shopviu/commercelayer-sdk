import { ApiResource, Resource, ResourceCreate, ResourceUpdate, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { ManualTaxCalculator, ManualTaxCalculatorType } from './manual_tax_calculators'


type TaxRuleType = 'tax_rules'
type TaxRuleRel = ResourceRel & { type: TaxRuleType }
type ManualTaxCalculatorRel = ResourceRel & { type: ManualTaxCalculatorType }


interface TaxRule extends Resource {
	
	readonly type: TaxRuleType

	name: string
	tax_rate?: number
	country_code_regex?: string
	not_country_code_regex?: string
	state_code_regex?: string
	not_state_code_regex?: string
	zip_code_regex?: string
	not_zip_code_regex?: string
	freight_taxable?: boolean
	payment_method_taxable?: boolean
	gift_card_taxable?: boolean
	adjustment_taxable?: boolean
	breakdown?: object

	manual_tax_calculator?: ManualTaxCalculator

}


interface TaxRuleCreate extends ResourceCreate {
	
	name: string
	tax_rate?: number
	country_code_regex?: string
	not_country_code_regex?: string
	state_code_regex?: string
	not_state_code_regex?: string
	zip_code_regex?: string
	not_zip_code_regex?: string
	freight_taxable?: boolean
	payment_method_taxable?: boolean
	gift_card_taxable?: boolean
	adjustment_taxable?: boolean

	manual_tax_calculator: ManualTaxCalculatorRel

}


interface TaxRuleUpdate extends ResourceUpdate {
	
	name: string
	tax_rate?: number
	country_code_regex?: string
	not_country_code_regex?: string
	state_code_regex?: string
	not_state_code_regex?: string
	zip_code_regex?: string
	not_zip_code_regex?: string
	freight_taxable?: boolean
	payment_method_taxable?: boolean
	gift_card_taxable?: boolean
	adjustment_taxable?: boolean

	manual_tax_calculator?: ManualTaxCalculatorRel

}


class TaxRules extends ApiResource<TaxRule> {

	static readonly TYPE: TaxRuleType = 'tax_rules' as const
	// static readonly PATH = 'tax_rules'

	async list(params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<TaxRule>> {
		return this.resources.list<TaxRule>({ type: TaxRules.TYPE }, params, options)
	}

	async create(resource: TaxRuleCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<TaxRule> {
		return this.resources.create<TaxRuleCreate, TaxRule>({ ...resource, type: TaxRules.TYPE }, params, options)
	}

	async update(resource: TaxRuleUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<TaxRule> {
		return this.resources.update<TaxRuleUpdate, TaxRule>({ ...resource, type: TaxRules.TYPE }, params, options)
	}

	async delete(id: string | ResourceId, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete((typeof id === 'string')? { id, type: TaxRules.TYPE } : id, options)
	}

	async manual_tax_calculator(taxRuleId: string | TaxRule, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ManualTaxCalculator> {
		const _taxRuleId = (taxRuleId as TaxRule).id || taxRuleId as string
		return this.resources.fetch<ManualTaxCalculator>({ type: 'manual_tax_calculators' }, `tax_rules/${_taxRuleId}/manual_tax_calculator`, params, options) as unknown as ManualTaxCalculator
	}


	isTaxRule(resource: any): resource is TaxRule {
		return resource.type && (resource.type === TaxRules.TYPE)
	}


	relationship(id: string | ResourceId | null): TaxRuleRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: TaxRules.TYPE } : { id: id.id, type: TaxRules.TYPE }
	}


	type(): TaxRuleType {
		return TaxRules.TYPE
	}

}


export default TaxRules

export type { TaxRule, TaxRuleCreate, TaxRuleUpdate, TaxRuleType }
