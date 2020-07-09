import {action} from "mobx";
import axios from "axios";
import {USER_URL} from "../constant/HttpProperty";

const TARGET_URL = `${USER_URL}`;

export default class FriendRepository {
    fetchFriend = async () => {
        try {
            const response = await axios.get(`${TARGET_URL}/read105/friends`);
            let list=  response.data.data.friendList;
            for (const temp of list) {
                console.log(temp.name);
            }
            return list
        } catch (error) {
            console.error(error);
            return error
        }
    }
}