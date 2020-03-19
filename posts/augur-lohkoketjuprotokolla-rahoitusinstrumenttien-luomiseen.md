---
title: 'Augur: Lohkoketjuprotokolla rahoitusinstrumenttien luomiseen'
date: 2019-10-23T08:29:00.000Z
tags:
  - Augur
  - Project-specific
  - Finnish
---
### 1. Web 3.0

Augur on merkittävä rakennuspalikka Internet-natiiville taloudelle.

![](/static/img/web3.png "Hajautetut sovelluksetkäyttävät lohkoketjuprotokollia kuluttajille suunnatuissa tuotteissa ja palveluissa. Yritykset, jotka luovat hajautettuja sovelluksia keskittyvät asiakashankintaan. Lohkoketjuprotokollat tarjoavat avoimia finanssi- ja tietojenkäsittelypalveluita sovelluksille. Protokollien kehittäjät keskittyvät luotettavan ja hyödyllisen infrastruktuurin rakentamiseen.")

### 2. Yleiskatsaus

Augur on protokolla rahoitusinstrumenttien (1) luomiseen, (2) kaupankäyntiin ja (3) selvitykseen.

![](/static/img/augurproducts.png "Augur-markkinat ovat joko binääri- tai skalaarimarkkinoita.Binäärimarkkinoiden tuotot ovat vakioita. Useita binäärimarkkinoita yhdistämällä voi luoda myös monivalintaisen markkinan. Skalaarimarkkinoiden tuotot perustuvat jatkuvaan hintasyötteeseen. Skalaarimarkkinoilla käyttäjät voivat ostaa tai myydä lyhyeksi tiettyä kohde-etuutta sen nykyisen markkinahinnan mukaan.")

**Binäärimarkkina**

* Kuka on vuoden 2022 jalkapallon MM-kisojen mestari?
* Valitaanko Donald Trump uudelleen Yhdysvaltojen presidentiksi?
* Onko EUR/USD-kurssi yli 1.10 tammikuun 1. 2020?

**Skalaarimarkkina**

* Mikä on Teslan osakkeen hinta tammikuun 1. 2020?
* Mikä on Facebookin Q3 2019 osakekohtainen tulos (EPS)?
* Kuinka monta onnistunutta kolmen pisteen heittoa Stephen Curry tekee NBA kaudella 2019–2020?

### 3. Protokolla

Augur-markkinat operoivat ilman kolmansia osapuolia. Markkinan luomisen yhteydessä lasketaan liikkeeseen osakkeita, jotka binäärimarkkinoissa edustavat tapahtumien todennäköisyyksiä ja skalaarimarkkinoissa alla olevan kohde-etuuden hintaa.

![](/static/img/augurprotocol.png "Augur-markkinan kolme vaihetta. Käyttäjien ei tarvitse luottaa kolmansiin osapuoliin ja kaupankäynti tapahtuu yksinomaan vertaisverkossa.")

### 4.1. Ongelma: Korkeat kaupankäyntikustannukset

Augur keskittää globaalin likviditeetin yhteen markkinapaikkaan, mikä alentaa kaupankäyntikustannuksia merkittävästi.

![](/static/img/augurcheap.png "Matalammat kaupankäyntikustannukset houkuttelevat käyttäjiä ja lisäävät markkinatakaajien intressiä tarjota likviditeettiä Augur-markkinnoille.")

* **Ongelma:**perinteisillä vedonlyöntimarkkinoilla on korkeat kaupankäyntikustannukset (5–10%) sekä muita rajoitteita.
* **Ratkaisu:**Augur keskittää kaiken kysynnän yhteen avoimeen globaaliin tarjouskirjaan.
* **Augur käytännössä:**Augur-markkinoilla on noin 1% kaupankäyntikustannukset. Suosituimmilla markkinoilla tämä luku on usein noin 0.25–0.50%. Oletus on, että kaupankäyntikustannukset pienenevät Augurin suosion kasvaessa.

### 4.2. Ongelma: Osallistumisen rajoitteet

