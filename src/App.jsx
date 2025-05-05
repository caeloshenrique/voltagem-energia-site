import React from "react";
import { Phone, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Engenharia Pro</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">Sobre</a>
            <a href="#services" className="hover:underline">Serviços</a>
            <a href="#projects" className="hover:underline">Projetos</a>
            <a href="#contact" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="bg-blue-900 bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Soluções elétricas de alta performance</h2>
          <p className="text-lg mb-6">Projetos e execução com excelência e segurança.</p>
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow">Saiba mais</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">Sobre Nós</h3>
        <p className="text-gray-700 mb-6">Somos uma empresa especializada em engenharia elétrica, com mais de 15 anos no mercado, oferecendo soluções inovadoras para indústrias e comércios.</p>
        <img src="/about-image.jpg" alt="Equipe de trabalho" className="rounded shadow mx-auto" />
      </section>

      {/* Services */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-blue-800 mb-2">Projetos Elétricos</h4>
              <p className="text-gray-700">Elaboração e execução de projetos elétricos industriais e comerciais.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-blue-800 mb-2">Manutenção</h4>
              <p className="text-gray-700">Manutenção preventiva e corretiva para garantir a segurança e o funcionamento contínuo.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-blue-800 mb-2">Consultoria</h4>
              <p className="text-gray-700">Análise de eficiência energética, redução de custos e modernização de sistemas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">Contato</h3>
        <p className="text-gray-700 mb-6">Entre em contato para orçamentos e informações.</p>
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Phone className="text-blue-700" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-blue-700" />
            <span>contato@engenhariapro.com</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        &copy; 2025 Engenharia Pro. Todos os direitos reservados.
      </footer>
    </div>
  );
}
