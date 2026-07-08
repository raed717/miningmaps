type EmailTemplateProps = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

export default function EmailTemplate({
  name,
  email,
  phone,
  service,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          borderCollapse: "collapse",
          backgroundColor: "#060608",
          color: "#E4E4E7",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "32px 24px",
                borderBottom: "2px solid #FF3300",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FF3300",
                }}
              >
                New Inquiry
              </h1>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "12px",
                  color: "#888",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {service} &mdash; {name}
              </p>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "24px" }}>
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                {[
                  ["Name", name],
                  ["Email", email],
                  ["Phone", phone || "Not provided"],
                  ["Service", service],
                ].map(([label, value]) => (
                  <tr key={String(label)}>
                    <td
                      style={{
                        padding: "12px 16px 12px 0",
                        width: "120px",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#888",
                        borderBottom: "1px solid #222",
                        verticalAlign: "top",
                      }}
                    >
                      {String(label)}
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "13px",
                        color: "#E4E4E7",
                        borderBottom: "1px solid #222",
                      }}
                    >
                      {String(value)}
                    </td>
                  </tr>
                ))}
              </table>

              <div style={{ marginTop: "24px" }}>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                  }}
                >
                  Message
                </p>
                <p
                  style={{
                    margin: 0,
                    padding: "16px",
                    fontSize: "13px",
                    color: "#E4E4E7",
                    backgroundColor: "#0A0A0E",
                    border: "1px solid #222",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                  }}
                >
                  {message}
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "16px 24px", borderTop: "1px solid #222" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "10px",
                  color: "#555",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Sent via miningpropertymaps.com contact form
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
