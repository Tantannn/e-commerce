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
		const url = '/history/all';
		return axiosClient.get(url);
	},
};

export default HistoryAPI;
