import * as Reqs from './reqs';

export function getMonth(month) {
	return Reqs.get('/'+month).then(result => {
		return result[0]
	})
}

export function saveRecord(month, type, record) {
	return Reqs.post('/'+month+'/'+type+'/record', record).then(result => {
		return result
	})
}

export function removeRecord(month, type, id) {
	return Reqs.remove('/'+month+'/'+type+'/'+id).then(result => {
		return result
	})
}