import useRestService, { RestService } from "../rest/use-rest-service";

class RoleService extends RestService {
  getRolePermissions(id) {
    return this.client.get(`/role/${id}/permissions`);
  }

  getPermissions() {
    return this.client.get(`/permission`);
  }

  list(search) {
    return this.client.get(`/role`, { params: { search } });
  }

  create(r) {
    return this.client.post(`/role/`, r);
  }

  update(r) {
    return this.client.put(`/role/${r?.id}`, r);
  }
}

export default function useRoleService() {
  const service = useRestService(RoleService);
  return service;
}
