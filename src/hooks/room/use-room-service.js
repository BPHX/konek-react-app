import useRestService, { RestService } from "../rest/use-rest-service";

class RoomService extends RestService {
  getRoom(id) {
    return this.client.get(`/room/${id}`);
  }

  getRoomToken(id) {
    return this.client.post(`/room/${id}/token`, {
      publisher: true,
    });
  }
}

export default function useRoomService() {
  return useRestService(RoomService);
}
