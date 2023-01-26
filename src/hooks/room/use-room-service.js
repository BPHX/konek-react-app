import useRestService, { RestService } from "../rest/use-rest-service";

class RoomService extends RestService {
  getRoom(id) {
    return this.client.get(`/room/${id}`).then(({ data }) => data);
  }

  getRoomToken(id) {
    return this.client
      .post(`/room/${id}/token`, {
        publisher: true,
      })
      .then(({ data }) => data);
  }
}

export default function useRoomService() {
  return useRestService(RoomService);
}
