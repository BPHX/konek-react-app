import useRestService, { RestService } from "../rest/use-rest-service";

class AuditService extends RestService {
  find() {
    return this.client.get();
  }
}

export default function useAuditService() {
  return useRestService(AuditService);
}
