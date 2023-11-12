function requestFor(controller){
	const baseURL = "http://localhost:6789"
	var url = `${baseURL}/${controller}`

	function getBase(params) {
		return `${url}${params ? "/" : ""}${params}`;
	}

	return {
		GET: (params) => {
			return fetch(getBase(params), {
				method: "GET"
			}).then((d) => d.json())
		},
		POST: (params, body) => {
			return fetch(getBase(params), {
				method: "POST",
				body: JSON.stringify(body)
			}).then((d) => d.json());
		},
		PUT: (params, body) => {
			return fetch(getBase(params), {
				method: "PUT",
				body: JSON.stringify(body)

			}).then((d) => d.json());
		},
		DELETE: (params) => {
			return fetch(getBase(params), {
				method: "DELETE"
			}).then((d) => d.json());
		},
	}
}

