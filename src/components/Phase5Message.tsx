import { useTypewriter } from "../hooks/useTypewriter";
import { FloatingHearts } from "./FloatingHearts";

const FINAL_MESSAGE = `Hello love… it's me.
Ang iyong bahog itlog na boyfriend (Geh tawa)

Gusto ko lang muna mag-thank you.
Thank you kasi palagi kang nandiyan para sa'kin — lalo na tuwing mga araw na hindi ako okay, tuwing tahimik lang ako, tuwing hindi ko alam kung paano ipaliwanag yung nararamdaman ko.

Thank you sa pag-aalaga mo sa'kin.
Sa pagluluto mo para sa'kin kahit one time lang ata yun HHAHAHA,
sa pagaasikaso mo sakin, I really love that,
at sa pagmamahal mo sa'kin na aking papahalagahanm thank you for loving me even at times na feeling ko hindi ko mahal ang sarili ko.

You loved me when I felt unlovable.
You brought back the joy in my life.
You stayed when things were heavy.
And you gave me the peace that my heart was yearning for.

Alam kong hindi ako perfect.
Hindi ko kayang ibigay lahat ng gusto mo,
hindi rin ako laging tama,
pero isang bagay ang sigurado — mahal na mahal kita araw-araw.

Gusto kong malaman mo na sobra kitang mahal.
MAHAL NA MAHAL.
At pinapahalagahan ko ang lahat ng ginagawa mo — kahit yung mga simpleng bagay na akala mo walang halaga.
Hindi ko sasayangin ang pagmamahal at pag titiwala na bibnigay mo saken.

Kahit anong hirap ang dumating sa atin,
kahit may mga araw na mapagod tayo,
nandito lang ako.
At alam kong ikaw rin, hindi mo rin ako iiwan.

We'll figure things out together.
Sabay tayong matututo,
sabay tayong lalaban,
sabay tayong mangarap.

I promise you this:
Hindi ako aalis.
Mamahalin kita ng buong puso ko.
Gagawin ko ang best ko para suportahan ka,
alagaan ka,
at iparamdam sa'yo araw-araw ang pagmamahal na deserve mo.

"Love isn't about perfection.
It's about choosing each other — every single day."

Happy Monthsary, my love.
Sobrang ikli palang ng panahon ng ating pagsasama, pero para sa'kin…
parang ang tagal na nating magkasama.
Parang kilala na kita buong buhay ko.
At kung papipiliin ako ulit —
ikaw pa rin. Palagi.

Mahal na mahal kita.
— Jhomer`;

export function Phase5Message() {
  const { displayedText, isComplete } = useTypewriter(FINAL_MESSAGE, 30);

  return (
    <div
      className="phase"
      style={{
        padding: "40px 20px",
        justifyContent: "flex-start",
        paddingTop: "60px",
      }}
    >
      <FloatingHearts count={6} subtle />

      {/* Flower accents */}
      <span className="flower-accent flower-top-left">🌸</span>
      <span className="flower-accent flower-top-right">🌷</span>
      <span className="flower-accent flower-bottom-left">🌺</span>
      <span className="flower-accent flower-bottom-right">🌸</span>

      <div
        className="card"
        style={{
          maxWidth: "360px",
          maxHeight: "70vh",
          overflowY: "auto",
          padding: "24px 20px",
        }}
      >
        <div className="final-message">
          {displayedText}
          {!isComplete && <span className="typewriter-cursor" />}
        </div>

        {isComplete && (
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              animation: "fadeIn 1s ease-out",
            }}
          >
            <span style={{ fontSize: "40px" }}>💕</span>
          </div>
        )}
      </div>
    </div>
  );
}
