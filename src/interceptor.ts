/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios'


type InterceptorManager = {
	request: AxiosInterceptorManager<AxiosRequestConfig>;
	response: AxiosInterceptorManager<any>
}


type RequestObj = AxiosRequestConfig
type RequestInterceptor = (request: RequestObj) => RequestObj | Promise<RequestObj>

type ResponseObj = AxiosResponse
type ResponseInterceptor = (response: ResponseObj) => ResponseObj

type ApiHeadersList = 'x-ratelimit-limit' | 'x-ratelimit-count' | 'x-ratelimit-period'
type ApiHeaders = { [key in ApiHeadersList]: string | number | boolean }
type HeadersObj = (AxiosResponseHeaders | RawAxiosResponseHeaders) & ApiHeaders


type ErrorObj = AxiosError
type ErrorInterceptor = (error: ErrorObj) => ErrorObj

type InterceptorType = 'request' | 'response'


export type { InterceptorManager, RequestInterceptor, ResponseInterceptor, ErrorInterceptor, InterceptorType }
export type { RequestObj, ResponseObj, ErrorObj, HeadersObj }



type RawResponseReader = {
	id: number | undefined;
	rawResponse: ResponseObj | undefined;
	headers: HeadersObj | undefined;
}


export type { RawResponseReader }
