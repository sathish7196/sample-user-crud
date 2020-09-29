
const userModel = require('../model/userModel')

const createUser = async (req, res) => {

    try {
        const insUser = await userModel.createUser(req.body);
        if (insUser.insertedCount) {
            return res.status(200).json({
                success: true,
                statusCode: 200,
                data: {},
                message: 'User Created Successfully'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            data: error,
            message: 'Internal Server Error'
        });
    }

}

const getUsers = async (req, res) => {
    try {
        const userslist = await userModel.getUsers();
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: userslist,
            message: 'Data Fetch Successfully',
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            data: error,
            message: 'Internal Server Error'
        })
    }

}

const updateUser = async (req, res) => {

    try {
        const updUser = await userModel.updateUser(req.body);
        if (updUser.modifiedCount) {
            return res.status(200).json({
                success: true,
                statusCode: 200,
                data: {},
                message: 'User Updated Successfully'
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            data: error,
            message: 'Internal Server Error'
        });
    }

}

const deleteUser = async (req, res) => {

    try {
        const delUser = await userModel.deleteUser(req.body);
        if (delUser.deletedCount) {
            return res.status(200).json({
                success: true,
                statusCode: 200,
                data: {},
                message: 'User Deleted Successfully'
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            data: error,
            message: 'Internal Server Error'
        });
    }

}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}