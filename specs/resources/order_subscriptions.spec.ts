/**
 * ©2023 Commerce Layer Inc.
 * Source code generated automatically by SDK codegen
 **/

import { CommerceLayerClient, OrderSubscription } from '../../src'
import { isEqual } from 'lodash'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getClient, TestData, CommonData, handleError, interceptRequest, checkCommon, checkCommonData, checkCommonParamsList, checkCommonParams, currentAccessToken, randomValue } from '../../test/common'



let cl: CommerceLayerClient


beforeAll(async () => { cl = await getClient() })


describe('OrderSubscriptions resource', () => {

  const resourceType = 'order_subscriptions'


  /* spec.create.start */
  it(resourceType + '.create', async () => {

    const createAttributes = {
			frequency: randomValue('string', 'frequency'),
			market: cl.markets.relationship(TestData.id),
			source_order: cl.orders.relationship(TestData.id),
		}

    const attributes = { ...createAttributes, reference: TestData.reference }
    const params = { fields: { [resourceType]: CommonData.paramsFields } }
    const resData = attributes

    const intId = cl.addRequestInterceptor((config) => {
      expect(config.method).toBe('post')
      checkCommon(config, resourceType)
      checkCommonData(config, resourceType, attributes)
      expect(cl[resourceType].isOrderSubscription(config.data.data)).toBeTruthy()
      return interceptRequest()
    })

    await cl[resourceType].create(resData, params, CommonData.options)
      .catch(handleError)
      .finally(() => cl.removeInterceptor('request', intId))

  })
  /* spec.create.stop */


  /* spec.retrieve.start */
  it(resourceType + '.retrieve', async () => {

    const id = TestData.id
    const params = { fields: {[resourceType]: CommonData.paramsFields } }

    const intId = cl.addRequestInterceptor((config) => {
      expect(config.method).toBe('get')
      checkCommon(config, resourceType, id, currentAccessToken)
      checkCommonParams(config, params)
     return interceptRequest()
    })

    await cl[resourceType].retrieve(id, params, CommonData.options)
      .catch(handleError)
      .finally(() => cl.removeInterceptor('request', intId))

  })
  /* spec.retrieve.stop */


  /* spec.update.start */
  it(resourceType + '.update', async () => {

    const attributes = { reference_origin: TestData.reference_origin, metadata: TestData.metadata }
    const params = { fields: { [resourceType]: CommonData.paramsFields } }
    const resData = { id: TestData.id, ...attributes}

    const intId = cl.addRequestInterceptor((config) => {
      expect(config.method).toBe('patch')
      checkCommon(config, resourceType, resData.id, currentAccessToken)
      checkCommonData(config, resourceType, attributes, resData.id)
      return interceptRequest()
    })

    await cl[resourceType].update(resData, params, CommonData.options)
      .catch(handleError)
      .finally(() => cl.removeInterceptor('request', intId))

  })
  /* spec.update.stop */


  /* spec.delete.start */
  it(resourceType + '.delete', async () => {

    const id = TestData.id

    const intId = cl.addRequestInterceptor((config) => {
      expect(config.method).toBe('delete')
      checkCommon(config, resourceType, id, currentAccessToken)
      return interceptRequest()
    })

    await cl[resourceType].delete(id, CommonData.options)
      .catch(handleError)
      .finally(() => cl.removeInterceptor('request', intId))

  })
  /* spec.delete.stop */


  /* spec.list.start */
  it(resourceType + '.list', async () => {

    const params = CommonData.paramsList

    const intId = cl.addRequestInterceptor((config) => {
      expect(config.method).toBe('get')
      checkCommon(config, resourceType)
      checkCommonParamsList(config, params)
      return interceptRequest()
    })

    await cl[resourceType].list(params, CommonData.options)
      .catch(handleError)
      .finally(() => cl.removeInterceptor('request', intId))
    
  })
  /* spec.list.stop */


  /* spec.type.start */
  it(resourceType + '.type', async () => {

    const resource = { id: TestData.id, type: resourceType }
    expect(cl[resourceType].isOrderSubscription(resource)).toBeTruthy()

    const type = cl[resourceType].type()
    expect(type).toBe(resourceType)

  })
  /* spec.type.stop */


  /* spec.relationship.start */
  it(resourceType + '.relationship', async () => {

    const relId = cl[resourceType].relationship(TestData.id)
    expect(isEqual(relId, { id: TestData.id, type: resourceType}))

    const relResId = cl[resourceType].relationship({ id: TestData.id, type: resourceType })
    expect(isEqual(relResId, { id: TestData.id, type: resourceType}))

  })
  /* spec.relationship.stop */


  /* spec.parse.start */
  it(resourceType + '.parse', async () => {

    const reference = 'myReferenceId'

    const payload = `
    {
	    "data": {
        "id": "AbcdEfgHiL",
        "meta": {
          "mode": "test",
          "organization_id": "myOrgId"
        },
        "type": "${resourceType}",
        "links": {
          "self": "/api/${resourceType}/AbcdEfgHiL"
        },
        "attributes": {
          "metadata": {},
          "reference": "${reference}",
          "created_at": "2023-10-01T05:53:29.296Z",
          "updated_at": "2023-10-10T08:52:13.251Z"
        }
      }
    }
    `

    const res = cl[resourceType].parse(payload) as OrderSubscription

    expect(res.type).toBe(resourceType)
    expect(res.reference).toBe(reference)

  })
  /* spec.parse.stop */

  

	/* relationship.market start */
	it(resourceType + '.market', async () => {
	
		const id = TestData.id
		const params = { fields: { markets: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'market')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].market(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.market stop */
	

	/* relationship.subscription_model start */
	it(resourceType + '.subscription_model', async () => {
	
		const id = TestData.id
		const params = { fields: { subscription_models: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'subscription_model')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].subscription_model(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.subscription_model stop */
	

	/* relationship.source_order start */
	it(resourceType + '.source_order', async () => {
	
		const id = TestData.id
		const params = { fields: { orders: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'source_order')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].source_order(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.source_order stop */
	

	/* relationship.customer start */
	it(resourceType + '.customer', async () => {
	
		const id = TestData.id
		const params = { fields: { customers: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'customer')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].customer(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.customer stop */
	

	/* relationship.customer_payment_source start */
	it(resourceType + '.customer_payment_source', async () => {
	
		const id = TestData.id
		const params = { fields: { customer_payment_sources: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'customer_payment_source')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].customer_payment_source(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.customer_payment_source stop */
	

	/* relationship.order_subscription_items start */
	it(resourceType + '.order_subscription_items', async () => {
	
		const id = TestData.id
		const params = { fields: { order_subscription_items: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'order_subscription_items')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].order_subscription_items(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.order_subscription_items stop */
	

	/* relationship.order_factories start */
	it(resourceType + '.order_factories', async () => {
	
		const id = TestData.id
		const params = { fields: { order_factories: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'order_factories')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].order_factories(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.order_factories stop */
	

	/* relationship.recurring_order_copies start */
	it(resourceType + '.recurring_order_copies', async () => {
	
		const id = TestData.id
		const params = { fields: { recurring_order_copies: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'recurring_order_copies')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].recurring_order_copies(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.recurring_order_copies stop */
	

	/* relationship.orders start */
	it(resourceType + '.orders', async () => {
	
		const id = TestData.id
		const params = { fields: { orders: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'orders')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].orders(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.orders stop */
	

	/* relationship.events start */
	it(resourceType + '.events', async () => {
	
		const id = TestData.id
		const params = { fields: { events: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'events')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].events(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.events stop */
	

	/* relationship.versions start */
	it(resourceType + '.versions', async () => {
	
		const id = TestData.id
		const params = { fields: { versions: CommonData.paramsFields } }
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('get')
			checkCommon(config, resourceType, id, currentAccessToken, 'versions')
			checkCommonParams(config, params)
			return interceptRequest()
		})
	
		await cl[resourceType].versions(id, params, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* relationship.versions stop */
	
  

	/* trigger._activate start */
	it(resourceType + '._activate', async () => {
	
		let triggerAttr = '_activate'
		if (!triggerAttr.startsWith('_')) triggerAttr = `_${triggerAttr}`
	
		const triggerValue = true
		const attributes = { [triggerAttr]: triggerValue }
	    const id = TestData.id
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('patch')
			checkCommon(config, resourceType, id, currentAccessToken)
			checkCommonData(config, resourceType, attributes, id)
			return interceptRequest()
		})
	
		await cl[resourceType]._activate(id, {}, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* trigger._activate stop */
	

	/* trigger._deactivate start */
	it(resourceType + '._deactivate', async () => {
	
		let triggerAttr = '_deactivate'
		if (!triggerAttr.startsWith('_')) triggerAttr = `_${triggerAttr}`
	
		const triggerValue = true
		const attributes = { [triggerAttr]: triggerValue }
	    const id = TestData.id
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('patch')
			checkCommon(config, resourceType, id, currentAccessToken)
			checkCommonData(config, resourceType, attributes, id)
			return interceptRequest()
		})
	
		await cl[resourceType]._deactivate(id, {}, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* trigger._deactivate stop */
	

	/* trigger._cancel start */
	it(resourceType + '._cancel', async () => {
	
		let triggerAttr = '_cancel'
		if (!triggerAttr.startsWith('_')) triggerAttr = `_${triggerAttr}`
	
		const triggerValue = true
		const attributes = { [triggerAttr]: triggerValue }
	    const id = TestData.id
	
		const intId = cl.addRequestInterceptor((config) => {
			expect(config.method).toBe('patch')
			checkCommon(config, resourceType, id, currentAccessToken)
			checkCommonData(config, resourceType, attributes, id)
			return interceptRequest()
		})
	
		await cl[resourceType]._cancel(id, {}, CommonData.options)
			.catch(handleError)
			.finally(() => cl.removeInterceptor('request', intId))
	
	})
	/* trigger._cancel stop */
	
})
