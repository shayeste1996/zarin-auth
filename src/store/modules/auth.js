import { AUTH_REQUEST } from "../actions/auth";
import instance from "../../axiosInstance";
const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, authData) => {
    instance.post("/api/oauth/initialize", { username: authData }).then(res => {
      console.log(res);
    });
  }
};
export default { actions };
