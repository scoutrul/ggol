export default function ({ $axios, store }) {
  $axios.onRequest(config => {
    const hasQuery = config.url.indexOf('?') > -1
    const separator = hasQuery ? '&' : '?'

    config.url = config.url + separator + 'lang=' + store.state.locale

    return config
  })
}
