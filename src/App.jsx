```jsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";

export default function App() {
  return (
    <div className="bg-green-50 min-h-screen font-sans">
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Voltagem Energia</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">Sobre</a>
            <a href="#services" className="hover:underline">Serviços</a>
            <a href="#contact" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <img src="/images/hero.jpg" alt="Energia" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white text-center">
            Soluções inteligentes em energia
          </motion.h2>
        </div>
      </section>

      <section id="about" className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/images/about.jpg" alt="Sobre Nós" className="rounded-lg shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Sobre Nós</h3>
            <p className="text-green-900 mb-4">
              Somos líderes no fornecimento de energia eficiente para empresas e eventos. Nossa missão é garantir que sua operação nunca pare, com equipamentos de última geração e uma equipe dedicada.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Experiência comprovada</li>
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Atendimento sob medida</li>
              <li className="flex items-center text-green-800"><CheckCircle className="mr-2" /> Resultados garantidos</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 bg-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="/images/services.jpg" alt="Aluguel" className="w-full h-40 object-cover mb-4 rounded" />
              <h4 className="font-bold text-green-700 mb-2">Aluguel de Geradores</h4>
              <p className="text-green-900">Geradores modernos para manter seu evento ou obra sem interrupções.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="/images/services.jpg" alt="Manutenção" className="w-full h-40 object-cover mb-4 rounded" />
              <h4 className="font-bold text-green-700 mb-2">Manutenção</h4>
              <p className="text-green-900">Serviços preventivos e corretivos realizados por técnicos especializados.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src="/images/services.jpg" alt="Consultoria" className="w-full h-40 object-cover mb-4 rounded" />
              <h4 className="font-bold text-green-700 mb-2">Consultoria</h4>
              <p className="text-green-900">Planejamento energético personalizado para reduzir custos e otimizar recursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Contato</h3>
          <p className="text-green-900 mb-6">Entre em contato e descubra como podemos ajudar seu negócio a crescer.</p>
          <div className="flex justify-center space-x-6">
            <a href="tel:+5500000000" className="flex items-center text-green-700 hover:underline"><Phone className="mr-2" /> (00) 0000-0000</a>
            <a href="mailto:contato@voltagemenergia.com" className="flex items-center text-green-700 hover:underline"><Mail className="mr-2" /> contato@voltagemenergia.com</a>
          </div>
        </div>
      </section>

      <footer className="bg-green-700 text-white text-center p-4">
        &copy; 2025 Voltagem Energia. Todos os direitos reservados.
      </footer>
    </div>
  );
}
```