import useRestService, { RestService } from "../rest/use-rest-service";

class UserService extends RestService {
  getCurrentUser() {
    return this.client.get(`/whoami`).then(({ data }) => data);
  }

  isAuthorized(permissions) {
    return this.client
      .post(`/verify`, { permissions })
      .then(({ data }) => data);
  }

  getCurrentUserPermissions() {
    return this.client.get(`/whoami/permissions`).then(({ data }) => data);
  }

  getUsers(search) {
    return this.client
      .get(`/user`, { params: { search } })
      .then(({ data }) => data);
  }

  createUser(u) {
    return this.client.post(`/user/`, u).then(({ data }) => data);
  }

  updateUser(u) {
    return this.client.put(`/user/${u?.id}`, u).then(({ data }) => data);
  }
}

export default function useUserService() {
  const service = useRestService(UserService);
  return service;
}
