import axiosClient from './axiosClient';

const UserAPI = {
	getAllData: () => {
		const url = '/users';
		return axiosClient.get(url);
	},

	getDetailData: (id) => {
		const url = `/users/${id}`;
		return axiosClient.get(url);
	},

	postLogin: (input) => {
		const url = '/auth/login';
		return axiosClient.post(url, input,  { withCredentials: true });
	},

};

export default UserAPI;
