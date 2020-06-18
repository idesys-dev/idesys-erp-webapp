export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })

  // Inject to context as $api
  inject('api', api)
}
