'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const OneSignal = require('onesignal-node')

class OneSignalProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/OneSignal', (app) => {
    var options = {
          userAuthKey:  app.use('Adonis/Src/Env').get('ONESIGNAL_USER_KEY'),      
          app: { appAuthKey:  app.use('Adonis/Src/Env').get('ONESIGNAL_APP_KEY'), appId:  app.use('Adonis/Src/Env').get('ONESIGNAL_APP_ID') } 
        }

      const  oneSignalInstance = new OneSignal.Client(options)

      return oneSignalInstance
    })

    this.app.alias('Adonis/Addons/OneSignal', 'OneSignal')
  }
}

module.exports = OneSignalProvider