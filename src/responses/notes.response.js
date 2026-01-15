export default class NotesResponse {
    send(data, response, status) {
        return response.status(status).send({
            success: true,
            data: {
                items: Array.isArray(data) ? data : [data],
            },
            metadata: {
                count: Array.isArray(data) ? data.length : 1
            },
            status: status
        });
    }
}
