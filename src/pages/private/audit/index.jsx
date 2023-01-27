/* eslint-disable no-unused-vars */
import React from "react";
import Page from "../../../components/page/page";
import useAuditService from "../../../hooks/audit/use-audit-service";
import AuditListing from "./audit-listing";

function AuditLogs() {
  const [loading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);

  const service = useAuditService();

  React.useEffect(() => {
    setLoading(true);
    service
      .list()
      .then((data) => setEvents(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Page title="Audit Logs">
      <AuditListing data={events} loading={loading} />
    </Page>
  );
}

export default AuditLogs;
