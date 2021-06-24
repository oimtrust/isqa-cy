import { assert } from "chai";
import UserAPI from "../../pages/user/user.api";
import * as data from "../../data/user";

describe('As a user, I want to register', () => {
    it('Should successfull register new account using valid data', async () => {
        const response = await  UserAPI.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });

    it('Should failed try to register using invalid data', async () => {
        const response = await UserAPI.register(data.INVALID_REGISTER);

        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, ["error"]);
        assert.isString(response.data.error);
    });
});
