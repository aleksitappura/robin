---
title: 'yToken: Protokolla korkotasojen määrittämiselle'
date: 2019-10-06T08:18:00.000Z
tags:
  - yToken
  - Project-specific
  - Finnish
---
*Tämä artikkeli käsittelee [yToken-protokollaa](http://research.paradigm.xyz/Yield.pdf)ja sen käyttökohteita.*

### Mikä on yToken?

yToken on lohkoketjupohjainen synteettinen omaisuuserä,

1. jonka vakuutena on jokin toinen omaisuuserä; ja
2. joka on lunastettavissa tietyn kohde-etuuden hinnan mukaan;
3. jonain tulevana ajanhetkenä.

yTokenin eräpäivänä yTokenin omistaja voi lunastaa tokenin sen silloisen markkinahinnan mukaan (vrt.[nollakuponkilaina](http://www.morningstar.fi/fi/glossary/101055/nollakuponkilaina.aspx)).

### yTokenin elinkaari

* **Talletus ja kohde-etuuteen sitominen.** yTokenin voi laskea liikkeeseen tallettamalla omaisuutta (esim. etheriä) älysopimukseen. yToken voi edustaa mitä vain kohde-etuutta (esim. euroa).
* **Osto.** yTokenin voi ostaa avoimilta markkinoilta (mm. hajautetusta pörssistä).
* **Lyhyeksi myynti.** yTokenin liikkeeseenlasku ja myyminen markkinoilla on rinnastettavissa liikkeeseenlasketun kohde-etuuden lainaamiseen ja myymiseen (=lyhyeksi myyntiin). Mikäli yTokenin kohde-etuuden hinta nousee suhteessa talletettuun omaisuuserään, liikkeeseenlaskijan velka kasvaa (ja toisinpäin).
* **Velkavipu.** Lyhyeksi myynnin lisäksi, yTokeneita voi luoda talletetun omaisuuserän vivuttamiseen. Mikäli yTokenin liikkeeseenlaskija odottaa talletetun omaisuuserän hinnannousua, yTokenin liikkeeseenlaskija voi myydä yTokenit ostaakseen lisää kyseistä omaisuutta. yTokenien avulla voidaan rakentaa pörssi viputuotteille.
* **Toteutushetki.** yToken on lunastettavissa vasta jonain tulevaisuuden ajanhetkenä, joten sillä todennäköisesti käydään kauppaa alennushintaan.
* **Korko.** yTokenin eräpäivän lähestyessä sen hinta lähenee kohde-etuuden hintaa. Tätä hinnannousua voidaan verrata yTokenin omistamisesta maksettavaan korkoon. yToken antaa käyttäjien avata itselleen yksinkertaisen säästötilin.

### Esimerkki

**Vakuutena toimiva omaisuuserä: ETH. Kohde-etuus: Euro.**

1. Aleksis omistaa 10 ETH:ta (markkina-arvoltaan 1000 euroa) ja haluaa luodan 1.5x vivun omistukselleen.
2. Aleksis tallettaa 10 ETH:ta ja laskee liikkeeseen (velkana) 500 euron edestä yEuroja.
3. Aleksis myy 500 yEuroa markkinoilla ja ostaa niillä lisää ETH:ta. Koska yEurot ovat lunastettavissa vasta vuoden päästä, Aleksis saa niistä myyntihetkellä vain 4.8 ETH:ta (markkina-arvoltaan 480 euroa).
4. Vuotta myöhemmin yEuron eräpäivänä, yEuron ostaja lunastaa 500 euron edestä Aleksiksen talletettua ETH:iä.
5. Oletetaan, että ETH:in markkinahinta nousi tänä aikana 200 euroon. Tällöin Aleksis maksaa yEuron omistajalle 2.5 ETH:ta. Aleksis pitää itse 12.3 ETH:ta (markkina-arvoltaan 2460 euroa).
6. yEuron ostaja Henri, joka osti kaikki Aleksiksen luomat yEurot vuosi sitten 480 eurolla, saa nyt lunastettua 500 eurolla ETH:ta, ansaiten 20 euron (4,2%) koron sijoitukselleen.

**Riskit**: Mikäli Aleksiksen liikkeeseenlaskeman yEuron vakuutena toimivan ETH:n arvo tippuu liian nopeasti suhteessa kohde-etuuden arvoon, on mahdollista ettei vakuudeksi jää tarpeeksi ETH:ta takaamaan Henrin yEuroja (ennen kuin Aleksiksen ETH voidaan likvidoida). Tämän riskin takia, etenkin jos vakuutena toimii volatiili omaisuuserä, yTokenien vakuusvaatimukset tulee asettaa riittävän korkeiksi.

### yTokenin avulla kohde-etuudelle voidaan määrittää korkokanta

yTokeneille voidaan laskea vuosittainen tuottoprosentti. Jos yEuro on arvoltaan euron, mutta sillä käydään kauppa 50 sentillä vuosi ennen sen eräpäivää, on yEuron tuottoprosentti 100%.

*Y = (F / P)^(1 / T) — 1.*

Jossa Y = vuosittainen tuottoprosentti, F = yTokenin nimellinen arvo, P = yTokenin kaupankäyntihinta ja T = vuodet eräpäivään.

### Tuottokäyrien rakentaminen

yTokenit samalle kohde-etuudelle, mutta eri eräpäiville antavat usein eri tuottoprosentin; markkina ennustaa miten[tietyn kohde-etuuden korkotaso muuttuu ajan mukaan](https://www.investopedia.com/terms/t/termstructure.asp).

![](/static/img/ytoken.png "yDAI:n (yToken, jonka arvo on sidottu Yhdysvaltain dollariin) tuottoprosentti riippuu sen eräpäivästä.")

yTokenin tuottokäyriä voidaan käyttää mm. MakerDAO:n tai Compound:in korkotasojen päätöksenteossa.

Tuottokäyrät antavat myös hyödyllistä tietoa markkina-analyytikoille ja treidaajille.

- - -

**Lisälukemista lohkoketjujen päälle rakennetuista finanssiprotokollista**:

* David Hoffman:[Ethereum, the Digital Finance Stack](https://medium.com/pov-crypto/ethereum-the-digital-finance-stack-4ba988c6c14b).
* Delphi Digital:[Decentralized Finance (DeFi), Thematic Insights](https://www.delphidigital.io/defi).
* Dmitriy Berenzon:[Synthetic Assets in DeFi, Use Cases and Opportunities](https://medium.com/zenith-ventures/synthetic-assets-in-defi-use-cases-opportunities-19b11f57a776).

**Muutama mielenkiintoinen esimerkkiprojekti**:

* [MakerDAO](https://makerdao.com/) (hintavakaa virtuaalivaluutta).
* [Augur](https://www.augur.net/) (ennustemarkkinat).
* [UMA](https://umaproject.org/) (hinnanerosopimukset).
* [Compound](https://compound.finance/) (rahamarkkinat).
* [0x](https://0x.org/) (kaupankäynti).
* [dYdX](https://dydx.exchange/) (vipu- ja optiot).