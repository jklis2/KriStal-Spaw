import { whyUsItems } from "@/consts/whyUsItems";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FeatureCard from "@/components/ui/FeatureCard";


export default function WhyUs() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-white content-auto"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-weldingRed/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-ctaOrange/5 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Dlaczego Warto Nam Zaufać?"
          subtitle="NASZE ATUTY"
          useParagraphs={true}
        >
          <p className="mb-6">
            Precyzja wykonania, fachowe doradztwo oraz dbałość o każdy detal to fundament naszej działalności. Tworzymy konstrukcje stalowe, które mają nie tylko nowoczesny wygląd, ale przede wszystkim trwałość i odporność na lata użytkowania. Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania do specyficznych potrzeb i oczekiwań klienta. Nasza filozofia opiera się na przekonaniu, że jakość nie może być przypadkowa — wymaga wiedzy, doświadczenia i konsekwencji na każdym etapie realizacji.
          </p>
          
          <p className="mb-6">
            Wszystkie zewnętrzne elementy stalowe — bramy, ogrodzenia, balustrady, balkony czy tarasy — przygotowujemy zgodnie ze sztuką ślusarską oraz odpowiednią technologią zabezpieczenia stali. Konstrukcje przeznaczone na zewnątrz poddajemy ocynkowaniu ogniowemu, które skutecznie chroni stal przed korozją oraz działaniem warunków atmosferycznych. Ten proces zapewnia wieloletnią ochronę nawet w najtrudniejszych warunkach pogodowych — od mroźnych zim po upalne lata. Ocynkowanie ogniowe tworzy trwałą powłokę cynkową, która stanowi barierę fizyczną i elektrochemiczną, chroniącą stal przed rdzą przez dziesiątki lat.
          </p>
          
          <p className="mb-6">
            Potwierdzeniem prawidłowego przygotowania konstrukcji do ocynku są odpowiednio wykonane otwory technologiczne, umożliwiające dokładne zabezpieczenie również wewnętrznych części profili stalowych. To detal często niewidoczny dla klienta, jednak mający ogromny wpływ na trwałość całej konstrukcji. Dzięki właściwemu przygotowaniu powierzchni, cynk może dotrzeć do każdego zakamarka, tworząc jednolitą warstwę ochronną. Każdy profil zamknięty musi być wyposażony w odpowiednie otwory wentylacyjne i odpływowe, które umożliwiają swobodny przepływ ciekłego cynku podczas procesu zanurzania w kąpieli cynkowej.
          </p>
          
          <p className="mb-6">
            Niewłaściwa kolejność obróbki i zabezpieczenia stali będzie skutkować pojawieniem się korozji w miejscach łączeń i spawów. Dlatego tak dużą uwagę przykładamy do prawidłowego przygotowania konstrukcji oraz zachowania pełnej ochrony antykorozyjnej każdego elementu. Wierzymy, że trwałość i jakość wykonania zaczyna się od detali technologicznych, których często nie widać na pierwszy rzut oka, lecz to właśnie one decydują o niezawodności konstrukcji przez długie lata użytkowania. Spawy wykonujemy zgodnie z normami, a następnie poddajemy je odpowiedniej obróbce, aby zapewnić pełną adhezję powłoki cynkowej również w tych krytycznych miejscach.
          </p>
          
          <p className="mb-6">
            Tworzymy konstrukcje, które bronią się jakością — zarówno wizualnie, jak i technologicznie. Solidność, estetyka oraz uczciwe wykonanie to wartości, na których budujemy zaufanie naszych klientów. Nasze realizacje to inwestycja w bezpieczeństwo i komfort na lata, poparta wieloletnim doświadczeniem i pasją do pracy ze stalą. Każda konstrukcja opuszczająca naszą pracownię jest efektem staranności, profesjonalizmu i zaangażowania całego zespołu. Nie idziemy na kompromisy w kwestii jakości, bo wiemy, że nasze wyroby służą ludziom przez wiele lat i muszą spełniać najwyższe standardy.
          </p>
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyUsItems.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.Icon}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <CTAButton href="/o-nas" icon={<FaArrowRight />}>
            Poznaj nas lepiej
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
