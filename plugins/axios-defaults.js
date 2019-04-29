export default function ({ $axios, store }) {
  $axios.onRequest(config => {
    const hasQuery = config.url.indexOf('?') > -1
    const separator = hasQuery ? '&' : '?'

    config.url = config.url + separator + 'locale=' + store.state.locale
    console.log(config)
    return config
  })
}
