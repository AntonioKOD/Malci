import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";

export interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  phone,
  service,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={{ backgroundColor: "#f4f4f7", padding: "20px" }}>
      <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
          📩 New Contact Request
        </Text>
        <Hr />
        <Section style={{ margin: "16px 0" }}>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Phone:</strong> {phone || "—"}
          </Text>
          <Text>
            <strong>Service Interested In:</strong> {service || "—"}
          </Text>
        </Section>
        <Hr />
        <Section style={{ margin: "16px 0" }}>
          <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Message:</Text>
          <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
        </Section>
        <Hr />
        <Section style={{ textAlign: "center", marginTop: "24px" }}>
          <Text>If you’d like to reply, simply hit “Reply” in your email client.</Text>
          <Button
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block",
              marginTop: "12px",
              padding: "12px 20px",
            }}
            href={`mailto:${email}?subject=Re:%20Your%20Service%20Inquiry`}
          >
            Reply to {name}
          </Button>
        </Section>
        <Text style={{ fontSize: "12px", color: "#888888", marginTop: "24px" }}>
          Sent via Contact Form
        </Text>
      </Container>
    </Body>
  </Html>
);