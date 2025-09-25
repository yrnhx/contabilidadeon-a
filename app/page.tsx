import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/2hdwjj7n48M?autoplay=1&mute=1&loop=1&playlist=2hdwjj7n48M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&hd=1&vq=hd1080"
              className="w-full h-full"
              style={{
                pointerEvents: "none",
                border: "none",
                width: "177.78vh", // 16:9 aspect ratio
                height: "100vh",
                minWidth: "100%",
                minHeight: "100%",
                transform: "translate(-50%, -50%) scale(1.4)",
                position: "absolute",
                top: "50%",
                left: "50%",
                objectFit: "cover",
              }}
              allow="autoplay; encrypted-media"
            />
          </div>

          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <Badge className="bg-yellow-500 text-gray-900 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 transition-all duration-300 hover:scale-105">
              Mais de 15 anos de experiência
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-500 hover:text-yellow-400">
              Contabilidade que <span className="text-yellow-400">Impulsiona</span> seu Negócio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transformamos a complexidade contábil em estratégias claras de crescimento. Sua empresa merece uma
              contabilidade que vai além dos números.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link href="https://wa.me/556784547416?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20gratuita">
                  Falar com especialista
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#servicos">Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Seção de Estatísticas */}
        <section className="py-12 sm:py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Anos de Experiência
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Clientes Atendidos
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Satisfação dos Clientes
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24h
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Tempo de Resposta
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Principais */}
        <section id="servicos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-yellow-600">
                Nossos Serviços
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soluções contábeis completas e personalizadas para cada fase do seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/contabilidade-empresarial-nova.png"
                      alt="Contabilidade Empresarial"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Contabilidade Empresarial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Escrituração completa, demonstrações financeiras, balancetes mensais e relatórios gerenciais
                    personalizados para sua tomada de decisão.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/planejamento-tributario-novo.png"
                      alt="Planejamento Tributário"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Planejamento Tributário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Estratégias legais para otimização da carga tributária, escolha do regime ideal e aproveitamento de
                    benefícios fiscais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/consultoria-fiscal.png"
                      alt="Consultoria Fiscal"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Consultoria Fiscal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Orientação especializada em obrigações acessórias, compliance fiscal e acompanhamento de mudanças na
                    legislação.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/departamento-pessoal.png"
                      alt="Departamento Pessoal"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Departamento Pessoal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Cuidamos de toda a folha de pagamento, benefícios, obrigações trabalhistas, eSocial e rotinas de RH,
                    garantindo conformidade legal e mais eficiência para o seu Departamento Pessoal.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/abertura-empresas-nova.png"
                      alt="Abertura de Empresas"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Abertura de Empresas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Constituição empresarial completa, escolha da estrutura societária ideal e regularização em todos os
                    órgãos competentes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:scale-105 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/consultoria-empresarial.png"
                      alt="Consultoria Empresarial"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 hover:text-yellow-600">
                    Consultoria Empresarial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Análise financeira, controles internos, fluxo de caixa e orientação estratégica para crescimento
                    sustentável.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Como Trabalhamos */}
        <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Como <span className="text-yellow-400">Trabalhamos</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa metodologia comprovada garante resultados excepcionais para seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Análise Inicial
                </h3>
                <p className="text-white group-hover:text-gray-300 transition-colors duration-300">
                  Avaliamos sua situação atual e identificamos oportunidades de melhoria
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Planejamento
                </h3>
                <p className="text-white group-hover:text-gray-300 transition-colors duration-300">
                  Desenvolvemos estratégias personalizadas para suas necessidades específicas
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Implementação
                </h3>
                <p className="text-white group-hover:text-gray-300 transition-colors duration-300">
                  Executamos as soluções com precisão e acompanhamento constante
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-900">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Monitoramento
                </h3>
                <p className="text-white group-hover:text-gray-300 transition-colors duration-300">
                  Acompanhamos os resultados e fazemos ajustes quando necessário
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por que a Onça Contabilidade é a Escolha Certa */}
        <section id="sobre" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Por que a <span className="text-yellow-500">Onça Contabilidade</span> é a Escolha Certa?
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiência Comprovada</h3>
                      <p className="text-gray-600">
                        Mais de 15 anos no mercado, atendendo empresas de todos os portes com excelência e dedicação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Tecnologia Avançada</h3>
                      <p className="text-gray-600">
                        Utilizamos as mais modernas ferramentas tecnológicas para garantir precisão e agilidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte Dedicado</h3>
                      <p className="text-gray-600">
                        Equipe especializada sempre disponível para esclarecer dúvidas e oferecer suporte completo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/logo-onca-nova.png"
                  alt="Logo Onça Contabilidade"
                  className="w-80 h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 transition-all duration-300 hover:text-yellow-400">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Conheça os pilares que guiam nossa atuação e nosso compromisso com a excelência
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    Nossa Missão
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    Oferecer soluções contábeis e fiscais de excelência, proporcionando segurança jurídica e otimização
                    de resultados para nossos clientes, contribuindo para o crescimento sustentável de seus negócios
                    através de um atendimento personalizado e consultivo.
                  </p>
                </div>
              </div>

              {/* Visão */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 11-8 0 2 2 0 018 0z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    Nossa Visão
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    Ser reconhecida como a principal referência em serviços contábeis na região, destacando-se pela
                    inovação, qualidade técnica e relacionamento próximo com os clientes, sendo parceira estratégica no
                    desenvolvimento empresarial.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    Nossos Valores
                  </h3>
                  <div className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 space-y-2">
                    <p>
                      <strong className="text-yellow-400">Ética:</strong> Transparência e honestidade em todas as
                      relações
                    </p>
                    <p>
                      <strong className="text-yellow-400">Excelência:</strong> Busca contínua pela qualidade superior
                    </p>
                    <p>
                      <strong className="text-yellow-400">Inovação:</strong> Adoção de tecnologias e métodos modernos
                    </p>
                    <p>
                      <strong className="text-yellow-400">Compromisso:</strong> Dedicação total aos resultados dos
                      clientes
                    </p>
                    <p>
                      <strong className="text-yellow-400">Proximidade:</strong> Relacionamento próximo e consultivo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contato"
          className="py-16 sm:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/cta-background-new.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-yellow-500/20"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Pronto para Transformar sua <span className="text-yellow-400">Contabilidade</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos impulsionar o crescimento do seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link href="https://wa.me/556784547416?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Onça%20Contabilidade">
                  Fale Conosco
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="tel:+556784547416">Ligar Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/556784547416?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Onça%20Contabilidade"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
