import { observable, action, computed } from 'mobx';
import UserRepository from '../repository/UserRepository';
import { USER_STATUS } from '../constant/UserStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import UserTable from '../table/UserTable';
import axios from "axios";
import FriendRepository from "../repository/FriendRepository";

export default class FriendListStore {

    friendRepository = new FriendRepository();

    @observable friendList=[];

    @observable connectStatus = false;

    @action ready = async () =>{
         this.friendList = await this.friendRepository.fetchFriend();
         // console.log(this.friendList)
    }
    // @computed get isSuccessLoadingFriednList(){
    //     this.connectStatus===true ? this.getFriend : console.log('fail connect and fetch FriendList')
    // }
    //
    @computed get getFriend(){
        return this.friendList
    }
}
