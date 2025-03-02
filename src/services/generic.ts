import axiosInstance from "./axiosInstance";
import { AxiosRequestConfig } from "axios";

/**
 * Axios instance’ını kullanarak dinamik bir API çağrısı oluşturur
 *
 * @template TResponse - Servisin döndüreceği veri tipini belirler.
 * @template TData - Servisin alacağı parametreleri (body, query parametreleri) temsil eder. (API çağrısında herhangi bir body veya parametre gönderilmiyorsa TData olarak boş bir tip olan never kullanılır.)
 * @param {string} endpoint - API isteğinin yapılacağı URL.
 * @param {AxiosRequestConfig} [config] - İsteğe bağlı ek ayarlar (headers, params, vb.).
 * @returns {Function} - Asenkron bir fonksiyon döndürür ve çağrıldığında API isteği yapar.
 * @example  export const getEventsService = createService<GetEventsResponse>("/events?take=50",{ method: "GET" });)
 *
 */

export function createService<TResponse, TData = never>(
  endpoint: string,
  config?: AxiosRequestConfig
) {
  return async (data?: TData): Promise<TResponse> => {
    const response = await axiosInstance({
      url: endpoint,                
      method: config?.method || "GET",  
      ...config,                    
      data,                          
    });
    return response.data; 
  };
}