Augur-markkinoihin voi osallistua kuka tahansa.

![](/static/img/augurlimited.png "Maantieteellisten ja muiden sijoittajarajoitteiden poistaminen antaa useammalle mahdollisuuden osallistua finanssimarkkinoihin.")

* **Ongelma:**usein finanssimarkkinoihin osallistumista rajoittaa maantieteelliset syyt tai muut sijoittajakohtaiset vaatimukset.
* **Ratkaisu:**Augur-markkinoille voi osallistua kuka vain Internetin välityksellä eikä osallistumista voida estää.
* **Augur käytännössä:**käyttäjät yhdistävät Augur-markkinoihin yrityksen hostaaman verkko- tai mobiilisovelluksen avulla tai suoraan omalta koneeltaan.

### 4.3. Ongelma: Rajoitteet markkinoiden luomiselle

Augur-markkinan voi luoda kuka tahansa (kustannus on erittäin matala).

![](/static/img/augurmarketmaking.png "Kun markkinoita on helpompi luoda niitä myös tehdään enemmän.")

* **Ongelma:**uuden markkinan luominen (esim. uuden tuotteen listaaminen CME:n kaltaiseen pörssiin) vaatii miljoonien eurojen investoinnin ja tuotteen liikkeeseenlasku voi kestää vuosia.
* **Ratkaisu:**Augur-markkinan voi luoda kuka tahansa (kustannus on erittäin matala). Kynnyksen alentaminen johtaa uusiin markkinoihin ja käyttökohteisiin.
* **Augur käytännössä:**Kaksi Augur-käyttäjää loi markkinan $500k vedolle (*Which party will control the House after 2018 U.S. Midterm Election?*). Molemmat osapuolet pystyivät luottamaan Augur-markkinoiden selvitysprosessiin.

### 5. Protokollan jatkokehitys

Augur v1 (Q3 2018) oli kokeilu protokollan toimivuudesta. Augur v2 (Q1 2020) keskittyy käyttökokemuksen parantamiseen.

**V1 Saavutukset**

* **Turvalliset markkinat:**2700+ markkinaa ja kaikkien tulokset selvitettiin oikein.
* **Toimiva kaupankäynti:**35 000+ osto- ja myyntitoimeksiantoa.
* **Kysyntä Augur-markkinoille:**suosituimman markkinan volyymi oli yli $3 miljoonaa: “*Which party will control the House after 2018 U.S. Midterm Election?”*

**V1 Ongelmat**

* **Volatiilisuus:**treidaajat joutuivat kantamaan ETH-virtuaalivaluutan volatiliteettiriskin.
* **Hidas ja kallis kaupankäynti:**erityisesti markkinatakaajan tehtävä oli epätehokas täysin lohkoketjupohjaisessa tarjouskirjassa (toimeksiantojen muokkaus kestää minuutteja, $3+ kustannus per toimeksianto jne.).
* **Hidas selvitys:**voittojen maksamisessa saattoi kestää viikkoja tai pahimmissa tapauksissa useita kuukausia.

**V2 Päivitykset**

* **Hintavakaa virtuaalivaluutta:**DAI (Yhdysvaltain dollarin arvoon sidottu virtuaalivaluutta) otetaan käyttöön ensisijaisena kaupankäyntivaluuttana.
* **0x tarjouskirjat:**0x-protokolla integroidaan, jotta rajahintatoimeksiannot voidaan toteuttaa lohkoketjun ulkopuolisessa järjestelmässä, mikä helpottaa markkinatakaajien toimintaa huomattavasti.
* **24-tunnin selvitys:**Markkinoiden selvitysaikaa lyhennetään 24-tunnin ikkunoihin.

### 6. Hintavakaa virtuaalivaluutta

Hintavakaa virtuaalivaluutta mahdollistaa lohkoketjujen monimutkaisuuden piilottamisen loppukäyttäjiltä.

**Augur + DAI = lohkoketjuprotokollien edut ilman volatiilisuutta.**

