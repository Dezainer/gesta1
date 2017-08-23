const url = "http://localhost:3000";

export function post(route, content) {
	return fetch(url+route, {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify(content),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => {
		return response.json()
	})
	.catch(e => {
		console.log(e)
	})
}

export function get(route) {
	return fetch(url+route, {
		method: 'GET',
		mode: 'cors'
	})
  	.then(response => {
  		return response.json()
  	})
  	.catch(e => {
		console.log(e)
	})
}

export function remove(route) {
	return fetch(url+route, {
		method: 'DELETE',
		mode: 'cors'
	})
	.then(response => {
		return response.json()
	})
	.catch(e => {
		console.log(e)
	})
}
