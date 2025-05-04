import zipfile
import os
import { SpeedInsights } from '@vercel/speed-insights/next';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

# Criando a estrutura de pastas e arquivos para o projeto React
project_root = "/mnt/data/voltagem-energia-site"
os.makedirs(f"{project_root}/public", exist_ok=True)
os.makedirs(f"{project_root}/src", exist_ok=True)

# Criando um index.html fictício para public
with open(f"{project_root}/package.json", "w") as f:
    f.write("""
{
  "name": "voltagem-energia",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.1",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.297.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
""")

# Criando src/index.js
with open(f"{project_root}/src/index.js", "w") as f:
    f.write("""
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
""")

# Criando src/App.js com o conteúdo do canvas
app_js_content = """
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";

export default function App() {
  return (
    <div className="bg-green-50 min-h-screen font-sans">
      <header className="bg-green-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Voltagem Energia</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">Sobre</a>
            <a href="#services" className="hover:underline">Serviços</a>
            <a href="#contact" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-green-700 mb-4">
          Energia confiável para o seu negócio
        </motion.h2>
        <p className="text-green-800 text-lg mb-6">
          Somos parceiros credenciados da Setemac e oferecemos soluções completas em geradores e energia.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition">
          Saiba Mais
        </button>
      </section>

      <section id="about" className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="https://via.placeholder.com/500x300" alt="Sobre Nós" className="rounded-lg shadow" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Sobre a Voltagem Energia</h3>
            <p className="text-green-900 mb-4">
              Com anos de experiência no mercado, oferecemos as melhores soluções em energia para empresas de todos os portes. Trabalhamos com equipamentos modernos e equipe altamente qualificada.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Garantia de qualidade</li>
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Atendimento especializado</li>
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Suporte técnico 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 bg-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-green-700 mb-2">Aluguel de Geradores</h4>
              <p className="text-green-900">Oferecemos aluguel de geradores para eventos, obras e emergências.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-green-700 mb-2">Manutenção Preventiva</h4>
              <p className="text-green-900">Equipe especializada para manter seus equipamentos sempre funcionando.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-green-700 mb-2">Consultoria em Energia</h4>
              <p className="text-green-900">Planejamento e soluções customizadas para sua empresa economizar energia.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Fale Conosco</h3>
          <p className="text-green-900 mb-6">Entre em contato para orçamentos e mais informações.</p>
          <div className="flex justify-center space-x-6">
            <a href="tel:+5500000000" className="flex items-center text-green-700 hover:underline"><Phone className="mr-2" /> (00) 0000-0000</a>
            <a href="mailto:contato@voltagemenergia.com" className="flex items-center text-green-700 hover:underline"><Mail className="mr-2" /> contato@voltagemenergia.com</a>
          </div>
        </div>
      </section>

      <footer className="bg-green-600 text-white text-center p-4">
        &copy; 2025 Voltagem Energia. Todos os direitos reservados.
      </footer>
    </div>
  );
}
"""

with open(f"{project_root}/src/App.js", "w") as f:
    f.write(app_js_content)

# Criando src/index.css
with open(f"{project_root}/src/index.css", "w") as f:
    f.write("body { margin: 0; font-family: sans-serif; }")

# Compactando o projeto em ZIP
zip_path = "/mnt/data/voltagem-energia-site.zip"
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, _, files in os.walk(project_root):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, project_root)
            zipf.write(file_path, arcname)

zip_path