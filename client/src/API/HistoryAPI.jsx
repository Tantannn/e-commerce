import axiosClient from './axiosClient';

const HistoryAPI = {
	getHistoryAPI: (query) => {
		const url = `/history/find/${query}`;
		return axiosClient.get(url);
	},

	getDetail: (id) => {
		const url = `/history/find/${id}`;
		return axiosClient.get(url);
	},
};

export default HistoryAPI;
