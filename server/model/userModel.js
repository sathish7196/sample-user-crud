const mongodbCon = require('../db/mongodb-connect');

const createUser = async (formData, next) => {
    try {
        const id = Math.random().toString(36).slice(-8);
        const insUser = mongodbCon.getdb().collection('users').insertOne({ id, ...formData });
        return insUser;
    } catch (error) {
        throw new Error(`Error While Performing Query ${error}`)
    }
}

const getUsers = async () => {
    try {
        const usersData = mongodbCon.getdb().collection('users').find().toArray();
        return usersData;
    } catch (error) {
        throw new Error(`Error While Performing Query ${error}`)
    }
}

const updateUser = async (formData, next) => {
    try {
        const updateId = { "id": formData.id };
        const updateVal = {
            "name": formData.name,
            "age": formData.age,
            "address": formData.address,
            "emailId": formData.emailId,
            "mobileNo": formData.mobileNo
        }
        const updUser = mongodbCon.getdb().collection('users').updateOne(updateId, { $set: updateVal });
        return updUser;
    } catch (error) {
        throw new Error(`Error While Performing Query ${error}`)
    }
}

const deleteUser = async (formData, next) => {
    try {
        const delId = { "id": formData.id };
        const delUser = mongodbCon.getdb().collection('users').deleteOne(delId);
        return delUser;
    } catch (error) {
        throw new Error(`Error While Performing Query ${error}`)
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}