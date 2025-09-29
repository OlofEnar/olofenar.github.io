import {Helmet} from "react-helmet";
import styles from "@/pages/About/DesignPage.module.scss"

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About | Olof Maleki Nordin</title>
                <meta
                    name="description"
                    content="Learn more about Olof Maleki Nordin – software developer, UX designer, and creative thinker based in Sweden."
                />
                <link rel="canonical" href="https://olofenar.github.io/about"/>
            </Helmet>
            <p className={styles.p}>Jag söker mig till den annonserade tjänsten som webbstrateg eftersom jag utifrån
                tjänstebeskrivningen ser en möjlighet att både få bidra med samhällsnytta och arbeta med
                design och tjänsteutveckling. Jag har en bakgrund som grafisk designer med mångårig
                yrkeserfarenhet, med en bred kompetens och förståelse för tydlig kommunikation, vilket jag tror
                kommer vara till stor nytta för er. Därutöver har jag vidareutbildat som .NET Systemutvecklare.
                Med en kombinerad bakgrund inom grafisk design och systemutveckling drivs jag av att skapa
                lösningar som inte bara håller tekniskt utan också är användarvänliga. Jag tror att jag med min
                breda kompetens kommer kunna bidra på ett bra sätt till kommunens digitala kommunikation
                och tillgänglighet för medborgarna.
                Min utbildning och tidigare arbetserfarenheter har gett mig goda kunskaper inom
                systemutveckling och även frontend. Jag har arbetat praktiskt med bland annat SQL-
                databaser, .NET och Azure AI-tjänster, samt byggt lösningar som integrerar externa API:er och
                dataflöden. Jag har en bred bakgrund inom digitala projekt, både som utvecklare och grafisk
                designer.
                Jag är van att jobba agilt i projekt och har ofta varit med från beställning till slutförande och
                leverans. Detta har gett mig en god förståelse för hur viktigt det är att bygga användarvänliga
                tjänster och jag har som vana att visualisera hur UI/UX kommer att vara tidigt. Jag är van vid att
                driva digitala projekt både som frilansare och i arbetsgrupper. Jag har stor erfarenhet av att
                arbeta tvärfunktionellt med olika kompetenser.
                Webbutveckling (Inkl. PHP/Wordpress och JS) har ingått i mina arbetsuppgifter sedan tidigare
                men jag har känt att jag har saknat full förståelse om hur allt hänger ihop, därav min
                vidareutbildning inom systemutveckling. Min utbildning har varit både väldigt givande och
                utmanande och jag känner mig peppad på att fortsätta att utvecklas.
                Som person är jag nyfiken och tycker om problemlösning och är en konstruktiv kraft i
                gruppsammanhang. Jag är självständig i mitt arbete men gillar att arbeta i team och är peppad
                på att lära mig nya saker. På fritiden gillar jag att åka längd eller utför, skrota runt på gården i
                Järvsö eller snickra på något projekt.</p>
        </>
    );
}
