import axiosClient from './axiosClient';

const HistoryAPI = {
	getHistoryAPI: (query) => {
		const url = `/history${query}`;
		return axiosClient.get(url);
	},

	getDetail: (id) => {
		const url = `/history/${id}`;
		return axiosClient.get(url);
	},

	getAll: () => {
		const url = '/history';
		return axiosClient.get(url,{ withCredentials: true });
	},
};

export default HistoryAPI;
