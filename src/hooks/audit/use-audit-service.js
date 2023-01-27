import useRestService, { RestService } from "../rest/use-rest-service";

class AuditService extends RestService {
  list() {
    return this.client.get(`/audit`, { params: {} });
  }
}

export default function useAuditService() {
  return useRestService(AuditService);
}
