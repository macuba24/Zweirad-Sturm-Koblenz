import { H1, Stack, Text, useHostTheme } from "cursor/canvas";

const PAYLOAD = "https://zweirad-sturm-koblenz.onrender.com";

const QR_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbwAAAG8AQAAAACNyy1yAAABvUlEQVR42u2cQY4DIQwErXyA//+SHxBFENMme5rD0odCUYRGU5dVyWkMbIxnowcgICAgICAgICDgv4GRo63nOV/f5wuveDgAAR+O5WobOUlFP5Mec6Iv4CrgXVdnzZyTWW+1tOoLuAro4moaO5a3uAro6eqnqM662ka+g6uAhnk1V1u5+CKvAhq5Ksv8vz/0AQA9XNWxn/fStqrNLv6qgPczgLYCVnad0nZxG1cBr7pahPxOlrezG4CrgB4ZYD/sUQJqllYyAKCDqz20YaW9rCy5uAro4Kqu9097xziTLa4CXsyrdTG1T7BE5EbATgK4Cni3rkaRU09h6ckrXAW8vhdQtlblkFWKyh4roM/aKmIngXxhH2qlrgKa5FVdRklP9fjGVcDLGeDYmcrtAEkC9AEAHerq8YuvVbR0AMgAgAYZoHQAanOVDABotLbSnda2OwO7ugb7VoAeeTW2lkcjS++w4Crg/QxQtlCjFNhWz2LhKqDVfatjI+BbY6mrgFau5gorM0CxF1cBTVyV89V6I6CsxXAV0CavltOAfV+/oq4C+vQBssD+3LGiDwB431X+MR0gICAgICAgIKAl+AbtupTUCWak4wAAAABJRU5ErkJggg==";

export default function ZweiradSturmQrKarte() {
  const theme = useHostTheme();

  return (
    <Stack gap={16} style={{ padding: 24, background: theme.bg.editor, alignItems: "center" }}>
      <Stack
        gap={14}
        style={{
          width: "100%",
          maxWidth: 460,
          alignItems: "center",
          background: "#3a3a3a",
          border: "8px solid #f15a00",
          borderRadius: 28,
          padding: "28px 24px",
        }}
      >
        <svg width={18} height={18} viewBox="0 0 10 10" aria-hidden="true">
          <polygon points="5,0.4 9.6,5 5,9.6 0.4,5" fill="#f15a00" />
        </svg>
        <H1 style={{ margin: 0, color: "#f15a00", letterSpacing: "0.14em", textAlign: "center" }}>ZWEIRAD STURM</H1>
        <Text style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          Dein KTM, Husqvarna und GASGAS Motorradshop
        </Text>
        <img
          src={QR_PNG}
          alt="QR-Code für die Zweirad-Sturm-Kundenapp"
          width={360}
          height={360}
          style={{ display: "block", width: 360, height: 360, background: "#ffffff" }}
        />
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          Zweirad Sturm GmbH
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          03725 - 82 519
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          Mo-Fr: 09:00-12:00, 13:00-18:00 Uhr
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          Sa: 09:00 - 12:00 Uhr
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          Telefonische Unterstützung und Beratung: Mo-Fr: 10:00-12:00, 14:00-18:00 Uhr, Sa: 09:00 - 12:00 Uhr
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          KTM, Husqvarna, GASGAS, CFMOTO, Ersatzteile
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          https://www.ktm-sturm.de/
        </Text>
        <Text size="small" style={{ margin: 0, color: "#ffffff", textAlign: "center" }}>
          {PAYLOAD}
        </Text>
      </Stack>
    </Stack>
  );
}
