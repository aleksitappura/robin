---
title: 'How the Updated Gaming Stack Affects Game Design: Live Streaming'
date: 2020-03-09T09:58:35.645Z
tags:
  - gaming
---
### Introduction

The game development stack can generally be examined from both an internal and an external perspective. The internal stack refers to game engines such as Unity and Unreal Engine, which provide the tools needed for game development (rendering for 3d graphics, physics, sound, scripting, animation, networking etc.). The external stack refers to new technologies and phenomena such as live streaming, cloud, machine learning and blockchain, which introduce novel platforms that affect game development processes, game design, and game consumption.

Changes in the external stack impact the internal stack, which results in new gameplay experiences. The increased connectivity introduced by the Internet a few decades ago allowed game developers to create gameplay experiences designed for millions of people (e.g. MMORPGs such as World of Warcraft). Smartphones put pocket-sized computers in everyone’s hand. This change spurred the creation of snackable 5–10 minute game experiences that anyone could enjoy during their commute to work. Game developers need to monitor the development of the external stack and consider its implications in order to stay ahead of the curve when designing new gameplay experiences with the internal stack.

This post explores how live streaming impacts game design. Future posts will cover other aspects of the external gaming stack, such as cloud, machine learning, and blockchain/crypto.

### Live Streaming

Live streaming is the broadcasting of live video on streaming platforms such as Twitch, Mixer, or Huya**.**Modern live streaming got its start in 2007 with the introduction of Justin.tv, where founder Justin Kan largely focused on [lifecasting](https://en.wikipedia.org/wiki/Lifestreaming#Lifecasting) before later finding product-market-fit with the platform’s gaming section. This gaming section spun out in 2011 and became Twitch. Today, Twitch has 15 million monthly active users who watch an average of 700K+ hours of content each month spread across a wide variety of gaming-related (and non-gaming) streams that can be categorised as follows:

1. Esports tournaments organised by independent (e.g. [ESL](https://www.eslgaming.com/)) or publisher-run (e.g. [Overwatch League](https://www.overwatchleague.com/en-us/)) esports leagues;
2. Casual gameplay and community engagement, usually by major streaming persona/creators; and
3. Other competitive or casual gameplay streams focused on e.g. the release of a highly anticipated title, [speedruns](https://www.reddit.com/r/speedrun/comments/4apr63/explanation_of_speedrunning/), [Let’s Plays](https://www.vice.com/en_us/article/nepzwb/a-good-lets-play-is-more-than-just-a-video-of-your-favorite-game), [community mods](https://www.nvidia.com/en-us/geforce/news/history-of-pc-game-mods/), and even [live sessions of pen and paper Dungeons and Dragons](https://www.theverge.com/2019/11/6/20952407/amazon-critical-role-animated-show-prime-exclusive-vox-machina-twitch).

Popular gaming streamers/creators in turn are usually either:

1. Highly skilled players who play games competitively;
2. Otherwise interesting persona/creators who play games casually; or
3. A combination of the above.

Live streams and streamers are an important marketing channel for game publishers and brands. Influencers are [increasingly driving consumer](https://influencermarketinghub.com/influencer-marketing-2019-benchmark-report/) spend across several sectors, including games. To combat [rising user acquisition (UA) costs](https://www.gamesindustry.biz/articles/2019-10-04-acquisition-and-conversion-costs-threaten-a-mobile-bust-opinion) in the mobile games space, an increasing amount of publishers have extended their marketing activities to include streamers as well. While live streaming in the West has traditionally focused on PC gaming, streamers and streaming audiences for mobile games are on the rise, with PUBG mobile and Garena Free Fire having found[ traction on Youtube’s streaming service](https://newzoo.com/insights/articles/more-people-are-streaming-on-twitch-but-youtube-is-the-platform-of-choice-for-mobile-game-streamers/).

In order to thrive in a live streaming- and influencer-driven market, game developers need to design games that are not only fun to play, but also fun to watch**.**To maximise the effects of player acquisition and retention, game developers must arm their streamers with the proper tools needed to create engaging content. This change has already started on the technology side, where startups are building new tools for game developers to build streaming-native games. Game developers have also woken up to this new paradigm, and now design games with spectatorship and audience participation in mind.

Factors that game developers need to take into account when creating games with spectators in mind include (note: all factors need not necessarily be included in a single game):

1. Competitiveness (esports);
2. Player freedom;
3. Spectator-participation; and
4. Advertising-friendliness.

### Competitiveness (esports)

*This chapter could very well be a post of its own due to the breadth of the topic. As live streaming is generally considered (also according to my benevolent opinion) to be the “native” way of watching esports, as opposed to in-person stadium events, I’ll do my best to summarise the most relevant points in this chapter.*

Esports is the organised competitive play of video games. Most of the efforts focus on tournaments with professional players participating. Most common genres and games associated with esports include:

1. Multiplayer online battle arenas (MOBA): League of Legends (LoL) and Dota 2;
2. First-person shooters (FPS): CS:GO and Overwatch; and
3. Battle Royales (BR): Fortnite and PUBG.

With minor contenders including:

1. Real-time strategy (RTS): Starcraft II;
2. Collectible card games (CCG): Hearthstone; and
3. Fighting games: Super Smash Bros.

These games have the following things in common: accessibility, a high skill ceiling, and a strong competitive balance. With the introduction of the [free-to-play (F2P) business model](https://techcrunch.com/2019/01/18/free-to-play-games-rule-the-entertainment-world-with-88-billion-in-revenue/) and its widespread popularity among developers, strong live operations practices have also become table-stakes for these games. This is evident with the fact that major esports titles almost exclusively follow the F2P model.

Game developers and publishers need to keep these requirements in mind when designing new games and maintaining existing ones. The glory days of the RTS genre and Starcraft II are [long gone](https://www.pcgamer.com/the-decline-evolution-and-future-of-the-rts/), as other genres and games have adapted better to the current zeitgeist. Needless to say, developers ought to remember that the factors comprising a popular esports title are ever changing, but I will nevertheless shed light upon some of the core aspects below.

#### Accessibility

A competitive game needs to be accessible, i.e. easy to understand, fun to play, and interesting to watch. Some of the largest esports titles include LoL, Dota 2, and CS:GO, with each one of them having a simple premise:

1. In LoL and Dota 2, two teams engage in battle in order to destroy the opposing team’s base before their own is wiped out; and
2. In CS:GO, teams try to kill the opposing team members while simultaneously completing a secondary objective, e.g. planting or defusing a bomb.

These games are easy to approach by both players and spectators due to their simple premises and well-designed tutorials, providing fertile ground for becoming popular esports titles.

The RTS genre is a perfect example of losing out to other genres regarding the accessibility requirement. The RTS title Starcraft: Brood Wars, which rose from South-Korean LAN tournaments to a [global phenomenon](https://esportsobserver.com/starcraft-ii-esports-essentials/), reigned the scene during the early years of esports. Its successor, Starcraft II, enjoyed several years at the top of competitive gaming, but has since experienced a strong decline in audience engagement with [the introduction of the MOBA genre](https://www.forbes.com/sites/insertcoin/2012/10/18/starcraft-2-struggles-as-league-of-legends-rises/#22419d8a258a) (which ironically enough [spun off](https://www.redbull.com/int-en/the-history-of-dota) from another popular Blizzard RTS title at the time, Warcraft 3). RTS games have been around since the late 1980s, but have since experienced little innovation in core design. RTS games still follow largely the same multi-tasking pattern: resource gathering, base building, in-game technological development and control of units. RTS games arguably have a higher skill floor than some of the modern top esport titles, which has likely contributed to other genres being more beginner-friendly and thus more spectator-friendly.

A low skill floor is one of the most important catalysts for a game to eventually become an esport. All major esports titles have large player bases, dedicated communities, and a strong competitive scene. It’s very unlikely for a game that leaves newbies irritated 10 minutes into the game to achieve mass appeal.

#### High Skill Ceiling

Competitive games require a high skill ceiling for players. The basics of a game need to be simple enough for anyone to understand (to enable mass adoption), but the developers must allow a playground for elite players to develop their skills to the extreme. Should a game be too easy to master, too many will excel on it and there will only be a marginal difference to the very best players.

Similar to traditional sports, spectators want to see brilliant manoeuvres turning the games upside down: moves that only professional players can pull off. As the New England Patriots pulled off one of the greatest comebacks in sports history by turning a 25 point deficit against Atlanta Falcons into a victory, Tom Brady solidified his place in NFL history as one of the greatest quarterbacks of all time. Similarly, during the 2012 IEM season of League of Legends, Spanish professional gamer Enrique Cedeño Martinez, better known as xPeke, [pulled of a similar stunt](https://www.youtube.com/watch?v=ooozyf5y5t8). As rival team SK Gaming was making its last push to destroy the opposing team’s base and get a clean win, xPeke used the champion Kassadin’s Rift Walk ability to teleport from side to side of the base dodging enemy attacks with incredible precision and timing, taking out the base and giving his team the victory. Following this, players sometimes yell “xPeke!” following a similar backdoor play, i.e. sneaking into the enemy base with little support from own units.

![](/static/img/xpeke.gif "xPeke showing how it’s done. Source: Gfycat")

A high skill ceiling provides elite players with the possibility of achieving “god status” among players and spectators. As elite players pull off difficult and imaginative plays, they create moments remembered by the community for years to come. These moments may in time turn out to contribute more to a game’s longevity than heaps of uneventful esports tournaments.

#### Competitive balance

A strong competitive balance is essential for a game to be competitive and interesting to observe. If one alpine skier competes with high end carbon fiber skis and the other has to use wooden skis, the competition will be out of balance. This might be fun to watch a few times but it becomes tiresome to the spectator fast. This is a major reason why pay-to-win games have not reached widespread popularity in competitive gameplay.

Suboptimal competitive balance is why BRs such as Fortnite and PUBG have yet to reach the top spots among the biggest esports titles. Despite [large price pool s](https://techcrunch.com/2019/02/22/fortnite-goes-big-on-esports-for-2019-with-100-million-prize-pool/)at professional Fortnite tournaments, the game still relies heavily on random number generation (RNG), or chance. A professional player might practice day and night to get an edge over other players, but if that player has bad luck with the weapons she picks up at the start of the game, there is a good chance that a less skilled player with better weapons triumphs in a stand-off.

![](/static/img/lollero.gif "Fortnite player clearing the field in a Mech. Source: Gfycat")

This is a tricky one, as trade-offs between full balance and RNG may result in different beneficial outcomes for the developer. On one hand, having full balance is lucrative for elite players, as they can be sure that their skills are not diluted by chance. On the other hand, RNG may provide a more newbie-friendly experience, as players might have a chance at outplaying better players, and thus get a sense of victory (retention mechanism).

#### Live operations

The biggest esports titles follow the F2P model, as strong live operations give longevity to the games. F2P games with strong live operations are free to download and play, with developers working hard to deliver regular updates to keep the game fresh and exciting. Developers monetise on selling cosmetic assets such as skins and emotes, and more recently on battle passes ([popularised by Fortnite](https://www.theverge.com/2018/6/20/17481328/pubg-sanhok-event-pass-fortnite-battle-pass-copying-best-feature)), that tie into the two previous ones.

Publishers who follow the traditional publishing model release new titles of a franchise on a steady basis and charge customers each time. Despite Call of Duty (CoD) being one of the most popular game franchises on the market, it has never been comparable as an esport to e.g. CS:GO. New CoD titles usually introduce vast gameplay changes when compared to previous titles and thus professional players repeatedly need to learn a new game from the ground up. By the time an elite group of professionals has emerged, the publisher is right there with a new title about to be released and the community is ready to move on.

To become an esport, and stay as an esport, developers need to give games longevity. Players must be given the time to hone their skills and eventually reach the top, while also letting them stay at the top for some time. Regular updates keep the game fresh without flipping it upside down.

### Player Freedom

Streamers may play games with a heavy focus on UGC, strict linear storytelling, or something in-between. The spectrum from UGC to linear storytelling is wide. The amount of freedom players have in-game varies on the tools they have to explore, interact, and alter the world and its story. A general overview of the spectrum can be seen as follows:

1. UGC platforms: Minecraft and Roblox, where users are allowed to build their own game worlds;
2. BRs, FPS games, and MOBAs in the middle: Fortnite, PUBG, CS:GO, Overwatch, LoL and Dota 2, where content relies on Player-versus-Player action and the repeatability of it; and
3. Story-driven single-player games: Dark Souls and Sekiro: Shadows Die Twice, where gameplay exists within confined worlds and stories, and players largely follow the path laid in front of them by the developer.

Games with a heavy UGC component give players a lot of freedom in regard to gameplay, while also alleviating the developer’s content pipeline. Games with linear storylines may however be considered as the developer’s works of art, combining e.g. skilful storytelling, world design, and sound design that only work as a complete package, demanding a more strict gameplay experience. Linear story games may evolve to more UGC-driven over time. Despite being a premium game with a linear story, GTA V [has found longevity](https://kotaku.com/gta-v-five-years-later-1829120653) with the largely community-driven GTA Online and its subsequent modding scene. As the modding culture continues to grow, companies such as [Mod.io](https://mod.io/) have jumped in to ease the collaboration between developers and creators. Their platform allows studios to integrate mod support in their games that simplifies the creation, distribution, and consumption of mods.

Balancing between UGC and linear storytelling affects who your streamers and their spectators will be. Streamers and spectators of UGC games are keen to create and consume content together with the community whereas their counterparts for linear storytelling games might enjoy more a movie-like experience. It is worth noting however that the [most popular games on Twitch](https://www.twitch.tv/directory) rely a lot on user-generated PvP content. Thus games with linear storytelling usually cater for smaller audiences.

#### User-Generated Content Platforms

UGC game platforms (e.g. Minecraft and Roblox) allow players and streamers to build out the content (game worlds, story) themselves. UGC games mimic social media platforms in a sense that users create all content, with all social interaction based around the content. This theoretically endless stream of content created by the community potentially keeps the game ever-changing and interesting.

![](/static/img/minecrafts.gif "Exploration in Minecraft. Source: Gfycat")

Streamers need to produce content in a consistent manner to keep their audiences coming back. This makes UGC platforms a compelling tool for streamers, as they always have the tools handy to create new content and play with it on stream. Streamers may also leverage the UGC platform’s other social aspects by having fans e.g. liking and sharing the content.

As both streamers and fans are free to produce and share their own content, this gives the streamer more ways to engage with her users other than simply interacting with spectators rambling about in the chat log. The streamer may e.g. visit games and game worlds created by recent channel subscribers and other loyal fans. This freedom opens up the possibility for a streamer to create an even deeper connection with her fans, as she is not constrained by the toolbox given to her by e.g. Twitch or Mixer.

#### Linear storytelling games and other single-player experiences

Single-player games with a linear storyline are games where a predetermined path is set out for the player. These streams usually focus on e.g. playthroughs and speedruns. Despite restricting the content that the streamer is able to create in-game, single-player experiences have their own dedicated streamer and spectator communities.

Popular linear games on stream usually evoke some strong emotion, such as excitement or nostalgia, among the community. Thus popular single-player playthroughs include games of high difficulty and retro games. Watching someone play a [difficult game](https://www.pcgamer.com/is-sekiro-too-hard/), such as Dark Souls or Sekiro, might have the spectator reminiscing the old days of watching one’s older sibling play, or simply wanting to avoid constant defeat and rather watch someone else take the hit. Retro games, such as Crash Bandicoot or old school Mario games, allows us to relive our early gamer days and share those iconic moments together with the stream.

Watching single-player games together with the streamer community makes the single-player experience a more social experience. Game developers who want to create streamer-friendly single-player experiences need to consider design decisions that make the gameplay experience evoke community reactions during a stream to make the experience social.

### Spectator Participation

Spectator participation revolves around spectators having a say in what is happening on the stream. The streamers might want to allow their audience to take part in decision-making on the stream and thereby increase audience engagement. Currently, the audience’s ability to affect events in-game is limited, which means the focus on audience participation has been outside the games themselves.

Spectators controlling a part of the gameplay is not an unseen concept. One of the earlier and more prominent spectator participation experiments took form in the notorious [Twitch Plays Pokemon stream](https://www.youtube.com/watch?time_continue=2&v=5Ec8zMxPVzk&feature=emb_logo). It was a crowdsourced attempt to play Nintendo’s original Pokemon games by parsing commands sent by users through the stream’s chat. The first stream took place in early 2014 and after 16 days and 122 million chat commands, the game was finally bested. The stream reached an average concurrent viewership of over 80,000 viewers and according to [Twitch’s estimates](https://blog.twitch.tv/en/2014/03/01/tpp-victory-the-thundershock-heard-around-the-world-3128a5b1cdf5/), more than 1.16 million people participated.

![](/static/img/twitchplays.gif "Red having a tough time figuring out where to head next. Source: Wikipedia")

Companies such as [Muxy](https://muxy.io/) are building Twitch extensions that allow audience participation beyond chat commands. Another example is [Genvid](https://www.genvidtech.com/), who offer an SDK for developers to create more flexible spectator experiences, e.g. dynamic camera angles controlled by spectators, roamable maps from a bird’s eye-view, and Twitch overlays that communicate with either the streamer or the game. If (when) cloud gaming hits mainstream, it is reasonable to expect that the spectator participation experience will become more important for game developers, as it will enable people to communicate with the game directly through a Twitch stream.

As cloud gaming puts audience participation in the core of game development, developers need to assess whether to incorporate participatory gameplay mechanics that are specifically targeted for spectators. This could create a whole new suite of gamers (or the next stage of spectator-only users), whose preferred form of gameplay is to participate as a spectator. More on this in a future post covering the effects of cloud gaming on game design.

### Advertising-Friendliness

Advertising is an integral part of Twitch’s revenue. This holds especially true due to the platform reaching an audience of young men, who otherwise are hard to reach as most do not watch television and are using ad-blocking technologies when browsing the Internet. As popular streams reach larger audiences, ads are well-positioned to become a relevant revenue stream for PC game developers as well. Having ads in the game might prove helpful in PC studios bootstrapping their business before reaching a level of popularity where they can rely on microtransactions.

Ads have not been completely absent from PC and console games before, as sports games (e.g. NHL, FIFA, and NB2K)[ have displayed static ads](https://www.businessinsider.com/advertising-in-sports-video-games-is-out-of-control-2018-9?r=US&IR=T#this-social-media-style-replay-from-nba-live-19-not-so-subtly-features-the-jordan-jumpman-in-the-background-1) in-game for a while already. PC games have historically followed the premium business model, but the relevance of F2P has increased for PC games as well. Besides cosmetic item sales, developers need consider the option of running ads in their games, even if they would not welcome the change with open arms. To meet the players halfway, developers need to consider designing their games to be “ad-friendly” and seize the opportunity of using some of the new ad-tech out there.

Imagine real-world ads implemented in the game world around you, but without them breaking immersion (at least not in a noticeable way). A Pepsi ad is arguably more suitable and less immersion-breaking when walking down the streets of Los Santos in GTA V than on your way to the Orgrimmar auction house in World of Warcraft.[Anzu’](https://anzu.io/)s SDK allows developers to integrate real-world ads into their games by making them feel like a part of the game world. This also opens up the possibility of moving from static ads in sports games to dynamic and targeted ads in a wider suite of games.

![](/static/img/anzupic.png "Ads powered by Anzu’s SDK. Source: Anzu.io")

As gaming continues to grow [across demographics](https://www.emarketer.com/content/who-is-gaming-and-how-can-marketers-level-up), the medium has become an increasingly important channel for marketers. In addition to serving outside ads to the players in-game, game developers have started to collaborate directly with brands to create branded content into games. With notable collaborations between [Louis Vuitton and Riot Games](https://eu.louisvuitton.com/eng-e1/articles/louis-vuitton-announces-league-of-legends-partnership) and between [Nike and Epic Games](https://esportsinsider.com/2019/05/epic-games-launches-fortnite-and-nike-air-jordans-crossover/), we are likely to see more similar collaborations going forward. Like Fortnite, developers looking to do brand collaborations in the future need to take brand-friendliness into consideration when designing their game worlds from the ground up.

### Future Outlook

Stream-friendliness has already become a factor that game developers need to take into consideration when designing new games. To make games that are not only fun to play but also fun to watch, developers need to consider the use of customer acquisition and retention strategies based on popular streaming persona and esports events, new technologies allowing for increased audience participation, and new business models around native advertising. Regarding the future, expect to see more innovation in tools for game developers, as well as new capabilities introduced by existing and upcoming live streaming platforms.

With cloud gaming still in its infancy, we are only seeing the tip of the iceberg in regard to what we can enable for spectators. Another trend I am particularly excited about is the rapid development pace of cryptonetworks such as [Livepeer](https://livepeer.org/), who are building an alternative (and cheaper) infrastructure solution for video and live streaming app developers, significantly lowering the barriers for new entrants on the market.

As an increasing amount of previously immature and/or unaffordable infrastructure pieces become democratised for app developers, we can expect more innovation on the market for better video and live streaming platforms, further widening the suite of tools for streamers, spectators, and developers. The opportunity in creating a deeper experience for spectators is massive, and I’m convinced that we are just getting started.