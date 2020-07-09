import { observable, action, computed } from 'mobx';
import UserRepository from '../repository/UserRepository';
import { USER_STATUS } from '../constant/UserStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import UserTable from '../table/UserTable';
import axios from "axios";

export default class FriendListStore {

    @observable userList=[];
    @observable connectStatus = false;

    @action fetchFriend = async () => {
        console.log(this.USER_ID);
        try {
            const response = await axios.get(`http://ec2-3-34-97-95.ap-northeast-2.compute.amazonaws.com/v1/users/read105/friends`);
            this.userList=response.data.data.friendList;
            console.log(this.userList);
            this.connectStatus=true
        } catch (error) {
            console.error(error);
        }
    }

    // @computed get isSuccessLoadingFriednList(){
    //     this.connectStatus===true ? this.getFriend : console.log('fail connect and fetch FriendList')
    // }
    //
    // @computed get getFriend(){
    //     console.log('getFriend\n')
    //     return true===this.connectStatus ? this.userList : []
    // }
}
