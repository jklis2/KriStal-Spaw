import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">🔥 404 🔥</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ups! Ta strona się dopiero spawa...</h2>
      <p className="text-gray-600 mb-6 max-w-lg">
        Wygląda na to, że trafiłeś w miejsce, gdzie iskry lecą, ale strona jeszcze nie zdążyła ostygnąć. 
        Może jest na warsztacie, a może ktoś zapomniał przyłożyć elektrody... 🤷‍♂️
      </p>
      <p className="text-gray-500 italic mb-6">💡 Pro tip: Jeśli szukasz czegoś konkretnego, skontaktuj się z nami – pomożemy szybciej niż elektroda się nagrzewa!</p>
      <Link href="/" legacyBehavior>
        <a
          className="inline-block bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
             rounded transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
             transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Wróć na stronę główną</span>
          <div className="absolute inset-0 bg-ctaOrange transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </a>
      </Link>
    </div>
  );
}