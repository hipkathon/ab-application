import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { persist } from 'mobx-persist';
import UserEntity from '../interfaces/user';
import api from '../utils/api';
import hydrate from './hydrate';

export interface RegisterAccountPayload {
  birthday: string
  isMan: boolean
}

export class AccountStore {
  @persist('object')
  @observable
  private account: UserEntity

  constructor() {
    makeObservable(this)
  }

  @action
  public async setAccount(registerAccountPayload: RegisterAccountPayload) {
    try {
      const providedUser = (
        await api.post<UserEntity>(
        'users',
        registerAccountPayload
      )).data

      runInAction(() => {
        this.account = providedUser
      })
      return this.account;
    } catch (e) {
      console.error('api has been failed to fetch the user data');
      console.error(e)

      return null;
    }
  }

  @computed
  public get getAccount() {
    return this.account;
  }
}

const store = new AccountStore();

if (typeof window !== 'undefined') {
  hydrate('account#23', store);
}

export default store;
