import useRestService, { RestService } from "../rest/use-rest-service";

class AuditService extends RestService {
  list(types) {
    return this.client.get(`/audit`, {
      params: { types },
    });
  }
}

export default function useAuditService() {
  return useRestService(AuditService);
}
