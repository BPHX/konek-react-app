import useRestService, { RestService } from "../rest/use-rest-service";

class UserService extends RestService {
  getCurrentUser() {
    return this.client.get(`/whoami`);
  }

  isAuthorized(permissions) {
    return this.client.post(`/verify`, { permissions });
  }

  getCurrentUserPermissions() {
    return this.client.get(`/whoami/permissions`);
  }

  getUsers(search) {
    return this.client.get(`/user`, { params: { search } });
  }

  create(u) {
    return this.client.post(`/user/`, u);
  }

  update(u) {
    return this.client.put(`/user/${u?.id}`, u);
  }
}

export default function useUserService() {
  const service = useRestService(UserService);
  return service;
}
