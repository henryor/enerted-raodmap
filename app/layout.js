import './globals.css'

export const metadata = {
  title: 'ENERTED Innovación - Plan Estratégico 2025',
  description: 'Roadmap estratégico para automatización industrial y energía fotovoltaica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
