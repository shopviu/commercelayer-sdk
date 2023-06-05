
// ##__MODEL_TYPES_START__##
// ##__MODEL_TYPES_TEMPLATE:: export type { ##__RESOURCE_MODELS__## } from './resources/##__RESOURCE_TYPE__##'
/**
 * ©2023 Commerce Layer Inc.
 **/
export type { Address, AddressCreate, AddressUpdate } from './resources/addresses'
export type { Adjustment, AdjustmentCreate, AdjustmentUpdate } from './resources/adjustments'
export type { AdyenGateway, AdyenGatewayCreate, AdyenGatewayUpdate } from './resources/adyen_gateways'
export type { AdyenPayment, AdyenPaymentCreate, AdyenPaymentUpdate } from './resources/adyen_payments'
export type { Application } from './resources/application'
export type { Attachment, AttachmentCreate, AttachmentUpdate } from './resources/attachments'
export type { Authorization, AuthorizationUpdate } from './resources/authorizations'
export type { AvalaraAccount, AvalaraAccountCreate, AvalaraAccountUpdate } from './resources/avalara_accounts'
export type { AxerveGateway, AxerveGatewayCreate, AxerveGatewayUpdate } from './resources/axerve_gateways'
export type { AxervePayment, AxervePaymentCreate, AxervePaymentUpdate } from './resources/axerve_payments'
export type { BillingInfoValidationRule, BillingInfoValidationRuleCreate, BillingInfoValidationRuleUpdate } from './resources/billing_info_validation_rules'
export type { BingGeocoder, BingGeocoderCreate, BingGeocoderUpdate } from './resources/bing_geocoders'
export type { BraintreeGateway, BraintreeGatewayCreate, BraintreeGatewayUpdate } from './resources/braintree_gateways'
export type { BraintreePayment, BraintreePaymentCreate, BraintreePaymentUpdate } from './resources/braintree_payments'
export type { Bundle, BundleCreate, BundleUpdate } from './resources/bundles'
export type { Capture, CaptureUpdate } from './resources/captures'
export type { CarrierAccount } from './resources/carrier_accounts'
export type { CheckoutComGateway, CheckoutComGatewayCreate, CheckoutComGatewayUpdate } from './resources/checkout_com_gateways'
export type { CheckoutComPayment, CheckoutComPaymentCreate, CheckoutComPaymentUpdate } from './resources/checkout_com_payments'
export type { Cleanup, CleanupCreate } from './resources/cleanups'
export type { CouponCodesPromotionRule, CouponCodesPromotionRuleCreate, CouponCodesPromotionRuleUpdate } from './resources/coupon_codes_promotion_rules'
export type { CouponRecipient, CouponRecipientCreate, CouponRecipientUpdate } from './resources/coupon_recipients'
export type { Coupon, CouponCreate, CouponUpdate } from './resources/coupons'
export type { CustomerAddress, CustomerAddressCreate, CustomerAddressUpdate } from './resources/customer_addresses'
export type { CustomerGroup, CustomerGroupCreate, CustomerGroupUpdate } from './resources/customer_groups'
export type { CustomerPasswordReset, CustomerPasswordResetCreate, CustomerPasswordResetUpdate } from './resources/customer_password_resets'
export type { CustomerPaymentSource, CustomerPaymentSourceCreate, CustomerPaymentSourceUpdate } from './resources/customer_payment_sources'
export type { CustomerSubscription, CustomerSubscriptionCreate, CustomerSubscriptionUpdate } from './resources/customer_subscriptions'
export type { Customer, CustomerCreate, CustomerUpdate } from './resources/customers'
export type { DeliveryLeadTime, DeliveryLeadTimeCreate, DeliveryLeadTimeUpdate } from './resources/delivery_lead_times'
export type { EventCallback } from './resources/event_callbacks'
export type { Event } from './resources/events'
export type { Export, ExportCreate } from './resources/exports'
export type { ExternalGateway, ExternalGatewayCreate, ExternalGatewayUpdate } from './resources/external_gateways'
export type { ExternalPayment, ExternalPaymentCreate, ExternalPaymentUpdate } from './resources/external_payments'
export type { ExternalPromotion, ExternalPromotionCreate, ExternalPromotionUpdate } from './resources/external_promotions'
export type { ExternalTaxCalculator, ExternalTaxCalculatorCreate, ExternalTaxCalculatorUpdate } from './resources/external_tax_calculators'
export type { FixedAmountPromotion, FixedAmountPromotionCreate, FixedAmountPromotionUpdate } from './resources/fixed_amount_promotions'
export type { FixedPricePromotion, FixedPricePromotionCreate, FixedPricePromotionUpdate } from './resources/fixed_price_promotions'
export type { FreeGiftPromotion, FreeGiftPromotionCreate, FreeGiftPromotionUpdate } from './resources/free_gift_promotions'
export type { FreeShippingPromotion, FreeShippingPromotionCreate, FreeShippingPromotionUpdate } from './resources/free_shipping_promotions'
export type { Geocoder } from './resources/geocoders'
export type { GiftCardRecipient, GiftCardRecipientCreate, GiftCardRecipientUpdate } from './resources/gift_card_recipients'
export type { GiftCard, GiftCardCreate, GiftCardUpdate } from './resources/gift_cards'
export type { GoogleGeocoder, GoogleGeocoderCreate, GoogleGeocoderUpdate } from './resources/google_geocoders'
export type { Import, ImportCreate } from './resources/imports'
export type { InStockSubscription, InStockSubscriptionCreate, InStockSubscriptionUpdate } from './resources/in_stock_subscriptions'
export type { InventoryModel, InventoryModelCreate, InventoryModelUpdate } from './resources/inventory_models'
export type { InventoryReturnLocation, InventoryReturnLocationCreate, InventoryReturnLocationUpdate } from './resources/inventory_return_locations'
export type { InventoryStockLocation, InventoryStockLocationCreate, InventoryStockLocationUpdate } from './resources/inventory_stock_locations'
export type { KlarnaGateway, KlarnaGatewayCreate, KlarnaGatewayUpdate } from './resources/klarna_gateways'
export type { KlarnaPayment, KlarnaPaymentCreate, KlarnaPaymentUpdate } from './resources/klarna_payments'
export type { LineItemOption, LineItemOptionCreate, LineItemOptionUpdate } from './resources/line_item_options'
export type { LineItem, LineItemCreate, LineItemUpdate } from './resources/line_items'
export type { ManualGateway, ManualGatewayCreate, ManualGatewayUpdate } from './resources/manual_gateways'
export type { ManualTaxCalculator, ManualTaxCalculatorCreate, ManualTaxCalculatorUpdate } from './resources/manual_tax_calculators'
export type { Market, MarketCreate, MarketUpdate } from './resources/markets'
export type { Merchant, MerchantCreate, MerchantUpdate } from './resources/merchants'
export type { OrderAmountPromotionRule, OrderAmountPromotionRuleCreate, OrderAmountPromotionRuleUpdate } from './resources/order_amount_promotion_rules'
export type { OrderCopy, OrderCopyCreate, OrderCopyUpdate } from './resources/order_copies'
export type { OrderFactory } from './resources/order_factories'
export type { OrderSubscriptionItem, OrderSubscriptionItemCreate, OrderSubscriptionItemUpdate } from './resources/order_subscription_items'
export type { OrderSubscription, OrderSubscriptionCreate, OrderSubscriptionUpdate } from './resources/order_subscriptions'
export type { OrderValidationRule } from './resources/order_validation_rules'
export type { Order, OrderCreate, OrderUpdate } from './resources/orders'
export type { Organization } from './resources/organization'
export type { Package, PackageCreate, PackageUpdate } from './resources/packages'
export type { ParcelLineItem, ParcelLineItemCreate, ParcelLineItemUpdate } from './resources/parcel_line_items'
export type { Parcel, ParcelCreate, ParcelUpdate } from './resources/parcels'
export type { PaymentGateway } from './resources/payment_gateways'
export type { PaymentMethod, PaymentMethodCreate, PaymentMethodUpdate } from './resources/payment_methods'
export type { PaypalGateway, PaypalGatewayCreate, PaypalGatewayUpdate } from './resources/paypal_gateways'
export type { PaypalPayment, PaypalPaymentCreate, PaypalPaymentUpdate } from './resources/paypal_payments'
export type { PercentageDiscountPromotion, PercentageDiscountPromotionCreate, PercentageDiscountPromotionUpdate } from './resources/percentage_discount_promotions'
export type { PriceFrequencyTier, PriceFrequencyTierCreate, PriceFrequencyTierUpdate } from './resources/price_frequency_tiers'
export type { PriceList, PriceListCreate, PriceListUpdate } from './resources/price_lists'
export type { PriceTier } from './resources/price_tiers'
export type { PriceVolumeTier, PriceVolumeTierCreate, PriceVolumeTierUpdate } from './resources/price_volume_tiers'
export type { Price, PriceCreate, PriceUpdate } from './resources/prices'
export type { PromotionRule } from './resources/promotion_rules'
export type { Promotion } from './resources/promotions'
export type { RecurringOrderCopy, RecurringOrderCopyCreate, RecurringOrderCopyUpdate } from './resources/recurring_order_copies'
export type { Refund } from './resources/refunds'
export type { ReturnLineItem, ReturnLineItemCreate, ReturnLineItemUpdate } from './resources/return_line_items'
export type { Return, ReturnCreate, ReturnUpdate } from './resources/returns'
export type { SatispayGateway, SatispayGatewayCreate, SatispayGatewayUpdate } from './resources/satispay_gateways'
export type { SatispayPayment, SatispayPaymentCreate, SatispayPaymentUpdate } from './resources/satispay_payments'
export type { Shipment, ShipmentUpdate } from './resources/shipments'
export type { ShippingCategory, ShippingCategoryCreate, ShippingCategoryUpdate } from './resources/shipping_categories'
export type { ShippingMethodTier } from './resources/shipping_method_tiers'
export type { ShippingMethod, ShippingMethodCreate, ShippingMethodUpdate } from './resources/shipping_methods'
export type { ShippingWeightTier, ShippingWeightTierCreate, ShippingWeightTierUpdate } from './resources/shipping_weight_tiers'
export type { ShippingZone, ShippingZoneCreate, ShippingZoneUpdate } from './resources/shipping_zones'
export type { SkuListItem, SkuListItemCreate, SkuListItemUpdate } from './resources/sku_list_items'
export type { SkuListPromotionRule, SkuListPromotionRuleCreate, SkuListPromotionRuleUpdate } from './resources/sku_list_promotion_rules'
export type { SkuList, SkuListCreate, SkuListUpdate } from './resources/sku_lists'
export type { SkuOption, SkuOptionCreate, SkuOptionUpdate } from './resources/sku_options'
export type { Sku, SkuCreate, SkuUpdate } from './resources/skus'
export type { StockItem, StockItemCreate, StockItemUpdate } from './resources/stock_items'
export type { StockLineItem } from './resources/stock_line_items'
export type { StockLocation, StockLocationCreate, StockLocationUpdate } from './resources/stock_locations'
export type { StockReservation } from './resources/stock_reservations'
export type { StockTransfer, StockTransferCreate, StockTransferUpdate } from './resources/stock_transfers'
export type { StripeGateway, StripeGatewayCreate, StripeGatewayUpdate } from './resources/stripe_gateways'
export type { StripePayment, StripePaymentCreate, StripePaymentUpdate } from './resources/stripe_payments'
export type { SubscriptionModel, SubscriptionModelCreate, SubscriptionModelUpdate } from './resources/subscription_models'
export type { Tag, TagCreate, TagUpdate } from './resources/tags'
export type { TaxCalculator } from './resources/tax_calculators'
export type { TaxCategory, TaxCategoryCreate, TaxCategoryUpdate } from './resources/tax_categories'
export type { TaxRule, TaxRuleCreate, TaxRuleUpdate } from './resources/tax_rules'
export type { TaxjarAccount, TaxjarAccountCreate, TaxjarAccountUpdate } from './resources/taxjar_accounts'
export type { Transaction } from './resources/transactions'
export type { Void } from './resources/voids'
export type { Webhook, WebhookCreate, WebhookUpdate } from './resources/webhooks'
export type { WireTransfer, WireTransferCreate, WireTransferUpdate } from './resources/wire_transfers'
// ##__MODEL_TYPES_STOP__##