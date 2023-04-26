import axiosClient from './axiosClient';

const CheckoutAPI = {
	postEmail: (query) => {
		const url = `/transactions/email`;
		return axiosClient.post(url, query);
	},
};

export default CheckoutAPI;
