import { ApiResource } from '../resource'
import type { Resource, ResourceCreate, ResourceUpdate, ResourceId, ResourcesConfig, ResourceRel, ListResponse } from '../resource'
import type { QueryParamsRetrieve, QueryParamsList } from '../query'

import type { Market } from './markets'
import type { Attachment } from './attachments'
import type { Version } from './versions'


type ExternalTaxCalculatorType = 'external_tax_calculators'
type ExternalTaxCalculatorRel = ResourceRel & { type: ExternalTaxCalculatorType }


interface ExternalTaxCalculator extends Resource {
	
	readonly type: ExternalTaxCalculatorType

	name: string
	tax_calculator_url: string
	shared_secret: string

	markets?: Market[] | null
	attachments?: Attachment[] | null
	versions?: Version[] | null

}


interface ExternalTaxCalculatorCreate extends ResourceCreate {
	
	name: string
	tax_calculator_url: string
	
}


interface ExternalTaxCalculatorUpdate extends ResourceUpdate {
	
	name?: string | null
	tax_calculator_url?: string | null
	
}


class ExternalTaxCalculators extends ApiResource<ExternalTaxCalculator> {

	static readonly TYPE: ExternalTaxCalculatorType = 'external_tax_calculators' as const

	async create(resource: ExternalTaxCalculatorCreate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ExternalTaxCalculator> {
		return this.resources.create<ExternalTaxCalculatorCreate, ExternalTaxCalculator>({ ...resource, type: ExternalTaxCalculators.TYPE }, params, options)
	}

	async update(resource: ExternalTaxCalculatorUpdate, params?: QueryParamsRetrieve, options?: ResourcesConfig): Promise<ExternalTaxCalculator> {
		return this.resources.update<ExternalTaxCalculatorUpdate, ExternalTaxCalculator>({ ...resource, type: ExternalTaxCalculators.TYPE }, params, options)
	}

	async delete(id: string | ResourceId, options?: ResourcesConfig): Promise<void> {
		await this.resources.delete((typeof id === 'string')? { id, type: ExternalTaxCalculators.TYPE } : id, options)
	}

	async markets(externalTaxCalculatorId: string | ExternalTaxCalculator, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Market>> {
		const _externalTaxCalculatorId = (externalTaxCalculatorId as ExternalTaxCalculator).id || externalTaxCalculatorId as string
		return this.resources.fetch<Market>({ type: 'markets' }, `external_tax_calculators/${_externalTaxCalculatorId}/markets`, params, options) as unknown as ListResponse<Market>
	}

	async attachments(externalTaxCalculatorId: string | ExternalTaxCalculator, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Attachment>> {
		const _externalTaxCalculatorId = (externalTaxCalculatorId as ExternalTaxCalculator).id || externalTaxCalculatorId as string
		return this.resources.fetch<Attachment>({ type: 'attachments' }, `external_tax_calculators/${_externalTaxCalculatorId}/attachments`, params, options) as unknown as ListResponse<Attachment>
	}

	async versions(externalTaxCalculatorId: string | ExternalTaxCalculator, params?: QueryParamsList, options?: ResourcesConfig): Promise<ListResponse<Version>> {
		const _externalTaxCalculatorId = (externalTaxCalculatorId as ExternalTaxCalculator).id || externalTaxCalculatorId as string
		return this.resources.fetch<Version>({ type: 'versions' }, `external_tax_calculators/${_externalTaxCalculatorId}/versions`, params, options) as unknown as ListResponse<Version>
	}


	isExternalTaxCalculator(resource: any): resource is ExternalTaxCalculator {
		return resource.type && (resource.type === ExternalTaxCalculators.TYPE)
	}


	relationship(id: string | ResourceId | null): ExternalTaxCalculatorRel {
		return ((id === null) || (typeof id === 'string')) ? { id, type: ExternalTaxCalculators.TYPE } : { id: id.id, type: ExternalTaxCalculators.TYPE }
	}


	type(): ExternalTaxCalculatorType {
		return ExternalTaxCalculators.TYPE
	}

}


export default ExternalTaxCalculators

export type { ExternalTaxCalculator, ExternalTaxCalculatorCreate, ExternalTaxCalculatorUpdate, ExternalTaxCalculatorType }
