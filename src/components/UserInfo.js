export default class UserInfo {
  constructor({userNameSelector, userInfoSelector, userAvatarSelector}){
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo(){
    const data = {};
    data.userName = this._userName.textContent;
    data.userInfo = this._userInfo.textContent;

    return data;
  }

  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
  }

  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}