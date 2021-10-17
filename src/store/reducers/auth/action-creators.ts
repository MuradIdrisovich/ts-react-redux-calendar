import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers() // получили [{username: string, password: string},{...}...]
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true'); // закидываем в localStorage
                    localStorage.setItem('username', mockUser.username); // закидываем username: 'значение' в localStorage
                    dispatch(AuthActionCreators.setUser(mockUser));  // затем {username:...,password:...} идет в initialState.user
                    dispatch(AuthActionCreators.setIsAuth(true))     // initialState = {isAuth:true,user:mockUser,isLoading:true,error:false}
                } else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')           // очистили localStorage от 'auth' и 'username'
        dispatch(AuthActionCreators.setUser({} as IUser)); // также в initialState  user  очищаем (ставим пуст. объект)
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}
