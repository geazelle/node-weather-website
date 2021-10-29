const request = require(`request`)

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + address + `.json?access_token=pk.eyJ1IjoiZ2Vham95IiwiYSI6ImNrdjk4OXc1bjI2bWYyb3A2aTlkcjdvOGgifQ.Z5AIjfz2CVIEbpTypfABeA&limit=1`

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to location services!`, undefined)
        } else if (body.features.length === 0) {
            callback(`Unable to find location. try another search.`, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode