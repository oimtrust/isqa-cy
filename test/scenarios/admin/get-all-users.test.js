import chai, { expect } from "chai";
import AdminAPI from "../../pages/admin/admin.api";
import { getParams } from "../../helper/lib-api";
import * as data from "../../data/admin";
import * as schema from "../../data/admin.schema";
import jsonSchema from "chai-json-schema";

chai.use(jsonSchema);
const assert = chai.assert;

describe('As an admin, I want to see all users have been created', function() {
    it('Should success get all users', async () => {
        const response = await AdminAPI.getAllUsers();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_ALL_USERS)
    });

    it('Should success get all users using page and per_page as a parameter', async () => {
        const params    = getParams(data.GET_ALL_USERS_VALID_PARAMETER)
        const response  = await AdminAPI.getAllUsersWithParams(params)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_ALL_USERS)
    });
});
    