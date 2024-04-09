import axios from "./axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getOrders() {
        const resp = await axios.get('/products')
        return {
            data: resp.data,
            status: resp.status
        }
    },
    async getOrder(id: string | string[]) {
        const resp = await axios.get(`/products/${id}`)
        return {
            data: resp.data,
            status: resp.status
        }
    }
}