![](/static/img/augurplusdai.png "Augur v2 markkinoilla kauppaa käydään DAI:lla, eikä käyttäjien tarvitse ottaa huomioon ETH:n volatiilisuutta.")

**Korttimaksut + DAI = loppukäyttäjien ei tarvitse ymmärtää mitään lohkoketjuista.**

![](/static/img/augurpluscredit.png "Augur v2 Betting- ja Trading-käyttöliittymiin on integroitu korttimaksut.")

### 7. Ekosysteemin kasvu

Yhä useampi sovelluskehittäjä rakentaa Augurin päälle. Augur-protokollan verkostovaikutukset kasvavat, kun käyttöliittymät tuovat lisää käyttäjiä ja likviditeettiä.

![](/static/img/augurecosystem.png "Lohkoketjuprotokollat ovat avointa infrastruktuuria sovelluksille. Käyttöliittymiä rakentavat yritykset keskittyvät asiakashankintaan.")

### 8. Kilpailu

Eri protokollien lähestymistavat samankaltaisille finanssimarkkinoille. Augur-protokolla on tehokas ja turvallinen (+paranee skaalautuessa).

![](/static/img/augurcompetition.png "Augurin vertaisverkkomalli on tehokas tapa järjestää finanssimarkkinoita.")

# 9. Arvonmääritys

Token-omistajia palkitaan markkinoiden selvittämisestä. REP-tokeneita tarvitaan markkinoiden selvittämiseen ja palkkioiden ansaitsemiseen.

![](/static/img/augurvaluation.png "Esimerkkimarkkina: “Will Justin Trudeau Be Re-Elected Prime Minister of Canada In The 2019 Election?”. Kaupankäyntivolyymi 701 ETH (~$120k). Selvityspalkkio REP-token omistajille 1.01%.")

### 10. Markkinapotentiaali

Finanssimarkkinoiden siirtäminen lohkoketjuinfrastruktuuriin luo huomattavan kasvupotentiaalin Augurin kaltaiselle lohkoketjuprotokollalle, joka fasilitoi parhaimmillaan globaalia kaupankäyntiä.

**Osakekohtainen tulos (REP-token) =**

* Avoimet osuudet x keskimääräinen selvityspalkkio / 11,000,000 (REP-tokenien kokonaismäärä).

**10% online-vedonlyöntimarkkinasta**

* $100MRD * {0.25% — 1.00%} / 11,000,000 = {$23 ~ $90}.

**10% johdannaismarkkinasta (bruttoarvo)**

* $1B * {0.25% — 1.00%} / 11,000,000 ={$230 ~ $900}.

- - -

### Liite 1: Tärkeät sivustot ja resurssit

