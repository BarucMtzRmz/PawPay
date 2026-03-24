🐾 PawPay: Transparencia Inmutable para el Bienestar Animal

Proyecto desarrollado para el Solana Latam Hackathon - Marzo 2026

Ubicación del Proyecto: Santiago de Querétaro, México.

📖 El Problema

En ciudades como Querétaro, el rescate animal depende de la buena voluntad de la comunidad. Sin embargo, existe una brecha de confianza: los donantes a menudo dudan si su dinero realmente llega al refugio o si se pierde en intermediarios y comisiones bancarias.

🚀 La Solución: PawPay

PawPay es una plataforma de recaudación de fondos construida sobre la blockchain de Solana, diseñada para ofrecer transparencia radical y eficiencia operativa a los refugios de animales.

🎥 Video Demo
> **¡Mira PawPay en acción en 3 minutos!**
> 
> [▶️ Haz clic aquí para ver el video en Loom](https://www.loom.com/share/fcf3dd219c284138a917240edd347560)

### 🌐 Demo en Vivo (Frontend Showcase)
> **¡Experimenta el flujo de donación y emisión de cNFTs de PawPay!**
> 
> [🔗 Abrir Demo Interactiva en StackBlitz](https://stackblitz.com/edit/vitejs-vite-p6o2kszr?file=src%2FApp.jsx)

Características Principales:

Estabilidad con USDC: Las donaciones se procesan en USDC para proteger a los refugios de la volatilidad del mercado, asegurando que el presupuesto para alimento y medicinas sea predecible.

Impact Receipts (cNFTs): Cada donante recibe un Certificado de Impacto digital utilizando Solana State Compression. Esto permite incentivar la ayuda con costos de red insignificantes.

Trazabilidad On-chain: Cada peso (token) puede ser rastreado desde la wallet del donante hasta la bóveda del refugio a través de la ledger pública de Solana.

🛠️ Stack Tecnológico

Smart Contract: Rust & Anchor Framework.

Tokens: SPL-Token Standard (USDC en Devnet).

Compresión: Lógica de cNFTs preparada para Metaplex Bubblegum.

Entorno: Solana Playground / Devnet.

📊 Evidencia Técnica (Demo)

Program ID en Devnet:
HKnWqeUwmZ2T6JAqVv3c4iWjKprkXBTnQiuXujzwd5Vk

Transacciones de Prueba:
Creación de Campaña: https://explorer.solana.com/tx/537SqepEXnJkYWntBJYwYB473ideb7HjcnfCKRtvGdKSv1EhhkzizZj52PewBX6uBWUtTbUvZSWEDiQsgm8u9JUZ?cluster=devnet

Donación Exitosa: https://explorer.solana.com/tx/38AKMcikCNwb36n6KdNptFcj7XAKdyWfMfAJZQs5nyCRYSoErQ7xBPZqVeP8XHEYbH1HQrjrT33Hyi39RpsfWsmf?cluster=devnet

💻 Instrucciones para Desarrolladores

Para replicar las pruebas en Solana Playground:

Importar el archivo lib.rs en el entorno de Rust.

Desplegar en Devnet (asegúrate de tener al menos 2 SOL de balance).

Ejecutar el script de prueba en client.ts:
run

Ejemplo de Salida en Terminal:

🚀 Iniciando pruebas de PawPay...

✅ Campaña creada exitosamente!

💰 Intentando donar 10 USDC...

✅ Donación completada!

🎨 Generando Certificado de Impacto (cNFT)...

✅ cNFT emitido exitosamente! (State Compression)

📈 Visión a Futuro

Integración de Blinks: Permitir que los refugios compartan links de donación directa en X (Twitter) mediante Solana Actions.

Dashboard para Refugios: Una interfaz web sencilla donde los rescatistas de Querétaro puedan gestionar sus metas.

Gobernanza: Permitir que los donantes voten en qué se gasta el fondo común (ej. alimento vs. cirugías).

👤 Autor

José Baruc Martínez Ramírez
Estudiante de Ingeniería en Sistemas Computacionales (UVEG), entusiasta de la tecnología Blockchain y del desarrollo de software con impacto social.
