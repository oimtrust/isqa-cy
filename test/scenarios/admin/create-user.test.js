import { assert } from "chai";
import AdminAPI from "../../pages/admin/admin.api";
import * as data from "../../data/admin";

describe('As an Admin, I want create new user', () => {
    it('Should success create user', async () => {
        const response = await AdminAPI.createUser(data.VALID_DATA_USERS);

        assert.equal(response.status, 201);
        assert.hasAllKeys(response.data, ["name", "job", "id", "createdAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
        assert.isString(response.data.id);
    });
});