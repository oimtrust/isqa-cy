export const VALID_GET_ALL_USERS = {
    $schema: "http://json-schema.org/draft-07/schema",
    type: "object",
    required: [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
    ],
    properties: {
        page: {
            type: "integer"
        },
        per_page: {
            type: "integer"
        },
        total: {
            type: "integer"
        },
        total_pages: {
            type: "integer"
        },
        data: {
            type: "array",
            additionalItems: true,
            items: {
                anyOf: [
                    {
                        type: "object",
                        required: [
                            "id",
                            "email",
                            "first_name",
                            "last_name",
                            "avatar"
                        ],
                        properties: {
                            id: {
                                type: "integer"
                            },
                            email: {
                                type: "string"
                            },
                            first_name: {
                                type: "string"
                            },
                            last_name: {
                                type: "string"
                            },
                            avatar: {
                                type: "string"
                            }
                        },
                        additionalProperties: true
                    }
                ]
            }
        },
        "support": {
            "type": "object",
            "required": [
                "url",
                "text"
            ],
            "properties": {
                "url": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                }
            },
            additionalProperties: true
        }
    },
    additionalProperties: true
}