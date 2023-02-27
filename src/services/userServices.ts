import User from '../model/userModel';

class UserService{

    async getUsers(query: {}, _page: string | number, limit: string | number) {

        try {
            const users = await find(query)
            return users;
        } catch (e)  {
        throw Error('Error while Paginating Users')
    }
}}

export default new UserService()

function find(query: any) {
    throw new Error('Function not implemented.');
}
