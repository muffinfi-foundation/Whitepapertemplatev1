import { WhitepaperHero } from './components/WhitepaperHero';
import { WhitepaperSection } from './components/WhitepaperSection';
import { WhitepaperFooter } from './components/WhitepaperFooter';
import { TableOfContents } from './components/TableOfContents';

export default function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <WhitepaperHero />
        
        {/* Main Content with optimized layout */}
        <div className="w-full max-w-[422px] lg:max-w-[2176px] mx-auto px-4 py-8 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <TableOfContents />
            </aside>
            
            {/* Main Content - Full width on mobile, takes remaining space on desktop */}
            <main className="lg:col-span-3 space-y-8 lg:space-y-16">
              {/* Úvod */}
              <WhitepaperSection
                id="uvod"
                title="🧁 ÚVOD"
                content={
                  <>
                    <p>
                      MuffinFi je komunitní kryptoměnový projekt, který spojuje moderní blockchain 
                      technologii s reálnou pomocí.
                    </p>
                    <p>
                      Tento whitepaper představuje naši dlouhodobou vizi – transparentní, charitativní a 
                      bezpečný ekosystém postavený na tokenu $MFND.
                    </p>
                    
                    <h3>🎯 Poslání projektu MuffinFi</h3>
                    <p>
                      MuffinFi vzniklo s cílem propojit svět decentralizovaných financí (DeFi) s reálnou 
                      pomocí lidem, zvířatům a komunitám, které to nejvíce potřebují. Projekt staví na 
                      myšlence, že blockchain může být nejen technologickým, ale i etickým nástrojem.
                    </p>
                    <p>
                      MuffinFi usiluje o vytvoření dlouhodobě udržitelného ekosystému, kde každý držitel 
                      tokenu $MFND přispívá k dobré věci — a to bez dodatečných poplatků. Díky 
                      charitativní části tokenomiky je pomoc zabudována přímo do základu projektu, 
                      nikoliv do transakcí.
                    </p>
                    <p className="italic text-slate-600">
                      „Naším cílem je, aby se kryptoměna stala nástrojem dobra, ne pouze spekulace."
                    </p>
                    
                    <h3>🌱 Co projekt řeší a proč vznikl</h3>
                    <p>
                      Většina moderních kryptoměn se zaměřuje výhradně na zisk a rychlý růst hodnoty. 
                      MuffinFi vzniklo jako odpověď na nedůvěru a nedostatek transparentnosti v oblasti 
                      charitativních krypto projektů.
                    </p>
                    <p>Projekt se zaměřuje na tři hlavní problémy:</p>
                    <ol>
                      <li>
                        <strong style={{ display: 'inline' }}>Nedůvěra v charitativní sbírky</strong>{' '}— blockchain přináší 100% transparentnost darů 
                        (každý může ověřit tok tokenů přes Etherscan).
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>Krátkodobé a neudržitelné projekty</strong>{' '}— MuffinFi má jasnou dlouhodobou roadmapu 
                        do roku 2028.
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>Chybějící propojení mezi komunitou a reálným dopadem</strong>{' '}— komunita rozhoduje v 
                        budoucnu přes DAO o tom, kam pomoc poputuje.
                      </li>
                    </ol>
                    <p>
                      Cílem je vytvořit projekt, který nezmizí po pár měsících, ale stane se trvalou 
                      platformou propojující krypto, komunitu a dobročinnost.
                    </p>
                    
                    <h3>💖 Hlavní hodnoty projektu</h3>
                    <p>MuffinFi stojí na třech pilířích:</p>
                    <div className="space-y-4 lg:space-y-6 my-6 lg:my-8">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">💙 Komunita</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Každý držitel tokenu je součástí rozhodování a může se zapojit do 
                          DAO v budoucnosti.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Transparentnost</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Všechny pohyby (dary, burn, staking) jsou veřejně 
                          sledovatelné na blockchainu.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-red-900 mb-3 lg:mb-4 text-lg lg:text-2xl">😍 Pomoc</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Skutečné charitativní aktivity financované z přidělené části supply, 
                          nikoliv z poplatků uživatelů.
                        </p>
                      </div>
                    </div>
                    
                    <p className="italic text-slate-600 text-center text-base lg:text-lg mt-6 lg:mt-8">
                      „Každý muffin může pomoci. Každý držitel má vliv."
                    </p>
                    
                    <h3>🌕 Aktuální fáze projektu (Q4 2025 – startovní fáze)</h3>
                    <p>
                      Projekt se nachází v rané fázi vývoje.
                    </p>
                    <ul className="space-y-2">
                      <li>✅ Token $MFND je nasazen na síti Ethereum (ERC-20) a ověřený na Etherscanu.</li>
                      <li>✅ Zdroje soubory kontraktů, ABI i bytecode jsou veřejně dostupné.</li>
                      <li>🚧 Probíhá příprava webu, stakingu, NFT kolekce a DAO systému podle roadmapy 2025-2028.</li>
                      <li>💡 Cílem aktuální fáze je vybudovat komunitu a důvěru, než dojde k aktivaci charitativních a staking funkcí.</li>
                    </ul>
                    
                    <div className="bg-slate-100 border-2 border-slate-300 rounded-xl lg:rounded-2xl p-4 lg:p-8 mt-6 lg:mt-8">
                      <p className="text-slate-700 italic text-sm mb-3 lg:mb-4">
                        Whitepaper V1 představuje základní vizi projektu MuffinFi, která se bude dále 
                        rozšiřovat o technické a komunitní části.
                      </p>
                      <p className="text-slate-600 italic text-sm">
                        "Tento dokument bude v průběhu vývoje projektu průběžně aktualizován, aby vždy 
                        odpovídal aktuální fázi MuffinFi Foundation."
                      </p>
                    </div>
                  </>
                }
              />

              {/* Přehled projektu */}
              <WhitepaperSection
                id="prehled"
                title="🌐 PŘEHLED PROJEKTU"
                content={
                  <>
                    <h3>🧩 Co je MuffinFi Foundation</h3>
                    <p>
                      MuffinFi Foundation je komunitní kryptoměnový projekt postavený na síti Ethereum 
                      (ERC-20).
                    </p>
                    <p>
                      Jeho cílem je spojit moderní technologii blockchainu s reálným světem a vytvořit 
                      ekosystém, v němž každý token přispívá k hodnotě i pomoci.
                    </p>
                    <p>
                      MuffinFi není meme token ani čistě ziskový projekt — je to iniciativa, která staví na 
                      transparentnosti, komunitě a dlouhodobé vizi.
                    </p>
                    <p>
                      Projekt se postupně rozvíjí v souladu s roadmapou 2025 → 2028 a každá fáze má jasně 
                      definovaný cíl – od technického základu přes staking a NFT až po decentralizované 
                      hlasování v DAO.
                    </p>
                    <p>
                      MuffinFi je založen na přesvědčení, že blockchain má mnohem větší potenciál než 
                      jen finanční zisk — může být nástrojem pro dobro, důvěru a skutečnou pomoc.
                    </p>
                    
                    <h3>🌍 Jak funguje koncept "DeFi for Good"</h3>
                    <p>
                      Tradiční DeFi projekty nabízejí uživatelům možnost zisku z úroků, stakingu či 
                      obchodování.
                    </p>
                    <p>
                      MuffinFi na tomto principu staví, ale přidává etickou a společenskou vrstvu – pomoc a 
                      transparentnost.
                    </p>
                    
                    <p className="mb-4">Koncept "DeFi for Good" znamená, že:</p>
                    <ol className="space-y-3">
                      <li>Část tokenů je určena pro charitativní účely (bez dodatečných poplatků).</li>
                      <li>Komunita rozhoduje o tom, komu a kam pomoc půjde.</li>
                      <li>Veškeré transakce a dary jsou veřejně dohledatelné na blockchainu (Etherscan).</li>
                      <li>Každý držitel tokenu má možnost ovlivnit budoucnost projektu a podílet se na 
                      jeho rozvoji.</li>
                      <li>Tento přístup přetváří DeFi na společensky odpovědnou ekonomiku, v níž se 
                      technologie a lidství vzájemně doplní.</li>
                    </ol>
                    
                    <h3>🔥 Jak se v projektu propojuje burn, charita a komunita</h3>
                    <p>MuffinFi spojí tři klíčové prvky do jednoho fungujícího celku:</p>
                    
                    <div className="space-y-4 lg:space-y-6 my-6 lg:my-8">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Deflační mechanismus (1 % burn)</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Každá transakce spálí 1 % tokenů – trvale snižuje celkový supply a zvyšuje vzácnost 
                          tokenu $MFND.
                        </p>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Spálené tokeny jsou odeslány na tzv. dead address, kde zůstávají navždy nedostupné.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-red-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Charita bez poplatků</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Pomoc je zajištěna z vyhrazené části supply (8 %), nikoli z transakčních poplatků 
                          uživatelů.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Tím je zaručeno, že každý uživatel má plnou kontrolu nad svými tokeny, a zároveň 
                          projekt naplňuje své poslání pomoci.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Komunita a DAO</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Držitelé tokenu budou v budoucnu rozhodovat prostřednictvím DAO o tom, kam 
                          půjde charitativní podpora a jak se budou využívat rezervy.
                        </p>
                        <p className="text-slate-700 text-base lg:text-lg">
                          MuffinFi tak buduje decentralizovanou správu, kde má hlas každý držitel.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-300 rounded-xl lg:rounded-2xl p-5 lg:p-10 mt-6 lg:mt-10">
                      <h3 className="text-slate-900 mb-4 lg:mb-6 text-xl lg:text-2xl">📝 SHRNUTÍ KAPITOLY 2</h3>
                      <p className="text-slate-700 text-base lg:text-lg mb-3 lg:mb-4">
                        MuffinFi je projekt, který usiluje o vyváženost mezi technologií, etikou a reálnou 
                        pomoci.
                      </p>
                      <p className="text-slate-700 text-base lg:text-lg mb-3 lg:mb-4">
                        Základem je bezpečný a deflační token $MFND, na kterém bude postupně vystavěna 
                        celá komunitní a charitativní infrastruktura.
                      </p>
                      <p className="text-slate-700 text-base lg:text-lg">
                        Cílem této fáze je vybudovat základy důvěry a komunity, které umožní v dalších 
                        letech rozvoj stakingu, NFT a DAO.
                      </p>
                    </div>
                  </>
                }
              />

              {/* Základní informace o tokenu */}
              <WhitepaperSection
                id="token"
                title="💎 ZÁKLADNÍ INFORMACE O TOKENU"
                content={
                  <>
                    <p>
                      Token MuffinFi ($MFND) je základním prvkem celého ekosystému MuffinFi Foundation.
                    </p>
                    <p>
                      Byl vytvořen na síti Ethereum (ERC-20) s využitím standardních knihoven OpenZeppelin 
                      a rozšíření Secured & Shallowed pro vyšší bezpečnost v rané fázi projektu.
                    </p>
                    <p>
                      $MFND představuje víc než jen kryptoměnu — je to nosič hodnoty, důvěry a 
                      dlouhodobé stability projektu.
                    </p>
                    <p>
                      Každá transakce přispívá k růstu ekosystému i k charitativnímu fondu projektu.
                    </p>
                    
                    <h3>💠 Základní parametry tokenu</h3>
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl lg:rounded-3xl p-5 lg:p-12 mb-6 lg:mb-10 shadow-xl lg:shadow-2xl shadow-emerald-500/30">
                      <ul className="space-y-3 lg:space-y-6 text-white text-sm lg:text-lg">
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Síť:</strong>{' '}Ethereum Mainnet</li>
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Standard:</strong>{' '}ERC-20</li>
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Celková nabídka:</strong>{' '}100 000 000 000 MFND</li>
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Burn tax:</strong>{' '}1 % z každé transakce (automaticky spalováno na dead adresu)</li>
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Mintování:</strong>{' '}trvale zakázáno (fixní supply)</li>
                        <li><strong className="text-emerald-100" style={{ display: 'inline' }}>Vlastnictví kontraktu:</strong>{' '}dočasně tým MuffinFi → plánované Renounce Ownership po spuštění DAO</li>
                      </ul>
                    </div>
                    
                    <p>
                      Tento model zajišťuje férovou distribuci, transparentnost a dlouhodobou hodnotu tokenu.
                    </p>
                    
                    <h3>🛡️ Bezpečnostní rozšíření</h3>
                    <p>Token využívá rozšíření:</p>
                    <ul>
                      <li><strong style={{ display: 'inline' }}>Secured.sol</strong>{' '}– chrání proti automatizovaným nákupům při spuštění likvidity,</li>
                      <li><strong style={{ display: 'inline' }}>Shallowed.sol</strong>{' '}– omezuje extrémně velké transakce pro stabilitu trhu.</li>
                    </ul>
                    <p>
                      Tyto funkce budou v pozdější fázi projektu postupně deaktivovány po stabilizaci trhu.
                    </p>
                    
                    <h3>🔧 Funkční přehled kontraktu</h3>
                    <p>
                      Token $MFND je plně kompatibilní s běžnými peněženkami (např. MetaMask, Trust Wallet). 
                      Držitelé mohou:
                    </p>
                    <ul>
                      <li>přidat token ručně pomocí kontraktní adresy,</li>
                      <li>sledovat transakce na Etherscan,</li>
                      <li>nebo obchodovat na decentralizovaných burzách (např. Uniswap) po zalistování likvidity.</li>
                    </ul>
                    
                    <p>
                      V budoucnu bude token napojen na staking platformu a DAO governance systém, 
                      čímž se stane centrálním prvkem celého ekosystému MuffinFi.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-5 lg:p-10 mt-6 lg:mt-10 text-center">
                      <p className="text-emerald-900 text-base lg:text-lg italic">
                        "Token $MFND není jen číslo v peněžence. Je to klíč, který otevírá cestu k reálné 
                        pomoci, komunitní důvěře a dlouhodobé hodnotě."
                      </p>
                    </div>
                  </>
                }
              />

              {/* Tokenomika */}
              <WhitepaperSection
                id="tokenomika"
                title="📊 TOKENOMIKA"
                content={
                  <>
                    <h3>🪙 Základní princip tokenomiky</h3>
                    <p>
                      Tokenomika projektu MuffinFi Foundation ($MFND) představuje základní finanční 
                      architekturu celého ekosystému.
                    </p>
                    <p>
                      Je navržena pro dlouhodobou udržitelnost, transparentní distribuci a podporu 
                      rozvoje komunity, stakingu a charitativních aktivit.
                    </p>
                    <p>
                      Celkový počet tokenů je <strong style={{ display: 'inline' }}>100 000 000 000 MFND</strong>{' '}(pevná nabídka – bez možnosti 
                      mintování).
                    </p>
                    <p>
                      Mechanismus 1% burn tax zajišťuje trvalé snižování supply a přirozený deflační růst 
                      hodnoty.
                    </p>
                    
                    <h3>📊 ROZDĚLENÍ TOKENŮ</h3>
                    <p className="mb-8">Celkový supply je rozdělen do devíti jasně definovaných částí:</p>
                    
                    <div className="space-y-4 lg:space-y-6">
                      {/* Likvidita (DEX) - 15% */}
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">💧 Likvidita (DEX) – 15 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Likvidita bude uvolňována postupně v jednotlivých fázích.
                        </p>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          První fáze začíná na Uniswap.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x9d4b0593616317b709Fb37c5d4A1390B3677E971Af
                        </p>
                      </div>
                      
                      {/* Community Waves - 8% */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-purple-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🌊 Community Waves – 8 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Tokeny určené pro komunitní vlny, soutěže a rozvoj projektu.
                        </p>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Férový start bez presale.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x5729767B037b497c608CF70F87C81707e67DaeB2
                        </p>
                      </div>
                      
                      {/* Tým + vývoj - 10% */}
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">👥 Tým + vývoj – 10 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Rozděleno do vesting plánu na 12-24 měsíců, aby byla zajištěna transparentnost a 
                          dlouhodobý závazek týmu.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x66ec4Be2491434a579a492B88D424FcE115a7a33
                        </p>
                      </div>
                      
                      {/* Staking Rewards - 20% */}
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🎁 Staking Rewards – 20 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Vyhrazeno pro budoucí odměny držitelům $MFND (HODL).
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x19B092db9ff639b8cb419c2Be857CB50AF0df6d8
                        </p>
                      </div>
                      
                      {/* NFT / Airdrop - 5% */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-indigo-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🎨 NFT / Airdrop – 5 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Tokeny určené pro komunitní odměny, NFT minty a airdropy.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0xaf0f0E708Bb0fc4sd0199491De8cfcb10F216c38498
                        </p>
                      </div>
                      
                      {/* Charita - 8% */}
                      <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-red-900 mb-3 lg:mb-4 text-lg lg:text-2xl">❤️ Charita – 8 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Vyhrazené prostředky pro pomoc lidem, zvířatům a potřebným.
                        </p>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          O využití bude rozhodovat komunita prostřednictvím DAO.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x4e46d437f40D522f6BF76f47dc352ad8e950506fc
                        </p>
                      </div>
                      
                      {/* Komunita / DAO - 10% */}
                      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-slate-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🏛️ Komunita / DAO – 10 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Fond pro hlasování, granty, komunitní návrhy a budoucí rozvoj.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x8583d7D65e6EEb496E196155d95B95805
                        </p>
                      </div>
                      
                      {/* Burn (rezerva) - 15% */}
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔥 Burn (rezerva) – 15 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Postupně spalováno v souladu s deflační strategií projektu.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x54C7B7EAFC8af07f10232F9d0a911837b73d7F8f
                        </p>
                      </div>
                      
                      {/* Rezerva (budoucnost) - 9% */}
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-yellow-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🚀 Rezerva (budoucnost) – 9 %</h4>
                        <p className="text-slate-700 text-base lg:text-lg mb-2 lg:mb-3">
                          Určeno pro strategické partnerství, expanzi a budoucí rozvoj ekosystému.
                        </p>
                        <p className="text-slate-600 text-xs lg:text-sm break-all">
                          <strong style={{ display: 'inline' }}>Adresa:</strong>{' '}0x2d92C81B92132B22297D344349d44D96D4277859
                        </p>
                      </div>
                    </div>
                    
                    <h3>🎯 HLAVNÍ CÍLE TOKENOMIKY</h3>
                    <p>Tokenomika MuffinFi je koncipována tak, aby:</p>
                    <ul className="space-y-3 my-6">
                      <li>• podporovala dlouhodobou stabilitu projektu,</li>
                      <li>• posilovala důvěru komunity díky transparentní distribuci,</li>
                      <li>• zajišťovala reálné využití tokenu ve stakingu, DAO a NFT,</li>
                      <li>• a zároveň vytvářela reálný dopad díky charitativní složce.</li>
                    </ul>
                    
                    <p className="mb-4">
                      Každý MFND token má tedy svůj účel – žádný není ladem, vše je propojeno s 
                      ekosystémem projektu.
                    </p>
                    
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-10 mt-10">
                      <p className="text-white text-lg italic leading-relaxed">
                        <strong className="text-emerald-400" style={{ display: 'inline' }}>Spravedlivá tokenomika je srdcem projektu.</strong>
                        <br />
                        Každý token představuje nejen hodnotu, ale i důvěru, kterou komunita 
                        vkládá do společného cíle.
                      </p>
                    </div>
                  </>
                }
              />

              {/* Bezpečnost */}
              <WhitepaperSection
                id="bezpecnost"
                title="🔒 BEZPEČNOST A TECHNOLOGIE"
                content={
                  <>
                    <h3>🔹 Základní filozofie bezpečnosti</h3>
                    <p>
                      Bezpečnost a transparentnost jsou pro projekt MuffinFi Foundation základními pilíři 
                      důvěry.
                    </p>
                    <p>
                      Token $MFND je postaven na osvědčených knihovnách OpenZeppelin (Solidity v0.8.24) 
                      a rozšířeních Secured a Shallowed, která zajišťují stabilitu a ochranu komunity v rané 
                      fázi vývoje.
                    </p>
                    <p>
                      Cílem je vytvořit prostředí, kde jsou technické i etické principy pevně spojeny — 
                      žádné skryté funkce, žádné mintování, žádné poplatky navíc.
                    </p>
                    <p className="italic text-slate-600">
                      Bezpečnost není funkce, ale závazek vůči držitelům a komunitě.
                    </p>
                    
                    <h3>🔶 TECHNOLOGICKÉ ZÁKLADY KONTRAKTU</h3>
                    <h4>🔹 Základní komponenty kontraktu</h4>
                    <p>
                      Smart kontrakt tokenu $MFND byl napsán s využitím standardních a auditovaných 
                      komponent:
                    </p>
                    <ul className="space-y-3 my-6">
                      <li>
                        <strong style={{ display: 'inline' }}>🪙 ERC-20 (OpenZeppelin)</strong>{' '}— plná kompatibilita se všemi peněženkami 
                        podporujícími síť Ethereum (např. MetaMask, Trust Wallet, Ledger, Exodus, MyEtherWallet 
                        a j.)
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>🔒 Ownable.sol</strong>{' '}— umožňuje správu kontraktu pouze v rané fázi projektu.
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>🤖 Secured.sol</strong>{' '}— anti-bot systém, který chrání proti automatizovaným 
                        nákupům po spuštění likvidity.
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>🐋 Shallowed.sol</strong>{' '}— anti-whale ochrana omezující extrémně velké transakce.
                      </li>
                      <li>
                        <strong style={{ display: 'inline' }}>🔥 ERC20Burnable.sol</strong>{' '}— implementace deflační logiky (spalování 1 % z každé 
                        transakce).
                      </li>
                    </ul>
                    <p>
                      Všechny soubory kontraktu jsou veřejně dostupné a ověřené na Etherscanu, což zaručuje 
                      transparentnost i důvěru komunity.
                    </p>
                    
                    <h3>⚙️ BEZPEČNOSTNÍ ROZŠÍŘENÍ PROJEKTU</h3>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-6 lg:my-8">
                      <h4 className="text-orange-900 mb-4 lg:mb-5 text-lg lg:text-2xl">🟠 Secured (Anti-Bot Mechanismus)</h4>
                      <p className="text-slate-700 text-lg mb-4">
                        Tento modul chrání projekt před útoky při spuštění a zalistování:
                      </p>
                      <ul className="text-slate-700 space-y-2">
                        <li>• blokuje automatizované boti, kteří se snaží nakoupit velké množství tokenů při 
                        prvních blocích,</li>
                        <li>• chrání férovou distribuci mezi běžnými uživateli,</li>
                        <li>• po stabilizaci likvidity bude systém trvale deaktivován.</li>
                      </ul>
                      <p className="text-orange-900 mt-4">
                        <strong style={{ display: 'inline' }}>💡 Cíl: zajistit férový start bez technických zneužití.</strong>
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-6 lg:my-8">
                      <h4 className="text-cyan-900 mb-4 lg:mb-5 text-lg lg:text-2xl">🐋 SHALLOWED (Anti-Whale Mechanismus)</h4>
                      <p className="text-slate-700 text-lg mb-4">
                        Shallowed modul omezuje extrémně velké transakce, které by mohly ovlivnit cenu 
                        nebo stabilitu trhu.
                      </p>
                      <p className="text-slate-700 text-lg mb-3">Limit je nastaven tak, aby:</p>
                      <ul className="text-slate-700 space-y-2 mb-4">
                        <li>• chránil drobné držitele před velrybami,</li>
                        <li>• zabránil manipulaci s cenou,</li>
                        <li>• a zároveň neomezoval běžné obchodování.</li>
                      </ul>
                      <p className="text-cyan-900 text-lg">
                        Tento mechanismus je aktivní pouze v rané fázi projektu kvůli stabilitě likvidity.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-300 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-6 lg:my-8">
                      <h4 className="text-slate-900 mb-4 lg:mb-5 text-lg lg:text-2xl">📄 RENOUNCE OWNERSHIP (Vzdání se vlastnictví)</h4>
                      <p className="text-slate-700 text-lg mb-4">
                        V současné fázi (Q4 2025) je vlastnictví kontraktu dočasně spravováno týmem 
                        MuffinFi.
                      </p>
                      <p className="text-slate-700 text-lg mb-3">To je důležité, protože tým ještě:</p>
                      <ul className="text-slate-700 space-y-2 mb-6">
                        <li>• finalizuje staking kontrakt,</li>
                        <li>• připravuje DAO hlasovací systém,</li>
                        <li>• a testuje on-chain interakce mezi moduly.</li>
                      </ul>
                      
                      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-6">
                        <p className="text-amber-900 mb-3">
                          <strong style={{ display: 'inline' }}>💡 Plánovaný krok:</strong>
                        </p>
                        <p className="text-slate-700 text-lg">
                          Jakmile budou všechny funkce (staking, DAO, charita) plně spuštěny a technicky 
                          ověřeny, MuffinFi provede Renounce Ownership – tedy trvalé vzdání se vlastnictví 
                          kontraktu.
                        </p>
                      </div>
                      
                      <p className="text-slate-700 text-lg mb-3">
                        Tím se projekt stane zcela decentralizovaným:
                      </p>
                      <ul className="text-slate-700 space-y-2 mb-4">
                        <li>• nikdo už nebude moci kontrakt měnit,</li>
                        <li>• kód zůstane navždy veřejný a neměnný,</li>
                        <li>• a kontrola přejde plně na komunitu skrze DAO.</li>
                      </ul>
                      <p className="text-slate-700 text-lg italic">
                        Vzdání se vlastnictví není konec kontroly — je to začátek svobody komunity.
                      </p>
                    </div>
                    
                    <h3>🔐 DOPORUČENÍ PRO DRŽITELE TOKENŮ</h3>
                    <p>Bezpečnost začíná u každého uživatele.</p>
                    <p>Držitelům se doporučuje:</p>
                    <ul className="space-y-2 my-6">
                      <li>• používat oficiální a ověřené peněženky (MetaMask, Trust Wallet, Ledger Nano X),</li>
                      <li>• nikdy nesdílet seed frázi nebo soukromý klíč,</li>
                      <li>• při každé transakci ověřit kontraktní adresu $MFND,</li>
                      <li>• aktivovat dvoufaktorové ověření (2FA) tam, kde je možné,</li>
                      <li>• sledovat oficiální kanály a Etherscan pro aktuální informace.</li>
                    </ul>
                    
                    <p className="mb-4">
                      Bezpečnostní architektura MuffinFi je navržena tak, aby zajistila rovnováhu mezi 
                      ochranou, stabilitou a decentralizací.
                    </p>
                    <p className="mb-8">
                      Kombinací ověřených knihoven, ochranných modulů a plánovaného vzdání se vlastnictví 
                      vytváří projekt pevný základ pro dlouhodobou důvěru.
                    </p>
                    
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-10 mt-10 text-center">
                      <p className="text-white text-xl italic leading-relaxed">
                        "Technologie bez důvěry je jen kód. Důvěra bez technologie je jen víra. 
                        MuffinFi spojuje obojí."
                      </p>
                    </div>
                  </>
                }
              />

              {/* Charitativní cíle */}
              <WhitepaperSection
                id="charita"
                title="❤️ CHARITATIVNÍ CÍLE"
                content={
                  <>
                    <h3>💖 Smysl a poslání charity MuffinFi</h3>
                    <p>
                      Charita je jedním ze tří hlavních pilířů projektu MuffinFi Foundation – spolu s 
                      komunitou a transparentností.
                    </p>
                    <p>
                      Na rozdíl od klasických darovacích kampaní využívá MuffinFi blockchainovou 
                      technologii, aby každý držitel měl vidět, kam přesně pomoc směřuje a jaký má 
                      dopad.
                    </p>
                    <p>
                      Cílem je vytvořit dlouhodobě udržitelný charitativní ekosystém, který propojuje 
                      moderní kryptoměnové prostředí s reálným světem pomoci.
                    </p>
                    <p>
                      Každý držitel tokenu $MFND tak nepřímo přispívá k dobré věci – bez dodatečných 
                      poplatků, bez prostředníků, s plnou transparentností.
                    </p>
                    <p className="italic text-slate-600 text-lg my-6">
                      „Každý muffin může pomoci. Každý držitel má vliv."
                    </p>
                    
                    <h3>📋 JAK CHARITA FUNGUJE</h3>
                    <p>
                      Charitativní systém projektu MuffinFi funguje zcela transparentně díky blockchainu 
                      Ethereum.
                    </p>
                    <p>
                      Všechny prostředky určené na pomoc se nacházejí v jediné oficiální peněžence:
                    </p>
                    
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-6 lg:my-8">
                      <h4 className="text-rose-900 mb-3 lg:mb-4 text-lg lg:text-2xl">💝 Charity Wallet:</h4>
                      <p className="text-slate-700 text-lg font-mono break-all mb-4">
                        0x546d4337407d5226BF76fA73de4352ad8A9509fc
                      </p>
                      <p className="text-slate-700 text-lg">
                        Tato peněženka obsahuje 8 % z celkové nabídky (8 000 000 000 MFND) a je určena 
                        výhradně pro podporu:
                      </p>
                      <ul className="text-slate-700 space-y-2 mt-4">
                        <li>• nemocných dětí, pacientů a lidí v nouzi,</li>
                        <li>• zvířecích útulků a záchranných organizací,</li>
                        <li>• komunitních a sociálních projektů s prokazatelným dopadem.</li>
                      </ul>
                    </div>
                    
                    <h3>🗳️ ROZHODOVÁNÍ O POMOCI (DAO MODEL)</h3>
                    <p>
                      MuffinFi využije DAO governance systém (v plánu 2027), který umožní komunitě 
                      hlasovat o tom:
                    </p>
                    <ul className="text-slate-700 space-y-2 my-4">
                      <li>• komu bude pomoc poskytnuta,</li>
                      <li>• jaké částky budou uvolněny,</li>
                      <li>• a které organizace získají podporu.</li>
                    </ul>
                    <p>
                      Každý držitel tokenu $MFND nebo NFT Muffin bude mít hlasovací právo.
                    </p>
                    <p>
                      Tím vznikne demokratický, komunitně řízený model charity, kde rozhodnutí 
                      nevychází z jedné autority, ale z vůle držitelů.
                    </p>
                    <p className="bg-slate-100 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                      ⚫ Cílem je, aby se o každém daru rozhodovalo otevřeně, s jasnými pravidly a 
                      přehledným hlasováním.
                    </p>
                    
                    <h3>🌐 TRANSPARENTNOST A SLEDOVÁNÍ DARŮ</h3>
                    <p>
                      MuffinFi klade důraz na veřejnou dohledatelnost každé transakce.
                    </p>
                    <p>
                      Každý dar bude mít vlastní TX hash (hash transakce), který bude veřejně přístupný 
                      přes Etherscan.
                    </p>
                    <p className="my-4">
                      Na webové stránce Charitativní cíle se bude nacházet přehled všech darů, obsahující:
                    </p>
                    <ul className="text-slate-700 space-y-2">
                      <li>• datum transakce,</li>
                      <li>• částku v MFND nebo ETH,</li>
                      <li>• TX hash (klikací odkaz na Etherscan),</li>
                      <li>• příjemce (např. organizace nebo fond),</li>
                      <li>• krátký popis účelu pomoci.</li>
                    </ul>
                    
                    <h4 className="text-slate-900 mb-4 mt-6 text-xl">🎥 Dodatečná dokumentace pomoci</h4>
                    <p>
                      Pokud to bude možné a příjemce pomoci s tím bude souhlasit, MuffinFi bude 
                      zveřejňovat také fotografie nebo krátká videa z předání daru.
                    </p>
                    <p>
                      Tyto materiály budou sloužit jako další důkaz transparentnosti a umožní komunitě 
                      vidět reálný dopad jejich podpory.
                    </p>
                    
                    <p className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 my-6">
                      💙 Každý člen komunity tak může kdykoli zkontrolovat, kam přesně tokeny směřovaly 
                      a komu skutečně pomohly.
                    </p>
                    
                    <h3>🚀 PLÁN ROZVOJE CHARITY</h3>
                    <p>
                      Charitativní systém MuffinFi bude rozšiřován postupně podle roadmapy:
                    </p>
                    
                    <div className="space-y-4 lg:space-y-6 my-6 lg:my-8">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 1:</h4>
                        <p className="text-slate-700 text-lg mb-3">
                          Založení oficiální charity wallet a příprava systému sledování transakcí (TX hashů) přes 
                          Etherscan.
                        </p>
                        <p className="text-slate-700 text-lg">
                          Cílem této fáze je vytvořit základní infrastrukturu pro transparentní evidenci všech 
                          darů.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 2:</h4>
                        <p className="text-slate-700 text-lg mb-3">
                          Zahájení prvních veřejných darů a zveřejnění reportů na webu projektu MuffinFi.
                        </p>
                        <p className="text-slate-700 text-lg">
                          Komunita získá možnost sledovat jednotlivé dary, jejich účel i příjemce 
                          prostřednictvím veřejných přehledů.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-purple-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 3:</h4>
                        <p className="text-slate-700 text-lg mb-3">
                          Spuštění decentralizovaného hlasovacího systému (DAO), který umožní držitelům 
                          tokenu MFND rozhodovat o tom, komu bude poskytnuta pomoc a v jaké výši.
                        </p>
                        <p className="text-slate-700 text-lg">
                          Tím se charitativní proces stane plně otevřeným a komunitně řízeným.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 4:</h4>
                        <p className="text-slate-700 text-lg mb-3">
                          Přechod na plně decentralizovaný model správy charity prostřednictvím DAO.
                        </p>
                        <p className="text-slate-700 text-lg">
                          Komunita převezme hlavní rozhodovací pravomoc a nadace MuffinFi bude fungovat 
                          jako transparentní platforma pro realizaci pomoci.
                        </p>
                      </div>
                    </div>
                    
                    <p className="my-6">
                      Každý krok tohoto vývoje bude doprovázen veřejnou komunikací a zveřejňováním 
                      výsledků, aby si komunita mohla ověřit, že všechny prostředky jsou využívány 
                      správně, eticky a efektivně.
                    </p>
                    
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-300 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-6 lg:my-8">
                      <p className="text-slate-800 text-base lg:text-lg mb-2 lg:mb-3">
                        Charitativní model MuffinFi spojuje sílu blockchainové transparentnosti s lidským 
                        rozměrem skutečné pomoci.
                      </p>
                      <p className="text-slate-800 text-lg">
                        Každý token MFND představuje nejen digitální hodnotu, ale i společenský dopad.
                      </p>
                      <p className="text-slate-700 italic text-lg mt-4">
                        „Pomoc není náklad, ale investice do dobra.
                      </p>
                      <p className="text-slate-700 italic text-lg">
                        Blockchain zaručuje, že každý dar je viditelný, nezměnitelný a skutečný."
                      </p>
                    </div>
                  </>
                }
              />

              {/* Staking */}
              <WhitepaperSection
                id="staking"
                title="🥩 STAKING (V PLÁNU 2026)"
                content={
                  <>
                    <h3>🎯 Cíl stakingu</h3>
                    <p>
                      Staking je jedním z hlavních pilířů dlouhodobé stability projektu MuffinFi Foundation.
                    </p>
                    <p>
                      Jeho cílem je odměnit dlouhodobé držitele tokenu $MFND, posílit komunitu a 
                      podpořit udržitelnost projektu bez nutnosti neustálého prodeje na trhu.
                    </p>
                    <p>
                      Držitelé, kteří se rozhodnou uzamknout své tokeny do stakingu, získají odměny v 
                      podobě dalších tokenů $MFND z předem vyhrazeného fondu „Staking Rewards", 
                      který tvoří 20 % z celkové nabídky (20 000 000 000 MFND).
                    </p>
                    <p>
                      Kdo věří v projekt, ten pomáhá růst nejen hodnotě, ale i důvěře.
                    </p>
                    
                    <h3>⚙️ JAK BUDE STAKING FUNGOVAT</h3>
                    <p>
                      Staking bude spuštěn v roce 2026 a bude probíhat prostřednictvím oficiálního 
                      webu MuffinFi (dashboardu / staking rozhraní připojeného k peněžence).
                    </p>
                    <p className="mb-4">Princip fungování je jednoduchý a férový:</p>
                    <ul>
                      <li>1. Držitel připojí peněženku (MetaMask, Ledger, Trust Wallet).</li>
                      <li>2. Vybere množství tokenů $MFND, které chce vložit do stakingu.</li>
                      <li>3. Zvolí délku uzamčení (např. 30 / 90 / 180 dní) – čím delší doba, tím vyšší odměna.</li>
                      <li>4. Po skončení období může tokeny a odměny vybrat zpět do své peněženky.</li>
                    </ul>
                    <p>
                      Všechny transakce budou zaznamenány na blockchainu Ethereum a budou 
                      dohledatelné přes Etherscan.
                    </p>
                    
                    <h3>🧮 PŘÍKLAD VÝPOČTU ODMĚN</h3>
                    <p>Celkový fond odměn pro staking je 20 miliard MFND.</p>
                    <p>
                      Výše výnosu (APY = Annual Percentage Yield) bude dynamická a bude záviset na 
                      množství tokenů ve stakingu.
                    </p>
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 my-4 lg:my-6">
                      <h4 className="text-slate-900 mb-3 lg:mb-4 text-base lg:text-lg">Parametr Hodnota</h4>
                      <p className="mb-2"><strong style={{ display: 'inline' }}>Celkový staking fond:</strong>{' '}20 000 000 000 MFND</p>
                      <p className="mb-2"><strong style={{ display: 'inline' }}>Tokeny ve stakingu (průměrně):</strong>{' '}10 000 000 000 MFND</p>
                      <p className="mb-2"><strong style={{ display: 'inline' }}>Roční distribuce odměn:</strong>{' '}1 000 000 000 MFND</p>
                      <p className="mb-2"><strong style={{ display: 'inline' }}>Odhadovaný APY:</strong>{' '}cca 10 % ročně</p>
                    </div>
                    <p className="mt-4 mb-6">
                      Tato čísla slouží jako modelový příklad. Skutečná výše APY bude záviset na množství 
                      tokenů uzamčených komunitou a na nastavení roční distribuce.
                    </p>
                    <p>
                      Tento model zajišťuje rovnováhu mezi atraktivními odměnami a dlouhodobou 
                      stabilitou ekosystému MuffinFi — odměny rostou společně s důvěrou komunity.
                    </p>
                    
                    <h3>🔒 BEZPEČNOST STAKINGU</h3>
                    <p>Stejně jako hlavní kontrakt tokenu bude i staking kontrakt využívat:</p>
                    <ul>
                      <li>• OpenZeppelin Staking Templates (ověřený kód, auditovaná logika),</li>
                      <li>• bezpečné funkce pro uzamčení a uvolnění tokenů,</li>
                      <li>• a bezhlavé protokolumy (např. reentrancy guard).</li>
                    </ul>
                    <p>
                      Kód stakingu bude veřejně ověřen a publikován na Etherscanu stejně jako hlavní 
                      kontrakt $MFND.
                    </p>
                    <p>
                      Pro připojení se bude využívat bezpečný wallet connector (Web3Modal / wagmi), bez 
                      ukládání klíčů na straně serveru.
                    </p>
                    
                    <h3>🌐 ROLE STAKINGU V EKOSYSTÉMU</h3>
                    <p>
                      Staking není jen o zisku — je to způsob, jak aktivně podpořit rozvoj projektu.
                    </p>
                    <p className="mb-4">Držitelé, kteří uzamknou své tokeny, přispívají k:</p>
                    <ul>
                      <li>• stabilitě ceny tokenu (menší volatilitě),</li>
                      <li>• růstu důvěry v komunitě,</li>
                      <li>• budoucímu DAO systému (držitelská práva).</li>
                    </ul>
                    <p>
                      Dlouhodobí stakující budou mít vyšší váhu hlasu v DAO a získají přístup k 
                      exkluzivním funkcím (např. early access k NFT nebo charitativním hlasováním).
                    </p>
                    
                    <h3>📅 ROADMAPA VÝVOJE STAKINGU</h3>
                    <p>Staking se bude vyvíjet v souladu s dlouhodobou roadmapou projektu:</p>
                    
                    <div className="space-y-4 lg:space-y-6 my-6 lg:my-8">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 1</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Vývoj a testování staking kontraktu na testnetu, audit a příprava webového 
                          dashboardu.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 2</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Oficiální spuštění stakingu pro veřejnost (Ethereum Mainnet), distribuce prvních 
                          odměn.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-purple-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 3</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Zavedení rozšířeného stakingu s variabilní dobou uzamčení a propojením s DAO 
                          hlasováním.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">Fáze 4</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Plná integrace stakingu s DAO – staking tokenů MFND poskytne přímé hlasovací 
                          právo.
                        </p>
                      </div>
                    </div>
                    
                    <h3>💬 SHRNUTÍ</h3>
                    <p>
                      Staking představuje důležitý krok k dlouhodobé stabilitě a růstu projektu MuffinFi.
                    </p>
                    <p>
                      Odměňuje důvěru, podporuje komunitu a propojuje držitele s budoucí správou 
                      celého ekosystému.
                    </p>
                    <p>
                      Staking není o krátkodobém zisku. Je to o víře, že každý uzamčený token pomáhá 
                      růst hodnotě i smyslu celého projektu.
                    </p>
                  </>
                }
              />

              {/* NFT ekosystém */}
              <WhitepaperSection
                id="nft"
                title="🎨 NFT EKOSYSTÉM (V PLÁNU 2027)"
                content={
                  <>
                    <h3>🎯 Cíl NFT ekosystému</h3>
                    <p>
                      NFT ekosystém MuffinFi představuje třetí klíčovou součást celého projektu – společně s tokenem $MFND a 
                      charitativním systémem.
                    </p>
                    <p>
                      Jeho úkolem je vytvořit unikátní digitální identitu pro členy komunity, která propojí 
                      umění, transparentnost a funkční zapojení do DAO.
                    </p>
                    <p>
                      Každé NFT Muffin je symbolem členství, důvěry a aktivní účasti na vývoji projektu.
                    </p>
                    <p>
                      NFT kolekce bude vznikat ve více tematických fázích a nabídne nejen vizuální příběh, ale i 
                      praktické využití – od hlasování v DAO, přes přístup k exkluzivním funkcím až po 
                      bonusy ve stakingu.
                    </p>
                    <p className="italic mt-6 mb-8">
                      „MuffinFi NFT není jen obrázek. Je to digitální hlas, tvář komunity a jasný důkaz podpory 
                      projektu."
                    </p>
                    
                    <h3>🔧 JAK BUDE NFT SYSTÉM FUNGOVAT</h3>
                    <p>
                      NFT kolekce MuffinFi bude vydána v několika tematických edicích – první z nich 
                      ponese název
                    </p>
                    <p className="my-4">
                      🍪 <strong style={{ display: 'inline' }}>MuffinFi Genesis (100 NFT)</strong>, která představí počáteční komunitu a základní vizuální 
                      identitu projektu.
                    </p>
                    <p className="mb-4">Každé NFT bude mít:</p>
                    <ul>
                      <li>🍪 unikátní 3D muffin postavu s vlastním jménem a charakterem,</li>
                      <li>⚙️ atributy jako Voting Power, Staking Boost, Charity Rank,</li>
                      <li>🌐 metadata uložená on-chain pro zajištění ověřitelnosti a transparentnosti,</li>
                      <li>🔗 přímé propojení s DAO – vlastnictví NFT bude opravňovat držitele k hlasování o 
                      projektech charity i rozvoje.</li>
                    </ul>
                    <p className="mt-6">
                      NFT budou vydána formou veřejného mintu (fair launch, bez předprodeje) s nízkým 
                      vstupem pro komunitu.
                    </p>
                    
                    <h3>🌐 ROLE NFT V EKOSYSTÉMU MUFFINFI</h3>
                    <p>NFT hrají v projektu MuffinFi tři zásadní role:</p>
                    
                    <div className="my-8">
                      <h4 className="mb-3">1. Vizuální a reputace</h4>
                      <p className="ml-6 mb-6">
                        Každý držitel NFT získá vlastní vizuální a digitální profil v rámci komunity. NFT 
                        bude sloužit jako průkaz člena, který se aktivně zapojuje do hlasování a drží 
                        hodnoty projektu.
                      </p>
                      
                      <h4 className="mb-3">2. Funkční přínos</h4>
                      <p className="ml-6 mb-4">
                        NFT budou propojena na DAO a staking kontrakty – držitelé získají bonusy (např. 
                        vyšší staking odměny, přístup do uzavřených kanálů, přednostní hlasování).
                      </p>
                      
                      <h4 className="mb-3">3. Charitativní symbolika</h4>
                      <p className="ml-6">
                        Vybraná část výtěžku z NFT prodeje bude směřovat do Charity Wallet, aby NFT 
                        měly nejen estetickou, ale i reálnou hodnotu dobra.
                      </p>
                    </div>
                    
                    <p className="italic mt-6 mb-8">
                      „NFT nejsou jen umění. Jsou to digitální klíče k důvěře, účasti a zodpovědnosti."
                    </p>
                    
                    <h3>🛠️ PLÁN VÝVOJE NFT SYSTÉMU</h3>
                    
                    <div className="space-y-4 lg:space-y-6 my-6 lg:my-8">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🟢 Fáze 1:</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Vytvoření 3D designu NFT postav (10 unikátních Muffinů) a příprava metadat pro 
                          první kolekci.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Fáze 2:</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Spuštění veřejného mintu kolekce MuffinFi Genesis (100 NFT) — férový launch bez 
                          předprodeje, přístupný celé komunitě.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-purple-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🟣 Fáze 3:</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Napojení NFT na DAO systém – držitelé získají hlasovací právo podle atributů svého 
                          NFT (Voting Power, Charity Rank apod.).
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🟠 Fáze 4:</h4>
                        <p className="text-slate-700 text-base lg:text-lg">
                          Rozšíření NFT funkcí o staking bonusy, badge systém a rozvoj komunitních NFT 
                          fondů pro aktivní členy ekosystému MuffinFi.
                        </p>
                      </div>
                    </div>
                    
                    <p className="italic mt-8 mb-6">
                      NFT systém MuffinFi přináší spojení mezi vizuálním uměním, komunitní 
                      důvěrou a technologií blockchainu.
                    </p>
                    <p className="italic">
                      NFT se stanou digitální identitou komunity, která posílí propojení mezi 
                      tokenem, charitou a DAO.
                    </p>
                  </>
                }
              />

              {/* Transparentnost a komunita */}
              <WhitepaperSection
                id="transparentnost"
                title="🔍 TRANSPARENTNOST A KOMUNITA"
                content={
                  <>
                    <h3>🌐 Smysl a význam transparentnosti</h3>
                    <p>
                      Transparentnost je základním kamenem projektu MuffinFi.
                    </p>
                    <p>
                      Na rozdíl od většiny krypto projektů MuffinFi staví důvěru nad hype a spekulaci — 
                      vše, co se v ekosystému děje, je veřejně dohledatelné a ověřitelné přímo na 
                      blockchainu Ethereum.
                    </p>
                    <p>
                      Každý dar, každá alokace a každé hlasování budou mít svůj TX hash (transakční 
                      záznam), který si může kdokoli z komunity ověřit pomocí Etherscanu.
                    </p>
                    <p>
                      Tím je zajištěno, že žádný pohyb tokenů nezůstane skrytý a že komunita vždy vidí, 
                      kam prostředky směřují.
                    </p>
                    <p className="italic mt-6 mb-8">
                      „Důvěra nevzniká z anonymity, ale z otevřenosti."
                    </p>
                    
                    <h3>🔗 VEŘEJNÉ NÁSTROJE PRO KONTROLU A OVĚŘENÍ</h3>
                    <p>
                      MuffinFi poskytne komunitě přehledné způsoby, jak sledovat vývoj projektu i pohyb 
                      prostředků:
                    </p>
                    <ul>
                      <li>🌐 Oficiální Etherscan odkazy – přímé zobrazení všech veřejných peněženek 
                      projektu (Charita, DAO, Burn, Staking...).</li>
                      <li>📊 Dashboard Transparency (v plánu 2026) – vizuální přehled všech transakcí, darů 
                      a spalování tokenů.</li>
                      <li>📄 Veřejné reporty o charitě – pravidelné čtvrtletní souhrny (komunitní PDF nebo 
                      webová stránka).</li>
                      <li>🗳️ Komunitní hlasování přes DAO – komunita rozhoduje o klíčových otázkách, jako 
                      je přidělení charity či rozvoj stakingu.</li>
                      <li>🗨️ Otevřená komunikace – všechny informace, návrhy i změny budou 
                      zveřejňovány na Discordu, X (Twitteru) a oficiálním webu.</li>
                    </ul>
                    
                    <h3>💬 SÍLA KOMUNITY MUFFINFI</h3>
                    <p>
                      Komunita je srdcem projektu.
                    </p>
                    <p>
                      MuffinFi vzniklo proto, aby ukázalo, že společně mohou lidé vytvářet reálnou změnu, 
                      když mají k dispozici technologie a transparentní systém.
                    </p>
                    <p>
                      Každý držitel tokenu $MFND je součástí rozhodování — ať už prostřednictvím DAO 
                      hlasování, návrhů projektů, nebo samotného držení tokenu, které posiluje stabilitu a 
                      důvěru.
                    </p>
                    <p>
                      MuffinFi bude podporovat otevřenou kulturu spolupráce, kde se komunita může:
                    </p>
                    <ul>
                      <li>zapojit do charitativních návrhů,</li>
                      <li>navrhovat zlepšení webu, NFT či DAO,</li>
                      <li>účastnit se pravidelných AMA (Ask Me Anything) diskuzí,</li>
                      <li>získávat odměny za aktivní zapojení (komunitní bounty, DAO granty).</li>
                    </ul>
                    <p className="italic mt-6 mb-8">
                      „Komunita není jen publikum. Je to motor, který pohání MuffinFi vpřed."
                    </p>
                    
                    <h3>🕯️ ZÁSADY KOMUNIKACE A DŮVĚRY</h3>
                    <p>MuffinFi staví komunikaci na třech principech:</p>
                    <ol className="list-decimal ml-8 my-6 space-y-3">
                      <li><strong style={{ display: 'inline' }}>Otevřenost</strong>{' '}– každý krok projektu je veřejně zdokumentován.</li>
                      <li><strong style={{ display: 'inline' }}>Důvěryhodnost</strong>{' '}– všechny údaje lze ověřit on-chain.</li>
                      <li><strong style={{ display: 'inline' }}>Úcta ke komunitě</strong>{' '}– každý hlas má váhu, žádný názor není přehlížen.</li>
                    </ol>
                    <p>
                      Tento přístup zajišťuje, že MuffinFi si udrží reputaci poctivého, komunitního a 
                      dlouhodobě udržitelného projektu.
                    </p>
                    
                    <p className="italic mt-8 mb-6">
                      Transparentnost a komunita tvoří základní pilíře projektu MuffinFi. 
                      Blockchain poskytuje nezkresitelný důkaz o každé transakci, zatímco 
                      komunita přináší lidskost, zpětnou vazbu a sílu k růstu.
                    </p>
                    <p className="italic mb-6">
                      „Technologie bez lidí je jen kód.
                    </p>
                    <p className="italic mb-6">
                      Důvěra bez transparentnosti je jen slib.
                    </p>
                    <p className="italic">
                      MuffinFi spojuje obojí."
                    </p>
                  </>
                }
              />

              {/* DAO a správa komunity */}
              <WhitepaperSection
                id="dao"
                title="🏛️ DAO A SPRÁVA KOMUNITY"
                content={
                  <>
                    <h3>💡 Smysl DAO v ekosystému MuffinFi</h3>
                    <p>
                      DAO (Decentralized Autonomous Organization) představuje klíčový krok směrem k úplné 
                      decentralizaci projektu MuffinFi.
                    </p>
                    <p>
                      Jeho cílem je umožnit komunitě spolurozhodovat o směru projektu – férově, transparentně 
                      a bez centrální autority.
                    </p>
                    <p>Držitelé tokenů $MFND a NFT MuffinFi získají právo podílet se na:</p>
                    <ul>
                      <li>rozhodování o charitativních aktivitách,</li>
                      <li>úpravách stakingu,</li>
                      <li>směřování roadmapy,</li>
                      <li>hlasování o komunitních či technických návrzích,</li>
                      <li>strategických partnerstvích a vývoji projektu.</li>
                    </ul>
                    <p className="italic mt-6 mb-8">
                      „Síla MuffinFi nevzniká v jednom člověku. Rodí se ve stovkách hlasů, které společně 
                      určují jeho budoucnost."
                    </p>
                    
                    <h3>🔧 Základní princip fungování DAO</h3>
                    <p>
                      DAO bude spuštěno podle roadmapy v roce 2027 a bude propojeno s tokenovým i NFT 
                      ekosystémem.
                    </p>
                    <p>
                      Hlasování bude probíhat pomocí osvědčených governance protokolů, jako je Snapshot.
                    </p>
                    <p>Každý hlas bude:</p>
                    <ul>
                      <li>transparentní,</li>
                      <li>ověřitelný,</li>
                      <li>veřejně dohledatelný na blockchainu.</li>
                    </ul>
                    <p>DAO bude obsahovat:</p>
                    <ul>
                      <li>komunitní návrhy (proposals),</li>
                      <li>veřejnou diskuzi,</li>
                      <li>hlasování držitelů,</li>
                      <li>automatické vyhodnocení výsledků.</li>
                    </ul>
                    
                    <h3>⚖️ Hlasovací systém MuffinFi (Token Power + NFT Power)</h3>
                    <p>MuffinFi využívá hybridní hlasovací model, který spojuje:</p>
                    <p>🟨 <strong style={{ display: 'inline' }}>Token Power</strong> – síla podle držených tokenů MFND</p>
                    <p>🟪 <strong style={{ display: 'inline' }}>NFT Power</strong> – komunitní bonusová síla podle držených NFT</p>
                    <p className="mt-6">
                      Tento model vytváří rovnováhu mezi ekonomickou účastí a komunitní identitou.
                    </p>
                    
                    <h3>🟨 Token Power – hlasování podle množství MFND</h3>
                    <p>
                      Každý držitel tokenu MFND získává hlasovací sílu podle pevně daných pravidel:
                    </p>
                    <ul>
                      <li><strong style={{ display: 'inline' }}>1 000 MFND = 1 hlas</strong></li>
                      <li><strong style={{ display: 'inline' }}>100 000 MFND = 5 hlasů</strong></li>
                      <li><strong style={{ display: 'inline' }}>1 000 000 MFND = 10 hlasů</strong></li>
                    </ul>
                    <p className="mt-6">
                      Token Power vyjadřuje ekonomickou účast držitele – čím více tokenů vlastní, tím větší 
                      podíl má na rozhodování projektu.
                    </p>
                    
                    <h3>🟪 NFT Power – hlasování podle držených NFT MuffinFi</h3>
                    <p>
                      Držitelé NFT získávají speciální bonusové hlasy podle typu NFT.
                    </p>
                    <p>Každé NFT může mít jinou hlasovací sílu, například:</p>
                    <ul>
                      <li><strong style={{ display: 'inline' }}>Základní NFT = 1 hlas</strong></li>
                      <li><strong style={{ display: 'inline' }}>Rare NFT = 5 hlasů</strong></li>
                      <li><strong style={{ display: 'inline' }}>Legendary NFT = 10 hlasů</strong></li>
                    </ul>
                    <p className="mt-6">
                      NFT Power oceňuje loajalitu, identitu a dlouhodobou podporu komunity.
                    </p>
                    
                    <h3>⚖️ Finální hlas = Token Power + NFT Power</h3>
                    <p>Každý člen DAO má finální hlasovací sílu složenou ze dvou částí:</p>
                    <p className="mt-4 mb-4">
                      👉 <strong style={{ display: 'inline' }}>Finální hlas = hlasy z tokenů MFND + hlasy z NFT</strong>
                    </p>
                    <p>Tento systém:</p>
                    <ul>
                      <li>brání dominanci velkých investorů,</li>
                      <li>podporuje komunitu a loajalitu,</li>
                      <li>zajišťuje férové a vyvážené hlasování,</li>
                      <li>zapojuje ekonomické i komunitní členy.</li>
                    </ul>
                    
                    <h3>📦 Příklady hlasovací síly (pro úplnou srozumitelnost)</h3>
                    <div className="my-8 space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-6">
                        <h4 className="text-blue-900 mb-3 text-xl">👤 Uživatel A</h4>
                        <p className="text-slate-700 mb-2">drží 100 000 MFND → 5 hlasů</p>
                        <p className="text-slate-700 mb-2">vlastní 1 NFT (1 hlas)</p>
                        <p className="text-slate-700"><strong style={{ display: 'inline' }}>➡️ Celkem: 6 hlasů</strong></p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6">
                        <h4 className="text-green-900 mb-3 text-xl">👤 Uživatel B</h4>
                        <p className="text-slate-700 mb-2">drží 1 000 000 MFND → 10 hlasů</p>
                        <p className="text-slate-700 mb-2">nevlastní NFT</p>
                        <p className="text-slate-700"><strong style={{ display: 'inline' }}>➡️ Celkem: 10 hlasů</strong></p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-6">
                        <h4 className="text-purple-900 mb-3 text-xl">👤 Uživatel C</h4>
                        <p className="text-slate-700 mb-2">drží 5 000 MFND → 1 hlas</p>
                        <p className="text-slate-700 mb-2">vlastní 2 NFT (2 hlasy)</p>
                        <p className="text-slate-700"><strong style={{ display: 'inline' }}>➡️ Celkem: 3 hlasy</strong></p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-2xl p-6">
                        <h4 className="text-orange-900 mb-3 text-xl">👤 Uživatel D</h4>
                        <p className="text-slate-700 mb-2">drží 0 tokenů</p>
                        <p className="text-slate-700 mb-2">vlastní 3 NFT (3 hlasy)</p>
                        <p className="text-slate-700"><strong style={{ display: 'inline' }}>➡️ Celkem: 3 hlasy</strong></p>
                      </div>
                    </div>
                    <p className="italic mt-6 mb-8">
                      Tento jednoduchý systém pochopí každý, kdo vstoupí do projektu.
                    </p>
                    
                    <h3>📌 Typy návrhů v DAO MuffinFi</h3>
                    <p>DAO umožní hlasování o:</p>
                    <ul>
                      <li>výběru charitativních projektů,</li>
                      <li>alokaci prostředků z Charity Wallet,</li>
                      <li>změnách parametrů stakingu,</li>
                      <li>rozvoji NFT kolekcí,</li>
                      <li>budoucích partnerstvích,</li>
                      <li>rozšíření ekosystému MuffinFi.</li>
                    </ul>
                    <p className="mt-6">
                      Každý schválený návrh bude transparentně zaznamenán na blockchainu.
                    </p>
                    
                    <h3>🔐 Bezpečnost a transparentnost governance</h3>
                    <p>Pro zajištění bezpečnosti MuffinFi DAO využije:</p>
                    <ul>
                      <li>auditované governance kontrakty (OpenZeppelin, Snapshot),</li>
                      <li>víceúrovňovou autorizaci (např. multisig),</li>
                      <li>transparentní treasury sledovanou on-chain,</li>
                      <li>veřejné archivy hlasování i návrhů.</li>
                    </ul>
                    <p className="italic mt-6 mb-8">
                      „Transparentnost není kontrola. Je to odpovědnost vůči komunitě."
                    </p>
                    
                    <h3>🟠 Přechod k plné decentralizaci</h3>
                    <p>Jakmile bude DAO stabilní a ekosystém plně funkční, MuffinFi přejde na:</p>
                    <ul>
                      <li>renounce ownership (vzdání se vlastnictví),</li>
                      <li>nezměnitelný governance model,</li>
                      <li>komunitně řízenou správu projektu.</li>
                    </ul>
                    <p className="mt-6">
                      V této fázi bude MuffinFi skutečně decentralizovaný projekt řízený komunitou držitelů 
                      tokenů a NFT.
                    </p>
                    
                    <h3 className="mt-7 lg:mt-8">🧁 Shrnutí DAO MuffinFi</h3>
                    <p>DAO MuffinFi přináší:</p>
                    <ul>
                      <li>férové hlasování,</li>
                      <li>rovnováhu mezi ekonomikou a komunitou,</li>
                      <li>transparentní správu,</li>
                      <li>digitální identitu pomocí NFT,</li>
                      <li>plnou decentralizaci projektu.</li>
                    </ul>
                    <p className="italic mt-8 mb-6">
                      „Budoucnost MuffinFi píše komunita. Každý hlas má význam."
                    </p>
                  </>
                }
              />

              {/* Roadmap */}
              <WhitepaperSection
                id="roadmap"
                title="🗺️ ROADMAP 2025 → 2028"
                content={
                  <>
                    <p>
                      Roadmap MuffinFi představuje dlouhodobý plán vývoje projektu od startovní fáze až 
                      po úplnou decentralizaci a globální rozšíření.
                    </p>
                    <p>
                      Každý rok přináší konkrétní kroky, které propojují technologii, komunitu a 
                      charitativní cíle.
                    </p>
                    <p>
                      Cílem je budovat stabilní ekosystém, který roste organicky – ne spekulací, ale 
                      skutečnou hodnotou, důvěrou a komunitní spoluprací.
                    </p>
                    <p className="italic mt-6 mb-8">
                      „Roadmapa není jen plán. Je to závazek vůči komunitě, že každý krok MuffinFi 
                      má smysl, cíl a dopad."
                    </p>

                    <h3>⚙️ FÁZE VÝVOJE PROJEKTU</h3>
                    
                    <div className="space-y-6 lg:space-y-8 mt-6 lg:mt-8">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-blue-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Fáze 1 – Startovní fáze</h4>
                        <ul className="text-slate-700 space-y-1 lg:space-y-2 text-sm lg:text-base">
                          <li>• Nasazení tokenu $MFND na síť Ethereum (ERC-20).</li>
                          <li>• Ověření a verifikace kontraktu na Etherscan.</li>
                          <li>• Zveřejnění zdrojových souborů (ABI, bytecode, audit).</li>
                          <li>• Zahájení vývoje webu MuffinFi a whitepaperu v1.</li>
                          <li>• Budování komunity a transparentní komunikace.</li>
                          <li>• Zahájení vývoje stakingu, NFT a DAO systémů.</li>
                        </ul>
                        <p className="text-red-600 mt-3 lg:mt-4 text-sm lg:text-base">
                          🔴 Cíl: vytvořit důvěru, základy komunity a transparentní ekosystém.
                        </p>
                        <p className="italic text-slate-600 mt-3 lg:mt-4 text-sm lg:text-base">
                          „V této fázi jsou funkce DAO, staking a NFT pouze ve fázi návrhu a designu 
                          (nejsou ještě aktivní)."
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-emerald-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Fáze 2 – Staking & Stabilizace</h4>
                        <ul className="text-slate-700 space-y-1 lg:space-y-2 text-sm lg:text-base">
                          <li>• Spuštění staking kontraktu s Dashboardem (MuffinFi App).</li>
                          <li>• Možnost uzamknout tokeny a získávat odměny ze Staking Rewards poolu.</li>
                          <li>• Testování různých modelů a bezpečnostních funkcí (OpenZeppelin templates).</li>
                          <li>• Rozšíření komunitních aktivit, první AMA, soutěže, early rewards.</li>
                          <li>• Příprava DAO governance rámce a první charitativní přehledy.</li>
                        </ul>
                        <p className="text-red-600 mt-3 lg:mt-4 text-sm lg:text-base">
                          🔴 Cíl: stabilizovat hodnotu tokenu, odměnit dlouhodobé držitele v 
                          projektu.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-purple-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Fáze 3 – NFT a DAO</h4>
                        <ul className="text-slate-700 space-y-1 lg:space-y-2 text-sm lg:text-base">
                          <li>• Vydání první veřejné NFT kolekce MuffinFi Genesis (100 NFT).</li>
                          <li>• Propojení NFT s DAO – NFT získávají hlasovací sílu a voting power.</li>
                          <li>• Spuštění DAO hlasování přes Snapshot / MuffinFi Governance Hub.</li>
                          <li>• První komunitní rozhodnutí o využití Charity Wallet.</li>
                          <li>• Rozvoj webu a sekci NFT, DAO a veřejné charitativní reporty.</li>
                        </ul>
                        <p className="text-red-600 mt-3 lg:mt-4 text-sm lg:text-base">
                          🔴 Cíl: posílit komunitu a propojit ji s reálnými rozhodnutími a funkcemi.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl lg:rounded-2xl p-4 lg:p-8">
                        <h4 className="text-orange-900 mb-3 lg:mb-4 text-lg lg:text-2xl">🔵 Fáze 4 – Plná decentralizace</h4>
                        <ul className="text-slate-700 space-y-1 lg:space-y-2 text-sm lg:text-base">
                          <li>• Aktivace plné správy komunity (DAO Treasury, voting, návrhy).</li>
                          <li>• Oficiální Renounce Ownership – vzdání se vlastnictví smart kontraktu.</li>
                          <li>• Komunitou podporu nových modulů (např. V2 Staking, LP DAO, rozšíření).</li>
                          <li>• Zavedení globálních partnerství a komunitních fondů pro dlouhodobou podporu.</li>
                          <li>• Publikace Whitepaper v2 – rozšířená vize, výsledky a nové cíle projektu.</li>
                        </ul>
                        <p className="text-red-600 mt-3 lg:mt-4 text-sm lg:text-base">
                          🔴 Cíl: završit přechod k plně komunitní správě a transparentnímu vývoji projektu MuffinFi.
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="mt-10 lg:mt-12">🌍 SHRNUTÍ ROADMAPY</h3>
                    <p>
                      Každý krok roadmapy MuffinFi je postaven na třech pilířích:
                    </p>
                    <p><strong style={{ display: 'inline' }}>důvěra, komunita a dlouhodobá hodnota.</strong></p>
                    <p>
                      Od technického nasazení až po plnou decentralizaci zůstává MuffinFi věrné svému 
                      poslání – spojujeme blockchain s reálnou pomocí a lidskostí.
                    </p>
                    <p className="italic mt-6 mb-6">
                      MuffinFi neroste rychlostí hype. Roste silou komunity.
                    </p>
                  </>
                }
              />

              {/* Závěr a vize */}
              <WhitepaperSection
                id="zaver"
                title="🌟 ZÁVĚR A VIZE PROJEKTU MUFFINFI"
                content={
                  <>
                    <h3>🎯 Poslání a závěrečné myšlenky</h3>
                    <p>
                      MuffinFi vznikl z jednoduché, ale hluboké myšlenky — ukázat, že technologie může 
                      mít lidskou tvář.
                    </p>
                    <p>
                      V době, kdy svět kryptoměn často spojuje spekulace, chaos a nejistota, MuffinFi 
                      představuje jiný směr: decentralizovaný ekosystém založený na důvěře, transparentnosti a skutečné 
                      pomoci.
                    </p>
                    <p>
                      Každý token $MFND, každé NFT a každá transakce jsou malou součástí většího cíle – 
                      propojit blockchain s reálným dopadem ve světě.
                    </p>
                    <p className="italic mt-6 mb-8">
                      „MuffinFi není o tom, kolik vyděláme, ale kolik dobra dokážeme vytvořit."
                    </p>

                    <h3>🌍 VIZE DO BUDOUCNA</h3>
                    <p>
                      MuffinFi Foundation se chce stát symbolem nového typu decentralizovaného projektu – 
                      takového, který kombinuje sílu komunity s odpovědným využitím technologií.
                    </p>
                    
                    <h4 className="mt-6 mb-4">Naše vize do roku 2030:</h4>
                    <ul className="space-y-3">
                      <li>• <strong style={{ display: 'inline' }}>Komunita jako srdce projektu:</strong>{' '}DAO bude zcela řídit směr projektu a charitativní 
                      aktivity.</li>
                      <li>• <strong style={{ display: 'inline' }}>Reálný dopad:</strong>{' '}Každý dar, který projde přes MuffinFi, bude veřejně dohledatelný, 
                      měřitelný a zdokumentovaný.</li>
                      <li>• <strong style={{ display: 'inline' }}>Globální rozšíření:</strong>{' '}Navázání partnerství s mezinárodními charitativními 
                      organizacemi a blockchain komunitami.</li>
                      <li>• <strong style={{ display: 'inline' }}>Edukace a inovace:</strong>{' '}MuffinFi chce inspirovat další projekty, aby spojily DeFi 
                      s lidskostí.</li>
                      <li>• <strong style={{ display: 'inline' }}>Stabilita a důvěra:</strong>{' '}Udržet rovnováhu mezi pokrokem a odpovědností vůči 
                      držitelům a světu.</li>
                    </ul>

                    <h3 className="mt-8 lg:mt-10">💎 FILOZOFIE MUFFINFI</h3>
                    <p>
                      MuffinFi stojí na třech pilířích, které definují celý ekosystém:
                    </p>
                    <div className="space-y-3 mt-4">
                      <p><strong style={{ display: 'inline' }}>1. Komunita</strong> – Každý držitel tokenu nebo NFT je součástí něčeho většího.</p>
                      <p><strong style={{ display: 'inline' }}>2. Transparentnost</strong> – Vše je ověřitelné, žádné rozhodnutí se neschovává za anonymitu.</p>
                      <p><strong style={{ display: 'inline' }}>3. Pomoc</strong> – Část projektu je vždy věnována těm, kteří ji nejvíce potřebují.</p>
                    </div>
                    <p className="mt-6">
                      Tato kombinace dělá z MuffinFi něco víc než jen kryptoprojekt.
                    </p>
                    <p className="italic">
                      Je to pohyb – společenství lidí, kteří věří, že blockchain může být nástrojem dobra.
                    </p>

                    <h3 className="mt-8 lg:mt-10">✨ ZÁVĚREČNÉ POSELSTVÍ</h3>
                    <p>
                      MuffinFi je teprve na začátku své cesty.
                    </p>
                    <p>
                      Ale právě teď vzniká něco, co má potenciál změnit způsob, jak lidé vnímají 
                      kryptoměny.
                    </p>
                    <p>
                      Projekt, který spojuje technologii, etiku a lidskost – a dává komunitě sílu rozhodovat, 
                      pomáhat a tvořit.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl lg:rounded-2xl p-4 lg:p-8 mt-6 lg:mt-8 text-center">
                      <p className="text-emerald-900 text-lg lg:text-xl mb-3 lg:mb-4">
                        <strong style={{ display: 'inline' }}>„Každý muffin může pomoci. Každý držitel má vliv."</strong>
                      </p>
                      <p className="text-emerald-800 text-base lg:text-lg">
                        <strong style={{ display: 'inline' }}>„Důvěra je základ. Transparentnost je cesta. Komunita je cíl."</strong>
                      </p>
                    </div>
                  </>
                }
              />
            </main>
          </div>
        </div>

        {/* Footer */}
        <WhitepaperFooter />
      </div>
    </div>
  );
}