import React from "react";
import { MenuItem, Select, ListItemText, Checkbox } from "@mui/material";
import Page from "../../../components/page/page";
import useAuditService from "../../../hooks/audit/use-audit-service";
import AuditListing from "./audit-listing";

const AUDIT_TYPES = ["USER_CREATED", "USER_UPDATED", "ROOM_CREATED"];

function AuditLogs() {
  const [loading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);
  const [types, setTypes] = React.useState(AUDIT_TYPES);

  const service = useAuditService();

  React.useEffect(() => {
    setLoading(true);
    service
      .list(types)
      .then((data) => setEvents(data))
      .finally(() => setLoading(false));
  }, [types]);

  return (
    <Page
      title="Audit Logs"
      right={
        <Select
          value={types}
          onChange={(evt) => setTypes(evt.target.value)}
          sx={{ width: { xs: "100%", md: "200px", height: "40px" } }}
          renderValue={(selected) => {
            if (selected.length === AUDIT_TYPES.length) return "ALL";
            if (!selected) return "No Selected";
            return selected.map((s) => s.replace("_", " ")).join(", ");
          }}
          placeholder="No Items Selected"
          multiple
        >
          {AUDIT_TYPES.map((t) => (
            <MenuItem value={t} key={t}>
              <Checkbox checked={types.indexOf(t) > -1} />
              <ListItemText primary={t.replace("_", " ")} />
            </MenuItem>
          ))}
        </Select>
      }
    >
      <AuditListing data={events} loading={loading} />
    </Page>
  );
}

export default AuditLogs;
