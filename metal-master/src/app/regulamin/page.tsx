import React from 'react';

export default function Terms() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-background-light shadow-lg rounded-lg overflow-hidden p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8 font-oswald">Regulamin</h1>
        
        <p className="text-sm italic text-center opacity-70 mb-8">
          Ostatnia aktualizacja: 8 kwietnia 2025
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">1. Postanowienia ogólne</h2>
          <p className="mb-4">
            Niniejszy regulamin określa zasady korzystania z serwisu internetowego Kristal-Spaw, dostępnego pod adresem [adres strony internetowej], zwanego dalej "Serwisem".
          </p>
          <p className="mb-4">
            Właścicielem i administratorem Serwisu jest Kristal-Spaw z siedzibą w [adres siedziby], NIP: [numer NIP], REGON: [numer REGON], wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS: [numer KRS], zwana dalej "Usługodawcą".
          </p>
          <p className="mb-4">
            Każdy Użytkownik z chwilą podjęcia czynności zmierzających do korzystania z Serwisu zobowiązany jest do przestrzegania postanowień niniejszego Regulaminu.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">2. Definicje</h2>
          <p className="mb-4">
            Na potrzeby niniejszego Regulaminu przyjmuje się następujące znaczenie poniższych pojęć:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-semibold">Serwis</span> - strona internetowa dostępna pod adresem [adres strony internetowej].
            </li>
            <li>
              <span className="font-semibold">Usługodawca</span> - Kristal-Spaw z siedzibą w [adres siedziby].
            </li>
            <li>
              <span className="font-semibold">Użytkownik</span> - każda osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z Serwisu.
            </li>
            <li>
              <span className="font-semibold">Klient</span> - Użytkownik, który zawarł lub zamierza zawrzeć umowę o świadczenie usług z Usługodawcą.
            </li>
            <li>
              <span className="font-semibold">Usługi</span> - usługi świadczone przez Usługodawcę, opisane w Serwisie.
            </li>
            <li>
              <span className="font-semibold">Regulamin</span> - niniejszy dokument.
            </li>
          </ul>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">3. Zakres świadczonych usług</h2>
          <p className="mb-4">
            Usługodawca świadczy za pośrednictwem Serwisu następujące usługi:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Prezentacja oferty usług Kristal-Spaw</li>
            <li>Możliwość kontaktu z Usługodawcą poprzez formularz kontaktowy</li>
            <li>Możliwość rezerwacji terminów wizyt</li>
            <li>Informowanie o aktualnościach i promocjach</li>
            <li>Udostępnianie informacji o Usługodawcy i świadczonych przez niego usługach</li>
          </ul>
          <p className="mb-4">
            Szczegółowy opis usług świadczonych przez Usługodawcę znajduje się w zakładce "Oferta" w Serwisie.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">4. Warunki korzystania z Serwisu</h2>
          <p className="mb-4">
            Korzystanie z Serwisu jest dobrowolne i bezpłatne. W celu prawidłowego korzystania z Serwisu Użytkownik powinien dysponować:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Urządzeniem z dostępem do sieci Internet</li>
            <li>Przeglądarką internetową obsługującą JavaScript i pliki cookies</li>
            <li>Aktywnym adresem e-mail (w przypadku korzystania z formularza kontaktowego lub rezerwacji)</li>
          </ul>
          <p className="mb-4">
            Usługodawca dokłada wszelkich starań, aby zapewnić prawidłowe funkcjonowanie Serwisu. Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">5. Rezerwacja usług</h2>
          <p className="mb-4">
            Rezerwacja usług oferowanych przez Usługodawcę może odbywać się za pośrednictwem:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Formularza rezerwacji dostępnego w Serwisie</li>
            <li>Telefonicznie pod numerem telefonu podanym w Serwisie</li>
            <li>Osobiście w siedzibie Usługodawcy</li>
          </ul>
          <p className="mb-4">
            W celu dokonania rezerwacji za pośrednictwem formularza rezerwacji, Użytkownik powinien podać następujące dane:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Rodzaj wybranej usługi</li>
            <li>Preferowaną datę i godzinę wizyty</li>
          </ul>
          <p className="mb-4">
            Po dokonaniu rezerwacji Użytkownik otrzyma potwierdzenie na podany adres e-mail. Rezerwacja jest ważna po otrzymaniu potwierdzenia od Usługodawcy.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">6. Płatności</h2>
          <p className="mb-4">
            Ceny usług oferowanych przez Usługodawcę są cenami brutto (zawierają podatek VAT) i są wyrażone w złotych polskich (PLN).
          </p>
          <p className="mb-4">
            Usługodawca zastrzega sobie prawo do zmiany cen usług prezentowanych w Serwisie, wprowadzania nowych usług, przeprowadzania i odwoływania akcji promocyjnych, bądź wprowadzania w nich zmian.
          </p>
          <p className="mb-4">
            Płatność za usługi może być dokonana:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Gotówką w siedzibie Usługodawcy</li>
            <li>Kartą płatniczą w siedzibie Usługodawcy</li>
            <li>Przelewem bankowym na konto Usługodawcy (w przypadku wybranych usług)</li>
          </ul>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">7. Odwołanie lub zmiana terminu rezerwacji</h2>
          <p className="mb-4">
            Klient ma prawo do odwołania lub zmiany terminu zarezerwowanej usługi. W celu odwołania lub zmiany terminu rezerwacji, Klient powinien skontaktować się z Usługodawcą telefonicznie lub za pośrednictwem poczty elektronicznej.
          </p>
          <p className="mb-4">
            Usługodawca zastrzega sobie prawo do pobierania opłaty za odwołanie rezerwacji w terminie krótszym niż 24 godziny przed planowaną wizytą. Wysokość opłaty wynosi 30% wartości zarezerwowanej usługi.
          </p>
          <p className="mb-4">
            W przypadku niestawienia się Klienta na zarezerwowany termin bez wcześniejszego odwołania, Usługodawca może obciążyć Klienta opłatą w wysokości 50% wartości zarezerwowanej usługi.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">8. Reklamacje</h2>
          <p className="mb-4">
            Klient ma prawo do złożenia reklamacji dotyczącej świadczonych usług. Reklamacja powinna zawierać:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dane Klienta (imię, nazwisko, adres e-mail, numer telefonu)</li>
            <li>Opis przedmiotu reklamacji</li>
            <li>Datę wykonania usługi</li>
            <li>Oczekiwania Klienta dotyczące sposobu rozpatrzenia reklamacji</li>
          </ul>
          <p className="mb-4">
            Reklamacje należy składać pisemnie na adres siedziby Usługodawcy lub drogą elektroniczną na adres e-mail: [adres e-mail].
          </p>
          <p className="mb-4">
            Usługodawca rozpatrzy reklamację w terminie 14 dni od daty jej otrzymania i poinformuje Klienta o sposobie jej rozpatrzenia na adres e-mail podany w reklamacji lub pisemnie na adres korespondencyjny.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">9. Odpowiedzialność</h2>
          <p className="mb-4">
            Usługodawca nie ponosi odpowiedzialności za:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Przerwy w funkcjonowaniu Serwisu wynikające z przyczyn technicznych (konserwacja, przegląd, wymiana sprzętu) lub innych okoliczności niezależnych od Usługodawcy</li>
            <li>Szkody wynikłe z niedostosowania się Użytkownika do wymogów technicznych niezbędnych do korzystania z Serwisu</li>
            <li>Szkody wynikłe z podania przez Użytkownika nieprawdziwych, nieaktualnych lub niepełnych danych</li>
            <li>Szkody wynikłe z działania siły wyższej</li>
          </ul>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">10. Ochrona danych osobowych</h2>
          <p className="mb-4">
            Administratorem danych osobowych Użytkowników Serwisu jest Usługodawca. Dane osobowe Użytkowników są przetwarzane zgodnie z obowiązującymi przepisami prawa, w szczególności zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
          </p>
          <p className="mb-4">
            Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w Polityce Prywatności dostępnej w Serwisie.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">11. Własność intelektualna</h2>
          <p className="mb-4">
            Wszelkie prawa do Serwisu, w tym do jego nazwy, domeny internetowej, szaty graficznej, logotypów, treści, zdjęć, filmów, grafik, dźwięków oraz innych elementów Serwisu, należą do Usługodawcy lub podmiotów, z którymi Usługodawca zawarł stosowne umowy.
          </p>
          <p className="mb-4">
            Korzystanie z Serwisu nie oznacza nabycia przez Użytkownika jakichkolwiek praw do utworów zawartych w Serwisie. Użytkownik może korzystać z tych utworów jedynie w zakresie dozwolonego użytku osobistego, określonego przepisami ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">12. Postanowienia końcowe</h2>
          <p className="mb-4">
            Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu. Zmiany wchodzą w życie z chwilą opublikowania zmienionego Regulaminu w Serwisie.
          </p>
          <p className="mb-4">
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o prawach konsumenta oraz ustawy o świadczeniu usług drogą elektroniczną.
          </p>
          <p className="mb-4">
            Wszelkie spory wynikłe z korzystania z Serwisu będą rozstrzygane w pierwszej kolejności na drodze negocjacji, z intencją polubownego zakończenia sporu. Jeśli jednak nie byłoby to możliwe, lub też byłoby niesatysfakcjonujące dla którejkolwiek ze stron, spory będą rozstrzygane przez właściwy sąd powszechny, zgodnie z przepisami kodeksu postępowania cywilnego.
          </p>
          <p className="mb-4">
            Regulamin obowiązuje od dnia 8 kwietnia 2025 roku.
          </p>
        </div>

        <hr className="my-8 border-opacity-20" />

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 font-oswald">13. Kontakt</h2>
          <p className="mb-4">
            W przypadku jakichkolwiek pytań, uwag lub wniosków dotyczących niniejszego Regulaminu lub korzystania z Serwisu, prosimy o kontakt:
          </p>
          <div className="pl-6 mb-4">
            <p className="font-bold">Kristal-Spaw</p>
            <p>Adres: [adres siedziby]</p>
            <p>E-mail: [adres e-mail]</p>
            <p>Telefon: [numer telefonu]</p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Kristal-Spaw. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  );
}