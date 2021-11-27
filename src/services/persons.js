import axios from 'axios';

const baseUrl = 'http://localhost:8080/persons';

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
}

const create = newPersonObject => {
	const request = axios.post(baseUrl, newPersonObject);
	return request.then(response => response.data);
}

const remove = id => {
	const request = axios.delete(`${baseUrl}/${id}`);
	return request.then(response => response.data);
}

const change = (id, personObject) => {
	const request = axios.put(`${baseUrl}/${id}`, personObject);
	return request.then(response => response.data);
}

export default {getAll, create, remove, change};