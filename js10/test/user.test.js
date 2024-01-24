const users =  require('../user');

const { getUserById, getUserByUsername, validatePassword} = require('../userFuntions')

describe('User functions test', () => {
    it('should get the user by its id', () => {
        const user = getUserById(1);
        expect(user).toEqual({
            id: 1,
            username: "hpLover4",
            email: "sirious90@gmail.com",
            password: "hArrydotCo9m"
        })
    })
})