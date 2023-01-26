import useRestService, { RestService } from "../rest/use-rest-service";

class RoleService extends RestService {
  getRolePermissions(id) {
    return this.client.get(`/role/${id}/permissions`).then(({ data }) => data);
  }

  getPermissions() {
    return this.client.get(`/permission`).then(({ data }) => data);
  }

  getRoles(search) {
    return this.client
      .get(`/role`, { params: { search } })
      .then(({ data }) => data);
  }

  createUser(r) {
    return this.client.post(`/role/`, r).then(({ data }) => data);
  }

  updateUser(r) {
    return this.client.put(`/role/${r?.id}`, r).then(({ data }) => data);
  }
}

export default function useRoleService() {
  return useRestService(RoleService);
}