* [Predictions.Global](https://predictions.global/): hakukone Augur-markkinoille.
* [Crystalball.de](http://crystalball.be/stats/): kuvaajia ja tilastoja Augurin älysopimuksista.
* [Curious Giraffe](https://www.curiousgiraffe.io/augur/): kuvaajia ja tilastoja Augurin käytöstä.
* [Explore Augur](https://exploreaugur.com/): tarkempaa dataa yksittäisistä Augur-markkinoista ja kaupoista.
* [Reporters.Chat](https://reporters.chat/): keskustelupalsta Augur-markkinoiden aktiivisille selvittäjille (lähitulevaisuudessa sulkeutuvat markkinat).
* [Augur Discord](https://discordapp.com/invite/cX8tcCy): pääasiallinen Augur-yhteisön keskustelukanava Augur-markkinoista ja protokollan kehityksestä.
* [Augur Javascript API](https://docs.augur.net/): API-dokumentaatio kolmannen osapuolen kehittäjille (Forecast Foundationin ylläpitämä).
* [Blitzproject.io](https://www.blitzpredict.io/): urheiluvedonlyöntisivusto, joka aloittaa toimintansa Augur v2 julkaisun jälkeen Q1 2020.
* [Flux.market](https://flux.market/): sovellus, joka tarjoaa johdannaisia kasvuyritysten tuotteisiin ja kehitykseen liittyen.
* [Guesser.com](https://guesser.com/): yksinkertainen ja käyttäjäystävällinen vedonlyöntisivusto poliittisille- ja urheilumarkkinoille.
* [Augur Betting](https://twitter.com/AugurProject/status/1181475293426524162/photo/1): Forecast Foundationin uusin vedonlyöjille suunnattu käyttöliittymä.
* [Veil (Lopetettu)](https://veil.co/): ennustemarkkinasivusto, joka on toistaiseksi lopettanut toimintansa.
* [Augur Trading](https://v2.augur.net/): Forecast Foundationin uusin markkinatakaajille ja ammattitreidaajille suunnattu työkalu ([kokeiltavana Ethereumin Kovan-testiverkossa](https://v2.augur.net/)).

### Liite 2: Nykyiset vedonlyöntipalvelut

![](/static/img/augurcomps.png "Huomio: Vedonlyöntisivustoilla on yleensä matalat kaupankäynti- ja talletusrajat. Voittavia pelaajia kielletään usein osallistumasta vedonlyöntimarkkinoille.")

### Liite 3: Listausvaatimukset (esim. Nasdaq)

![](/static/img/nasdaqlisting.png "Linkki: Nasdaq Listausvaatimukset.")

### Liite 4: Augurin ongelmat ja kehityskohteet

* **Parasiittiset markkinat:**Epärehellinen toimija voi käyttää Augur-markkinoiden tuloksia muiden kuin Augur-markkinoiden selvittämiseen. Tämä mahdollistaa Augurin selvitysprosessia käyttävän sovelluksen ilman, että selvittäjille maksetaan palkkioita, joita tarvitaan Augurin turvallisuuden takaamiseksi. Tällä hetkellä parasiittisten markkinoiden estämiselle ei ole täydellistä ratkaisua. Todennäköinen ratkaisu on jokin[nollatietotodistusten](https://en.wikipedia.org/wiki/Zero-knowledge_proof) implementaatio, joista [UMA-protokollan ehdotus](https://github.com/UMAprotocol/whitepaper/blob/master/UMA-DVM-oracle-whitepaper.pdf) on toistaiseksi lupaavin.
* **Automaattinen seuraavan markkinan osakkeiden osto:**Automaattisesti uuden markkinan osakkeiden ostaminen mahdollistaisi käyttäjille yksinkertaisen “osta-ja-pidä” käyttökokemuksen. Esimerkiksi Teslan osakkeen hintaa koskeva Augur-markkina, joka päättyy tammikuun 31. päivä, voisi automaattisesti ostaa helmikuun termiinin. Implementaatiosta on keskusteltu jo vuodesta 2017 ja tällä hetkellä se odottaa Augur v2 julkaisua. Ohjelmisto tälle on jo pitkälti kirjoitettu ja odottaa auditointia.
* **Dark Pool-kauppa:** Dark Pool-kauppapaikat mahdollistaisivat täysin anonyymin markkinatakaamisen ja treidaamisen. Dark Pool-kauppapaikat ovat hyödyllisiä mm. markkinatakaajille, jotka eivät halua paljastaa isoja treidejään. Dark Pool-teknologian kehitystyö odottaa eri yksityisyyttä parantavien teknologioiden (enimmäkseen nollatietotodistuksiin pohjautuvien implementaatioiden) jatkokehitystä.
* **2. tason skaalausratkaisut:** 2. tason skaalausratkaisut ovat lohkoketjujen päälle rakennettuja tehokkaampia transaktioprosessointijärjestelmiä, jotka hyötyvät lohkoketjun turvallisuudesta. Sopiva 2. tason skaalausratkaisu poistaisi lohkoketjujen luontaiset latenssirajoitteet (vähintään joitain sekunteja kestävä transaktioprosessointi) ja mahdollistaisi (lähes) ilmaiset transaktiot. Augurin yhteisössä keskustellaan valinnasta[zk-Rollups](https://www.youtube.com/watch?v=QyM9qdFKsEA) ja [Plasma-rinnakkaisketjujen](https://docs.plasma.group/en/latest/src/plasma/sidechains.html) välillä. Oletuksena on, että toimiva implementaatio nähdään Augur v3 julkaisussa (Q2 2020).
* **Viputuotteet:** Augurin päälle sovelluksia rakentavat kehittäjät ovat harkinneet viputuotteiden implementointia. Auguria kehittävä Forecast Foundation on tutkinut[dYdX-](https://dydx.exchange/) and[bZx](https://bzx.network/)-protokollia Augur Betting ja Augur Trading käyttöliittymiin. Vivuttaminen ei todennäköisesti ole mahdollista vielä Augur v2 julkaisun yhteydessä.

### Liite 5: Avainmittarit

* **Kaupankäyntivolyymi:** Augur-markkinoiden kokonaisvolyymi, volyymijakauma markkinoiden välillä, osto- ja myyntimääräysten määrä yms.
* **Käyttäjät:** kokonaiskäyttäjämäärä, markkinatakaajien määrä, palaavat käyttäjät, viikottain/kuukausittain aktiiviset käyttävät yms.
* **Markkinat:**markkinoiden kokonaismäärä, markkinat kategorioittain, suosituimmat markkinatyypit yms.
* **Markkinoiden selvitys:**selvitysprosessissa tapahtuvien erimielisyyksien kokonaismäärä, erimielisyyksien kesto ja kokonaisarvot yms.
* **Palkkiot:**REP-token omistajille maksetut palkkiot, REP-token omistajien osallistumisprosentti, keskimääräiset selvityspalkkiot yms.
* **Augur-integraatiot:** niiden palveluiden ja tuotteiden määrä (ja laatu), jotka rakentavat Augurin päälle. Kolmansien osapuolten luomat markkinatakaaja-, analytiikka-, raportointi-, sovelluskehittäjä-, ja muut työkalut.
* **Yhteisö:**aktiivisen yhteisön koko Reddit ja Discord keskustelupalstoilla. Kolmansien osapuolten luomien sovellusten ja Augurin älysopimusten kehittäjien määrä.

### Liite 6: REP-tokenin perustiedot

* **Tokenien kokonaismäärä:** 11,000,000.
* **Kaikkien tokenien markkina-arvo:** ~$90M.
* **Päivittäinen kaupankäyntivolyymi (pörsseissä):**Tyypillisesti $500k — $2M Messari:n[”Real 10” pörssivolyymien](https://messari.io/article/introducing-real-10-volume-and-liquid-market-cap-on-onchainfx) mukaan.
* **ICO:**järjestettiin elokuussa 2015. Augur oli yksi ensimmäisistä ICO:ista Ethereumin päällä. Forecast Foundation nosti $5.3M rahoituksen.
* **Tokenien liikkeellelasku:**kaikki REP-tokenit luotiin ICO:ssa.
* **Tokenien määrä tulevaisuudessa:**Tokenien määrä on vakio.
* **Tokenien omistajat:** ~57,000 Ethereum-osoitetta, joissa on REP-tokeneita (3 suurinta ovat virtuaalivaluuttapörssejä: Kraken, Poloniex ja Bittrex).

### Liite 7: Volyymiltään suurimmat Augur-markkinat

* **$3,140,775.12:**Which party will control the House after 2018 U.S. Midterm Election?
* **$836,679.15:**Ethereum Price at end of March 2019?
* **$718,838.98:**Will price of Ethereum exceed $500 at the end of 2018
* **$445,007.82:**Ethereum Call/Put Options, Hedging: Dec. 31, 2018.
* **$262,757.63:**Will REP token trade above $32 at the end of 2018
* **$225,816.06:**Ethereum Price at end of April 21st?
* **$195,212.90:**Ethereum Price at End of April
* **$179,880.06:**Will Eth be above $165 at End of May?
* **$162,951.87:**Ethereum Price at Close of April 17, 2019
* **$139,539.38:**Bitcoin Price at End of April
* **$139,242.70:**Will the price of Ethereum exceed $200 at the end of 2018
* **$130,330.84:**Will Donald Trump be Re-Elected in 2020?
* **$129,696.19:**UEFA Champions League — Who will score a goal in the Barcelona vs Manchester Utd match (16 April 2019 UTC)
* **$125,674.28:**English Premier League — Who will score a goal in the Liverpool vs Chelsea match (14 April 2019 UTC)

### Liite 8: Futarkia

1. Joka vuosi kaikilta kansalaisilta pyydetään 0–10 välille sijoittuva arvio menneestä vuodesta. Tätä lukua voi ajatella mittarina jokaisen kansalaisen hyvinvoinnista kuluneena vuotena. Kysely ei anna muuta tietoa, kuin kansalaisten antamat arvot.
2. Summataan kaikkien kansalaisten antamat arvot ja jaetaan summa kansalaisten määrällä. Tätä arvoa voidaan pitää kansan hyvinvoinnin mittarina. Hyvinvoinnin mittarina voidaan ottaa huomioon liukuva keskiarvo usealta vuodelta.
3. Hyvinvoinnin mittarista tehdään Augur-markkina. Treidaajat spekuloivat tulevaisuuden hyvinvoinnin arvoja ja markkinahinnat muuttuvat jatkuvasti sitä mukaa, kun yhteiskunnassa tapahtuu asioita.
4. Kuka tahansa voi tehdä lakialoitteen (oletetaan, että aloite sisältää riittävät tiedot sen implementointia varten).
5. Luodaan kaksi Augur-markkinaa kansalaisten tulevaisuuden hyvinvoinnista. Yhdessä markkinassa lakialoite on hyväksytty. Toisessa markkinassa lakialoite on hylätty. Molemmille tulevaisuuksille syntyy jokin kansalaisten hyvinvointia kuvaava markkina-arvo (*HyvinvointiJosHyväksytty >< HyvinvointiJosHylätty*). Mikäli *HyvinvointiJosHyväksytty > HyvinvointiJosHylätty*(mahdollisesti suurella enemmistöllä tai muulla vaatimuksella) niin lakialoite hyväksytään.
6. Augur-markkina tulevaisuudelle, jota ei tapahtunut lakkautetaan ja rahat palautetaan osallistujille. Toinen markkina jatkaa toimintaansa ja tuottojen maksut toteutetaan sen perusteella miten kansalaisten hyvinvointi kehittyy.
7. Tällöin treidaajat, jotka pystyvät onnistuneesti ennustamaan kansalaisten hyvinvoinnin kehitystä tienaavat rahaa. Treidaajat, jotka ovat väärässä hyvinvoinnin kehityksestä menettävät rahaa.

**Futarkiaa voidaan soveltaa esim. tehostamaan yritysten päätöksentekoa. Linkki Ralph Merklen julkaisuun futarkiasta**:<https://merkle.com/papers/DAOdemocracyDraft.pdf>.

### Liite 9: Discord-kanavaopas

* **\#game-theory:**keskustelua REP-tokenin peliteoriasta ja potentiaalisista Augur-protokollan hyökkäysvektoreista. Mielenkiintoinen kanava niille, jotka ovat innoissaan monimutkaisista talous- ja peliteorioista.
* **\#dev #contract-dev #tooling:**useimmiten ulkopuolisten sovelluskehittäjien käytössä olevia kanavia. Keskustelua Augurin ohjelmointirajapinnasta sekä älysopimusten toiminnallisuuksista.
* **\#ui:**pääasiallisesti aiheena on käyttökokemuksen parantaminen sekä uusien käyttäjien tuominen Augur-sovelluksiin.
* **\#reporting:**kanava aktiivisille markkinoiden selvittäjille ja REP-tokenin omistajille. Keskustelun aiheina useimmiten lähitulevaisuudessa toteutuvat markkinat ja yleistä keskustelua selvitysprosessista.
* **\#feature-requests #issues:**ehdotuksia Augurin älysopimusten tai ohjelmointirajapintojen parantamisesta, sekä kanava ohjelmistovirheiden ilmoittamiselle.
* **\#github #releases #announces:**automatisoidut kanavat uudesta Auguriin implementoidusta koodista, uusista versiojulkaisuista ja Forecast Foundationin toiminnasta.
* **\#jeans:**analyysiä Levi’s-farkuista ja muista suurista markkinatoimijoista.

### Liite 10: Älysopimusten auditointi

* **Linkki täyteen raporttiin**:<https://docs.google.com/document/d/1saSVpT2Ixd58q-DZlTtzfkNizuTTE4yVoGuWz_AatZM/edit>.
* **Yleistä**: Augur v1 älysopimukset auditoitiin vuoden 2018 alussa ennen Augurin julkaisua Ethereum-verkkoon. Augur v2 älysopimukset ovat tällä hetkellä auditoinnissa Q1 2020 julkaisua varten. Molemmista auditoinneista on vastannut Open Zeppelin.
* **Open Zeppelin**: Lohkoketjualan tunnetuin älysopimusten turvallisuuteen erikoistunut yritys. Open Zeppelin tarjoaa pääasiallisesti lohkoketjuprotokollien systeemiarkkitehtuuria ja älysopimuksia koskevaa auditointipalvelua. Monet raportit ovat julkisesti saatavilla. Open Zeppelin on myös kehittänyt Solidity-ohjelmistokirjastoja älysopimusten turvallista implementointia varten.
* **Auditoinnin tulokset**: 13 kriittistä (turvallisten matematiikkakirjastojen käytöstä johtuvaa) ja 10 merkittävää (erilaisia bugeja) ongelmaa, sekä ohjeet niiden korjaamiseen. Näiden lisäksi auditoinnin tuloksissa huomioitiin joitain pienempiä ohjelmistovikoja. Korjausehdotusten on tarkoitus pienentää protokollan hyökkäysvektoreita. Kaikki auditoinnissa löydetyt ongelmat korjattiin ennen Augur v1 julkaisua Ethereum-verkkoon.

### Liite 11: Vertailu kollateralisoituihin lohkoketjuprotokolliin

![](/static/img/augurcomparison2.png "Kuka tahansa voi luoda Augur- tai UMA-markkinan, kun taas MakerDAO:ssa edellytetään MKR-omistajien hyväksyntä. Augur-markkinan osakkeet ovat heti avoimen kaupankäynnin kohteena, kun taas UMA- ja MakerDAO-markkinoiden liikkeeseenlaskija joutuu takaamaan osakkeiden arvon toisella omaisuuserällä.")

#### Liite 12: Augurin taloudelliset kannustimet

**Osa 1: Määritelmät**

* **Haarautuminen (*fork*)**: Augurin turvallisuus pohjautuu uhkaan sen haarautumisesta. Pelkkä uhka haarautumisesta tarkoittaa, että osallistujilla on taloudellinen kannustin ylläpitää markkinointa rehellisesti. Augur haarautuu kahteen eri *universumiin,*kun erimielisyys yksittäisen markkinan tuloksesta ylittää tietyn kynnyksen. Eri universumit edustavat potentiaalisia markkinoiden lopputulemia (*rehellinen universumi* ja *epärehellinen universumi*). Käyttäjät siirtävät REP-tokeninsa universumiin, josta on heidän mielestään syntymässä *voittava universumi*. *Voittavaksi universumiksi*määritellään universumi, johon on siirretty enemmän REP-tokeneita. Oletuksena on, että REP-tokenit *epärehellisessä universumissa* ovat haarautumisen jälkeen lopulta arvottomia.
* **Hyökkääjän perspektiivi**: Onnistunut hyökkäys Augur-markkinoihin tarkoittaa, että hyökkääjä saa kaikki aktiiviset Augur-markkinat siirrettyä *epärehelliseen universumiin*. Mikäli hyökkääjä omistaa valtaosan *epärehellisen universumin* REP-tokeneista, hyökkääjä voi selvittää nämä markkinat oman tahtonsa mukaan.
* **Maksimihyöty hyökkääjälle**: Hyökkääjän maksimihyöty voidaan määritellä kaikkien avointen Augur-markkinoiden arvon summana. Lisäksi pitää ottaa huomioon mahdolliset hyökkääjän hallitsemat parasiittiset markkinat. Tällöin funktio maksimihyödylle on kyseisten markkinoiden summa *augOI + parOI*(*“augOI” =*avointen Augur-markkinoiden summa*, “parOI” =*avointenparasiittisten markkinoiden summa).
* **Minimikustannus onnistuneelle hyökkäykselle**: Määritetään, että *S* on yhtä suuri kuin *rehelliseen universumiin*siirrettyjen REP-tokenien osuus,. *M* on yhtä suuri kuin kaikki olemassa olevat REP-tokenit. *H*on yhtä suuri kuin REP-tokenin hinta. *hEpä*on yhtä suuri kuin REP-tokenin markkinahinta *epärehellisessä universumissa*. Tällöin, *S* x *M*on yhtä suuri kuin *rehelliseen universumiin*siirrettyjen REP-tokenien absoluuttinen määrä. Tulos *hEpä x S x M*on yhtä suuri kuin REP-tokenien markkina-arvo *epärehellisessä universumissa*. Mikäli hyökkääjä siirtää *S* x *M*REP-tokenia epärehelliseen universumiin, on niiden arvo ennen siirtoa *S* x *M* x *H* ja siirron jälkeen *S* x *M* x *hEpä*. Tällöin minimikustannus hyökkääjälle on (*H* — *hEpä*) x *S* x *M*.

**Osa 2: Rehellisyystodiste**

* **Rehellisyys**: maksimihyöty hyökkääjälle tulee olla suurempi, kuin onnistuneen hyökkäyksen kustannus, jotta hyökkäys olisi taloudellisesti järkevä. Augur-protokollan rehellisyys siis pätee jos ja vain jos:

1. *S > ½* *rehelliselle universumille* (mikäli rehellinen enemmistö hallitsee migroituja REP-tokeneita, *epärehellisestä universumista* ei voi ikinä tulla *voittavaa universumia*); tai
2. *augOI + parOI < (H — hEpä) x S x M*(maksimihyöty hyökkääjälle on pienempi kuin onnistuneen hyökkäyksen minimikustannus).

* **Kohdan 2. ratkaiseminen *H* x *M*mukaan osoittaa REP-tokenien markkina-arvon ja protokollan rehellisyyden suhteen.**

1. ((*augOI + parOI*) x *H*) / ((*H*— *hEpä*) x *S*)) < *H x M*

* **REP-tokenien markkina-arvon minimiraja (valituilla oletuksilla)**

1. On todennäköistä, että treidaajat ja markkinoiden luojat eivät halua operoida universumissa, josta käyttäjien varoja voidaan viedä, joten *pEpä* oletetaan olevan n. ~$0
2. On olennaista tietää kuinka paljon REP-tokeneita siirretään *rehelliseen universumiin*. Augur v2 julkaisussa kannustinta on lisätty pakottamalla käyttäjät siirtämään REP-tokeninsa johonkin universumiin (muuten käyttäjää menettää REP-tokeninsa). Erittäin konservatiiviseksi oletusarvoksi voidaan määrittää, että ainakin 20% siirtää REP-tokeninsa *rehelliseen universumiin* (*S*>= 1/5).
3. Oletetaan myös, että on olemassa huomattavan suuret parasiittiset markkinat. Esimerkiksi 50% kaikkien Augur-markkinoiden volyymista (*augOI* >= *2* x *parOI*).

* **Näillä oletuksilla Augurin markkina-arvon tulee olla (*P* x *M*) 7.5-kertainen Augurin avointen markkinoiden arvoon nähden**. Laskutoimitus: (1 + 0.5) / (1 / 5) = 7.5.