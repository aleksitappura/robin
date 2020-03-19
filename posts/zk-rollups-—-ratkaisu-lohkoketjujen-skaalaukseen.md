---
title: zk-Rollups — ratkaisu lohkoketjujen skaalaukseen
date: 2019-11-07T09:39:00.000Z
tags:
  - zk-Rollups
  - Technical Deep Dive
  - Finnish
---
### Lohkoketjujen skaalausratkaisuiden luokittelu

Lohkoketjuja on vaikea skaalata, koska jokaisen lohkoketjun ylläpitäjän pitää pystyä prosessoimaan kaikki lohkoketjussa tehdyt transaktiot. Jos lohkoketjua skaalataan lisäämällä ylläpitäjiltä edellytettyä transaktioprosessointikykyä, samalla karsitaan pois tahoja, jotka voivat osallistua lohkoketjun ylläpitoon.

Tämä rajoite huomioon ottaen lohkoketjujen skaalaamiseen on kaksi lähestymistapaa:

1. **Lohkoketjun sisäinen skaalaus.** Lohkoketjun transaktioprosessointikyvyn tehostaminen mekanismeilla, jotka eivät lisää vaatimuksia (ja kuluja) lohkoketjujen ylläpitäjille.

* Sharding.

2. **Ulkoiset järjestelmät**. Transaktioiden prosessointi lohkoketjun ulkopuolella. Ulkopuoliset järjestelmät hyötyvät alla olevan lohkoketjun turvallisuudesta, mutta ovat transaktioprosessointikyvyiltään huomattavasti tehokkaampia.

* Maksukanavat.
* Rinnakkaisketjut.

![](/static/img/scalingclassification.png "Kuva 1. Lohkoketjuja voidaan skaalata parantamalla lohkoketjun transaktioprosessointikykyä tai rakentamalla lohkoketjujen päälle tehokkaampia järjestelmiä, joiden turvallisuus perustuu alla olevaan lohkoketjuun.")

### Lohkoketjujen sisäinen skaalaus

**Sharding** on yleisin lohkoketjun sisäinen skaalausmekanismi. Sharding tarkoittaa lohkoketjun jakamista pienempiin osiin — yksittäiseltä ylläpitäjältä edellytetty transaktioprosessointityö rajoittuu koskemaan vain tiettyä osaa lohkoketjusta. Lohkoketjun eri osat varmistavat omat transaktionsa, jonka jälkeen tiedot yhdistetään yhteen lohkoketjuun. Monet rakenteilla olevat uudet lohkoketjut (NEAR, Dfinity, Algorand, Ethereum 2.0) pohjautuvat sharding-tekniikkaan.

Sharding-tekniikkaan liittyy kuitenkin rajoitteita:

