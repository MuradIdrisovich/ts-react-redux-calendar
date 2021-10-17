import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {  // т.к. функц. асинхронная она всегда возвр. promise
        return axios.get<IUser[]>('./users.json')           // указав что функц. getUsers() - static знач.
    }                                                           // можем вызывать без создания экземпляра класса
}
