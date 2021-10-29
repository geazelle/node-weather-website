const request = require(`request`)

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=587527990929b0d41ed420f118b1110d&query=` + latitude + `,` + longtitude + `&units=s`

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to weather service! `, undefined)
        } else if (body.error) {
            callback(`Unable to find location.`, undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + `. It is currently ` + body.current.temperature + ` degrees out. It feels like ` + body.current.feelslike + ` degrees out. The humidity is ` + body.current.humidity + `%.`)
        }
    })
}

module.exports = forecast