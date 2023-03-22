import { ApiResource, Resource, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsList } from '../query'

import type { Market } from './markets'
import type { Attachment } from './attachments'


type TaxCalculatorType = 'tax_calculators'
type TaxCalculatorRel = ResourceRel & { type: TaxCalculatorType }


interface TaxCalculator extends Resource {
	
	readonly type: TaxCalculatorType

	name: string

	markets?: Market[] | null
	attachments?: Attachment[] | null

}


class TaxCalculators extends ApiResource<TaxCalculator> {

	static readonly TYPE: TaxCalculatorType = 'tax_calculators' as const

	async markets(taxCalculatorId: string | TaxCalculator, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Market>> {
		const _taxCalculatorId = (taxCalculatorId as TaxCalculator).id || taxCalculatorId as string
		return this.resources.fetch<Market>({ type: 'markets' }, `tax_calculators/${_taxCalculatorId}/markets`, params, options) as unknown as ListResponse<Market>
	}

	async attachments(taxCalculatorId: string | TaxCalculator, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		const _taxCalculatorId = (taxCalculatorId as TaxCalculator).id || taxCalculatorId as string
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `tax_calculators/${_taxCalculatorId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}


	isTaxCalculator(resource: any): resource is TaxCalculator {
		return resource.type && (resource.type === TaxCalculators.TYPE)
	}


	relationship(id: string | ResourceId | null): TaxCalculatorRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: TaxCalculators.TYPE } : { id: id.id, type: TaxCalculators.TYPE }
	}


	type(): TaxCalculatorType {
		return TaxCalculators.TYPE
	}

}


export default TaxCalculators

export type { TaxCalculator, TaxCalculatorType }
