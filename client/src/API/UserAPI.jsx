import axiosClient from './axiosClient';

const UserAPI = {
	postLogin: (input) => {
		const url = '/auth/login';
		return axiosClient.post(url, input);
	},

	getDetailData: (id) => {
		const url = `/users/${id}`;
		return axiosClient.get(url);
	},

	postSignUp: (params) => {
		const url = `/auth/register`;
		return axiosClient.post(url, params);
	},
};

export default UserAPI;
