module.exports = {
  scry: {
    app: {
      page: {
        scryNew: require('./app/page/scry-new'),
        scryShow: require('./app/page/scry-show')
      }
    },
    router: {
      sync: {
        routes: require('./router/sync/routes')
      }
    },
    styles: {
      mcss: require('./styles/mcss')
    }
  }
}
