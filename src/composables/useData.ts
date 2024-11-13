import { AxiosRequestConfig, CanceledError } from 'axios'
import apiClient from '../config/api-client'
import { onWatcherCleanup, ref, watchEffect } from 'vue'

export interface FetchResponse<T> {
    count: number,
    results: T[]
}

function useData<T> (
    endpoint: string,
    requestConfig?: AxiosRequestConfig
) {
    const data = ref<T[]>([])
    const error = ref<string | undefined>()
    const loading = ref(false)

    watchEffect(() => {
        const controller = new AbortController()
        loading.value = true

        apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig
        }).then((res) => {
            data.value = res.data.results
            loading.value = false
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            error.value = err.message
            loading.value = false
        })

        onWatcherCleanup(() => controller.abort())

    })
    return {data, error, loading}
}