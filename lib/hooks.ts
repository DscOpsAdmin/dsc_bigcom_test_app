import useSWR from 'swr';
import { useSession } from '../context/session';
import { ErrorProps, ListItem, Order, QueryParams, ShippingAndProductsInfo } from '../types';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';

async function fetcher(url: string, query: string) {
    const res = await fetch(`${url}?${query}`);

    // If the status code is not in the range 200-299, throw an error
    if (!res.ok) {
        const { message } = await res.json();
        const error: ErrorProps = new Error(message || 'An error occurred while fetching the data.');
        error.status = res.status; // e.g. 500
        throw error;
    }

    return res.json();
}

// Reusable SWR hooks
// https://swr.vercel.app/

export function useProducts() {
    const logTitle = " useProducts() ";
    const { context } = useSession();
    const params = new URLSearchParams({ context }).toString();
    // Request is deduped and cached; Can be shared across components
    const { data, error } = useSWR(context ? ['/api/products', params] : null, fetcher);
    const customData = {
        inventory_count: 101,
        variant_count: 16,
        primary_category_name: "Headsets"
    }
    return {
        summary: customData,
        isLoading: !customData && !error,
        error: {
            name:"",
            message: ""
        }
    };
}

export function useProductList(query?: QueryParams) {
    const { context } = useSession();
    const params = new URLSearchParams({ ...query, context }).toString();

    // Use an array to send multiple arguments to fetcher
    const { data, error, mutate: mutateList } = useSWR(context ? ['/api/products/list', params] : null, fetcher);
    const customData = {
        data: [
            {
                id: 1,
                name: "Crusher® Evo Sensory Bass Headphones with Personal Sound", 
                price: 199.99, 
                inventory_level: 10
            },
            {
                id: 2,
                name: "Hesh® ANC Noise Canceling Wireless Headphones", 
                price: 79.99, 
                inventory_level: 12
            },
            {
                id: 3,
                name: "Hesh® Evo Wireless Headphones", 
                price: 199.99, 
                inventory_level: 19
            },
            {
                id: 4,
                name: "Transparency Hesh® Evo Wireless Headphones", 
                price: 49.99, 
                inventory_level: 33
            },
            {
                id: 5,
                name: "Take a Hike Riff® Wireless 2 On-Ear Headphones", 
                price: 104.99, 
                inventory_level: 21
            },
            {
                id: 6,
                name: "Crusher® Evo Sensory Bass Headphones with Personal Sound", 
                price: 49.99, 
                inventory_level: 4
            },
            {
                id: 7,
                name: "Street Fighter PLYR® Multi-Platform Wireless Gaming Headset", 
                price: 103.99, 
                inventory_level: 5
            },
            {
                id: 8,
                name: "PLYR® Multi-Platform Wireless Gaming Headset", 
                price: 150.99, 
                inventory_level: 3
            },
            {
                id: 9,
                name: "SLYR® Pro Multi-Platform Wired Gaming Headset - WHITE", 
                price: 169.99, 
                inventory_level: 6
            },
            {
                id: 10,
                name: "SLYR® Pro Multi-Platform Wired Gaming Headset - BLACK", 
                price: 169.99, 
                inventory_level: 7
            },
            // {
            //     id: 11,
            //     name: "SLYR® Multi-Platform Wired Gaming Headset - BLACK", 
            //     price: 149.99, 
            //     inventory_level: 4
            // },
            // {
            //     id: 12,
            //     name: "SLYR® Multi-Platform Wired Gaming Headset - GREEN", 
            //     price: 149.99, 
            //     inventory_level: 3
            // },
            // {
            //     id: 13,
            //     name: "SLYR® Multi-Platform Wired Gaming Headset - BLUE", 
            //     price: 149.99, 
            //     inventory_level: 2
            // }
        ],
        meta: {
            pagination: {
                total: 10
            }
        }
    }
    return {
        list: customData?.data,
        meta: customData?.meta,
        isLoading: !customData && !error,
        error: {
            name:"",
            message: ""
        },
        mutateList,
    };
}

export function useProductInfo(pid: number, list: ListItem[]) {
    const { context } = useSession();
    const params = new URLSearchParams({ context }).toString();
    const product = list.find(item => item.id === pid);
    // Conditionally fetch product if it doesn't exist in the list (e.g. deep linking)
    const { data, error } = useSWR(!product && context ? [`/api/products/${pid}`, params] : null, fetcher);

    return {
        product: product ?? data,
        isLoading: product ? false : (!data && !error),
        error,
    };
}

export const useOrder = (orderId: number) => {
    const { context } = useSession();
    const params = new URLSearchParams({ context }).toString();
    const shouldFetch = context && orderId !== undefined;

    // Conditionally fetch orderId is defined
    const { data, error } = useSWR<Order, ErrorProps>(shouldFetch ? [`/api/orders/${orderId}`, params] : null, fetcher);

    return {
        order: data,
        isLoading: !data && !error,
        error,
    };
}

export const useShippingAndProductsInfo = (orderId: number) => {
    const { context } = useSession();
    const params = new URLSearchParams({ context }).toString();
    const shouldFetch = context && orderId !== undefined;

    // Shipping addresses and products are not included in the order data and need to be fetched separately
    const { data, error } = useSWR<ShippingAndProductsInfo, ErrorProps>(
        shouldFetch ? [`/api/orders/${orderId}/shipping_products`, params] : null, fetcher
    );

    return {
        order: data,
        isLoading: !data && !error,
        error,
    };
}