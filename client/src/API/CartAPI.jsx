import axiosClient from './axiosClient';

const CartAPI = {
	getCarts: (params) => {
		const url = `/transactions/find/${params}`;
		return axiosClient.get(url);
	},

	postAddToCart: (query) => {
		const url = `/transactions`;
		return axiosClient.post(url, query);
	},

	deleteToCart: (query) => {
		const url = `/transactions/${query}`;
		return axiosClient.delete(url);
	},

	putToCart: (query) => {
		const url = `/transactions/${query}`;
		return axiosClient.put(url);
	},
};

export default CartAPI;
