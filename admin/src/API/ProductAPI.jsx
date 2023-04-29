import axiosClient from './axiosClient';
const ProductAPI = {
	getAPI: () => {
		const url = '/products';
		return axiosClient.get(url);
	},

	getCategory: (query) => {
		const url = `/products/category${query}`;
		return axiosClient.get(url);
	},

	getDetail: (id) => {
		const url = `/products/find/${id}`;
		return axiosClient.get(url);
	},

	getPagination: (query) => {
		const url = `/products/pagination${query}`;
		return axiosClient.get(url);
	},
	deleteProduct: (params) => {
		const url = `/products/${params}`
		return axiosClient.delete(url)
	},
	updateProduct: (params) => {
		const url = `/products/${params}`
		return axiosClient.put(url)
	}
};

export default ProductAPI;
