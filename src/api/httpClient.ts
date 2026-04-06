import axios, { type AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const httpService = axios.create({
    baseURL: API_URL
})

export const httpClient = async <T>(
    config: AxiosRequestConfig
): Promise<T> => {
    try {
        const response = await httpService.request<T>(config);

        return response.data;

    } catch (error) {

        if (axios.isAxiosError<{ err?: string }>(error)) {
            throw new Error(error.response?.data?.err ?? "Server error");
        }

        throw new Error("Network error");
    }
}; 