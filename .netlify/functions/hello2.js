exports.handler = async event => {
    try {
        if (event && event.bodyJson) {
            return { statusCode: 200, body: event.bodyJson }
        } // end if event
        return { statusCode: 200, body: event }
        } catch (error) {
        return { statusCode: 200, body: error }
    }
}