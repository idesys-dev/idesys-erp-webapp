export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })

  // Set baseURL to something different
  api.setBaseURL(process.env.BASE_API_URL)
  // api.setBaseURL('http://127.0.0.1:3001/')

  // Inject to context as $api
  inject('api', api)
}