* Hajautetussa lohkoketjussa ylläpitäjien välisessä viestinnässä on aina korkea latenssi, koska kaikilla ylläpitäjillä pitää olla samat tiedot transaktioista. Tämä tarkoittaa, että transaktioiden prosessointiin menee vähintään joitain sekunteja.
* Shardien väliset transaktiot vaativat [raskaamman validointiprosessin](https://arxiv.org/abs/1710.09437), kuin shardin sisäiset transaktiot (jotka vastaavat nykyisten lohkoketjujen sisäisiä transaktioita). Tämän seurauksena käyttäjien täytyy odottaa useita minuutteja shardien välisten transaktioiden prosessoinnissa.

![](/static/img/sharding_2.png "Kuva 2. Lohkoketjun osat (shard) validoivat omat transaktionsa ja lähettävät päivityksiä globaaliin tietokantaan.")

### Ulkoiset järjestelmät

**Maksukanavat** ovat kahden käyttäjän välisiä sopimuksia. Käyttäjät avaavat yhteisen maksukanavan, jonka sisällä he voivat maksaa toisilleen ilman, että jokainen maksu tallentuu lohkoketjuun. Useasta kahdenkeskisestä maksukanavasta voi luoda maksuverkon ([mm. Bitcoinin Lightning-verkon](https://lightning.network/lightning-network-paper.pdf) toiminta perustuu tähän periaatteeseen).

![](/static/img/paymentchannels.png "Kuva 3. Esimerkki maksukanavasta kahden käyttäjän välillä. Korkeimmalla transaktionumerolla lähetetty tieto alla olevaan lohkoketjuun todentaa käyttäjien omistukset.")

**Rinnakkaiset lohkoketjut** ovat lohkoketjuja, jotka toimivat yhdessä toisen luotettavan lohkoketjun (esim. Ethereum) kanssa. Rinnakkaisketjut skaalautuvat paremmin, koska niiden ylläpitäjiltä voidaan edellyttää korkeampaa transaktioprosessointikykyä. Käyttäjät voivat halutessaan siirtää varansa rinnakkaisketjuun, tehdä transaktioita rinnakkaisketjussa ja siirtää varansa takaisin alla olevaan lohkoketjuun.

![](/static/img/sidechains.png "Kuva 4. Rinnakkaisketjut prosessoivat enemmän transaktioita (korkeammat muisti- ja laskentavaatimukset) ja nopeammin (enemmän lohkoja).")

Maksukanavien rajoitteena on, että ne soveltuvat vain yksinkertaisiin maksuihin. Ne ovat turvallisia käyttäjilleen, koska tietoturvan takaa lopulta alla oleva lohkoketju. Rinnakkaisketjujen heikkous on, että käyttäjien pitää luottaa rinnakkaisketjun ylläpitäjiin. Koska rinnakkaisketjut ovat lohkoketjuja, ne mahdollistavat kuitenkin älysopimusten käytön.

### zk-Rollups — luotettava ja tehokas rinnakkaisketju

**Rollups-ketjut** ovat uudenlaisia rinnakkaisketjuja, joissa käyttäjien ei tarvitse luottaa rinnakkaisketjun ylläpitäjiin. Kriittisin hetki rinnakkaisketjujen luotettavuudelle on, kun käyttäjä siirtyy pois rinnakkaisketjusta takaisin alla olevaan lohkoketjuun. Alla oleva lohkoketju (esim. Ethereum) ei tarkista ja tallenna kaikkia rinnakkaisketjun transaktioita — ainoa tieto, jonka alla oleva lohkoketju saa, on todiste käyttäjän kokonaisomistuksesta poistumishetkellä. Kun käyttäjä poistuu varoillaan rinnakkaisketjusta takaisin alla olevaan lohkoketjuun, hän lähettää alla olevaan lohkoketjuun viestin omistuksestaan rinnakkaisketjussa, jonka jälkeen käyttäjän varat ovat käytettävissä alla olevassa lohkoketjussa.

Rinnakkaisketjusta poistuminen avaa kaksi potentiaalista hyökkäysvektoria:

1. Rinnakkaisketjun ylläpitäjä voi lähettää väärän tiedon rinnakkaisketjun käyttäjien omistuksista alla olevaan lohkoketjuun. Tämä hyökkäys on helppo estää [Merkle-todisteilla](https://en.wikipedia.org/wiki/Merkle_tree), joita käytetään [Plasma-rinnakkaisketjuissa](https://hackernoon.com/eli5-plasma-cash-ff242c55e8de). Merkle-todiste on kryptografinen primitiivi, jonka käyttäjät voivat muodostaa rinnakkaisketjun transaktioista. Merkle-todisteeseen on tiivistetty tieto kaikista rinnakkaisketjuissa tapahtuneista transaktioista. Plasma-rinnakkaisketjuissa käyttäjille varataan aikaa haastaa väärä alla olevaan lohkoketjuun lähetetty viesti Merkle-todisteella, joka sisältää todellisen tiedon Plasma-rinnakkaisketjussa tapahtuneista transaktioista.
2. Datan saatavuushyökkäyksessä ([data-availability attack](https://medium.com/onther-tech/data-availability-problem-in-implementing-plasma-design-6e23df1a147f)) rinnakkaisketjun ylläpitäjä lähettää väärän tiedon käyttäjien omistuksesta alla olevaan lohkoketjuun, mutta jättää transaktiot julkaisematta rinnakkaisketjussa. Tällöin käyttäjillä ei ole mahdollisuutta rakentaa Merkle-todistetta, koska heillä ei ole siihen vaadittavaa transaktiodataa. Datan saatavuushyökkäykseen ei ole vielä löydetty täydellistä ratkaisua, minkä takia Plasma-rinnakkaisketjut eivät ole vielä aktiivisessa käytössä.

Rollups-ketjuja voidaan rakentaa nollatietotodistusten ([zero-knowledge proof](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.419.8132&rep=rep1&type=pdf)) avulla ja ne ratkaisevat datan saatavuushyökkäyksen. Nollatietotodistuksella joku todistaja (“prover”) voi osoittaa jollekin toiselle osapuolelle (“verifier”) tietävänsä jonkin salaisuuden ilman, että todistaja paljastaa mitään tietoa salaisuuden sisällöstä. Rollups-ketjut käyttävät tätä periaatetta todistaakseen alla olevalle lohkoketjulle, että kaikki Rollups-ketjun transaktiot ovat olleet sääntöjenmukaisia ilman, että alla olevan ketjun täytyy todentaa ja tallentaa kaikkia Rollups-ketjussa tapahtuneita transaktioita.

Rollups-ketjun liittäminen lohkoketjuun tapahtuu transaktioviestillä, joka sisältää kolme osaa:

1. Merkle-todiste Rollups-ketjun viimeisimmistä transaktioista.
2. Kaikki viimeisimmät Rollups-ketjussa tehdyt transaktiot.
3. Nollatietotodistus, joka muodostuu sekä viimeisimpien, että aiemmin lähetettyjen, transaktioiden Merkle-todisteista. Nollatietotodistus osoittaa, että jos aiemmin lähetettyihin transaktioihin lisätään myös viimeisimmät transaktiot, on lopputuloksena uusi todenmukainen Merkle-todiste.

Alla oleva lohkoketju todentaa, että nollatietotodistus on laskettu oikein lähetetyn transaktiodatan perusteella. Mikäli näin on, Rollups-ketjun käyttäjien sen hetkiset omistukset tallennetaan yhtenä Merkle-todisteena alkuperäiseen lohkoketjuun. Tällöin Rollups-ketjun ylläpitäjä ei voi piilottaa dataa Rollups-ketjun käyttäjiltä, koska Rollups-ketjun liittäminen alla olevaan lohkoketjuun vaatii tiedon kaikista Rollups-ketjussa tapahtuneista transaktioista.

Rollups-ketjut mahdollistavat äärimmäisen tehokkaan lohkoketjujen skaalauksen, koska transaktioprosessointi voi tapahtua täysin keskitetysti. Käyttäjien ei tarvitse luottaa Rollups-ketjun ylläpitäjiin. Rollups-ketjun turvallisuus on sidottu alla olevan lohkoketjun turvallisuuteen, mutta transaktioita voidaan prosessoida ilman hajautetun lohkoketjun aiheuttamia transaktioprosessointikustannuksia.

![](/static/img/rollsupstradeoff.png "Kuva 5. Rollups-ketjut muuttavat rinnakkaisketjut täysin turvallisiksi ratkaisemalla datan saatavuushyökkäykset.")

Rollups-ketjuja on työstetty aktiivisesti vain noin vuoden ajan ja ne ovat osoittautuneet käytännössä yllättävän helposti implementoitaviksi. Esimerkiksi hajautetun pörssiprotokolla 0x:n uusin implementaatio [STARKDex](https://blog.0xproject.com/starkdex-bringing-starks-to-ethereum-6a03fffc0eb7) sekä Uniswapin automatisoituun markkinatakaajaprotokollaan yhdistävä [Unipig Exchange](https://unipig.exchange/) hyödyntävät Rollups-ketjuja. Myös [Augur-protokollan ennustemarkkinoiden tarjouskirjat](https://www.augur.net/v2_and_beyond.pdf) ollaan siirtämässä Rollups-ketjuun ensi vuoden alussa.