import { assert } from "chai";
import UserAPI from "../../pages/user/user.api";
import * as data from "../../data/user";

describe('As a user, I want to login', () => {
    it('Should success try to login using valid account', async () => {
        const response = await UserAPI.login(data.VALID_LOGIN);

        assert.equal(response.status, 200);
        assert.hasAllKeys(response.data, ["token"])
        assert.isString(response.data.token)
    });

    it('Should failed try to login using invalid account', async () => {
        const response = await UserAPI.login(data.INVALID_LOGIN);

        assert.equal(response.status, 400);
        assert.hasAllKeys(response.data, ["error"])
        assert.isString(response.data.error)
    });
});
