# TODO

Move notes from private.md

## Goal

- [ ] Crypto (nft/defi) cooking (investing) group with bots
- [ ] Test launch 20 May
- [ ] Launch 30 May

## Now

- [x] screener, lvlup, 
- [ ] test from everyone perspective up
- [x] replace | with |||, remove unicode from name in logs?
- [x] refactor bot tasks, make base calss and extend, w o wo json
- [x] fix motivate
- [x] finish levelup
- [ ] complete lv1
- [x] coins, db => 
- [x] refactor paid commands =>
- [x] require coins =>
- [ ] payment UI and code, $10 - 100 coins, 10 each use, Range Inputs from 100 to 10000 =>
- [ ] complete contract =>
- [ ] upload to dev =>
- [ ] make listener in bot, modify coins in db => 
- [ ] complete payment
- [x] restirc "info" channel to read only
- [x] max number of usages / lim
- [x] status command / user menu / lelevup UI
- [x] add role routine add on xp. how we count tasks there were not complete? Split to lv1 subtasks and count after exec
- [ ] refactor levelup levels, commands, rank command num of commands
- [ ] levelup json
- [ ] coins in levelup are static
- [ ] random nft + cleanup reddit praw
- [ ] add community commands
- [ ] object.assign in tasks base class
- [ ] add other tasks
- [ ] check category permissions: bot only have access to bot, check other roles, channels should be synced with category
- [ ] each role gives 100 coins + see whatsup (levels(new channels), new tasks (quests), command drop (free), coins drop)
- [x] Finish etherscan scraper, write file, schedule 1h
- [x] Scrap upcoming, with tw,disc count, schedule 1 day
- [x] Finish twitter, schedule
- [x] Opensea monitor for new listings (floor price), new collection listings (9)daily)
- [x] add links to embeds
- [x] fix python twitter
- [x] enter command
- [ ] setColor to dotenv
- [ ] Finish landing. Alternate enter method
- [-] Roles, Screener. 4 commands free by screener questions. Getting enlighted role (1nd from 2nd tier gives 100 coins and opens marketing tasks)
- [ ] check bots commands only ephemeral
- [x] paid commands always visible in !help
- [-] Check permissions for channels
- [-] Finish payment, coins
- [x] Commands for each bot
- [-] 5 bot commands and 5 images (motivate, memes, pepe, culture, random nft (https://docs.opensea.io/reference/retrieving-orders))
- [-] 5 roles (crypto dumbass, crypto nomad, crypto lost mmoney, crypto junkie, cryptographer)
- [x] 5 commands (upcoming, recent, minting, twitter, whitelist)
- [x] add tasks, task are commands in different dir
- [ ] Test to team + jonny
- [ ] Market, market paper, give pass, possibly give coins as part of promotion
- [x] commands timeout and max number of us
- [ ] randomize whitelists (in command)
- [ ] Cron for some reason sends message on second try, remove ntf error to file
- [ ] remove <> from scripts, add in bot presentation
- [ ] precentage green below floor price opensea monitor
- [x] use discord builder timestamps and mentions - https://discordjs.guide/popular-topics/builders.html#timestamps
- [ ] hide command - https://github.com/discordjs/discord-api-types/blob/83f29b692839cc51869bcafdaf387b68731e0a28/rest/v9/index.ts#L756
- [f] https://stackoverflow.com/questions/72048570/403-error-when-setting-application-command-permissions-on-discord
- [ ] praw,scraper have secrets in code, search secret, move dotenv

## Start

- start opensea-monitor
- start mongo
- start praw
- start bot

## Bots

- [ ] https://www.niftyriver.io/analytics/whitelists
- [ ] https://nftgo.io/whale-tracking/mint
- [ ] https://www.nftscan.com/analytics/discover
- [ ] random nft https://nfty.dev/

## Marketing

- [ ] Give password to discord with tools. So we are wanting to launh unique defi project, see WP, if you agree give us info and we give you oass to closed discord.
- [ ] Push WP to server and protect with pass
- [ ] 1. What project is about?
- [ ] 2. What discord is about?
- [ ] 3. What we are looking for? We are looking for projects..
- [ ] 4. Who supports us?
- [ ] PS. Kindly note that all information I share with you is private and not inteded for public disclosure. Thank you.
- [ ] 5. Please let me know if you will be willing to participate. I will send pass and sample of announcement other project used for us. You can use it and come up with your own.

## End of May Launch

- [ ] Landing cave of secrets pass / pay
- [ ] reddit service
- [ ] Screener tasks. Like list your favourite nfts. What non-released project you think will make it.
- [ ] TRUSTable Marketing letter
- [ ] Voting command for nfts
- [ ] ERC20 token
- [ ] Boost Xp
- [ ] Withdraw xp-> token?

## Ideas

- [ ] Discord is a new web
- [ ] Crypto discord with influncer search bot
- [ ] Sneakers discord and bot
- [ ] Discord search engine with indexer bot
- [ ] remove bs font

## Tasks

- [x] have the same structure as commands
- [ ] description is a embed
- [-] separate script to bundle tasks into JSON db
- [ ] remove rollup eb2d9cf7c21be76bc44672ffa80bf6188f1e9985
- [ ] check commands async ex
- [ ] redo reddit parsing, separate service and websocket?
- [ ] check discord 25, add 2 roles, summarize xp
- [ ] command tasks id or available or new or cat

#### timeline (looking to 4 weeks)

- [ ] Screener -> all question one time, can be done in a day
- [ ] Marketing timeout 6h -> 24h one micro-level at least, 2-3 days total, 5 preferrably
- [ ] Community -> depend on user intercation, 5 pref
- [ ] Art, create real art, 5 pref
- [ ] Code, create real code, 5 pref
- [ ] Shop. 5-7 days
- [ ] Can create req(large XP) puzzles to delay

#### Scrapper

- https://github.com/NotYourGuy/scraperr
- https://www.reddit.com/r/DataHoarder/comments/d400y5/reddit_image_scraper/

#### Shop

- [ ] place to spend xp points
- [ ] 40 pages 20/20?
- [ ] n - amount of mintable papers, can be adjusted in real time.
- [ ] Legend role gove access to mint
- [ ] sell(list), buy, send, (showoff)
- [ ] 2 of 4 commands give password to encryption
- [ ] user have to guess how to decrypt with phrase
- [ ] 0.1 per level per 5 roles ~ 2-3 days

#### Legend role, shop access

- [ ] Mint 50k
- [ ] sell,buy,show,send each 5k
- [ ] hint 1, requre crypto task to solve
- [ ] hint 2
- [ ] hint 3

#### White role, wp access

- [ ] show password
- [ ] vote coll_id xp_amoune
- [ ] list supported collections

#### Cypher

- [ ] Uncommon cipher
- [ ] enigma online?
- [ ] uncommon text encryption
- [ ] https://crypto.stackexchange.com/questions/41529/implementing-symmetric-encryption-algorithms-with-whole-words
- [ ] http://rumkin.com/tools/cipher/

#### 2 weeks in (discord launch after)

- [ ] Check if successfull
- [ ] talk to sync
- [ ] landing page by figma design
- [ ] nft design art
- [ ] staking contract ala air
- [ ] erc20 token launch, non tradable, swappable (? to real token later ?)

#### 1 month - 14 may deadline

- [x] Easy to write tasks connected to flexible answers.
- [x] XP systems with horizontal and vertical leveling. Vertical measured by xp, Horizontal by ranks (number of tasks).
- [x] 5 categories tasks: Market, Comm, Art, Code, Boost. 1month span
- [x] Boost implementation.

#### NEXT

- [ ] Whitepaper longe
- [ ] shop? discordnft? currency as xp?
- [ ] vote
- [ ] see 2 weeks

#### Boost

- [ ] Boost function open browser
- [ ] Discord authenticate -> get user detials
- [ ] Deployed contract
- [ ] UI, desired xp / number of levels
- [ ] pay to contract with guild/userId
- [ ] emit guild/userId event and amount spent
- [ ] listen in app -> provide xp and send DM
- [ ] "maximum" button 0.5 eth straight to the shop level

#### Main

- [ ] Colldown for command argument
- [x] add categories

#### Leveling

###### Tasks

General timout for tier 1 tasks - 6h.
This makes tier 4-5 tasks optional.
Tier 4-5 tasks aimed at project success.

###### Screener crypto

- [ ] favorite project, influencer
- [ ] other discords
- [ ] ---
- [4] unique idea for nft
- [5] tokenomics

###### Marketing

- [ ] tweet
- [ ] reddit
- [ ] tweet with mention
- [4] original image
- [5] marketing video

###### Community

- [1] Use one of the ! commands
- [3] Help other
- [5] Teem up

###### Art

- [ ] liked work
- [ ] your work
- [4] logo work
- [5] nft idea

###### Code

- [ ] Solve simple task
- [ ] Sole HR task, submission channel
- [3] node task
- [4] solidity task
- [5] Create NFT??

###### Roles/Channels

- [ ] Marketing
- [ ] Community building
- [ ] Art
- [ ] Dev
- [ ] Booster
- [ ] Whitepaper

## v0

#### Donation -> Boost

- [ ] Donation gives you XP
- [ ] Donate n eth -> receive n xp
- [ ] Donoh role

#### XP

- is a local currency. No way in code it should check level xp, only highest roles. Except assign
- only solving tasks in current category gives roles. OR. highest categories have higher bounty.
- category roles by solving a lot of tasks inside category

#### Commands

- [ ] Motivation
- [ ] Funny
- [ ] Creepy
- [ ] Art/Photo
- [ ] Games
- [ ] Memes
- [ ] Culture
- [ ] VR
- [ ] https://www.reddit.com/r/generative/ and p5js

###### System

- [ ] modmail
- [ ] nominate/givexp

#### Tasks

###### Marketing

- [ ] Twitter x 10 x 24h?
- [ ] Medium
- [ ] Tiktok
- [ ] Reddit
- [ ] YouTube

###### Dev

- hackerrak by submit date

###### Art

- Memes
- SVG

#### Questions

- [x] Why do we need need await profiles?
- [x] !? messages delayed
- [ ] loLowerCase for roles and commands
  
#### Discord

- [x] All channels hidden by default
- [ ] Read only channels
- [ ] Bot content intent https://support-dev.discord.com/hc/en-us/articles/4404772028055

#### Files

- [ ] permissions.js serverId move to .env
- [ ] messageCreate.js mpve prefix to .env
- [ ] help js admin
- [ ] answer 6 horus delay

#### Goals

- [x] answer
- [x] xp system
- [ ] leaderboard
- [ ] profile xp image ?
- [ ] discord NFT as embed

#### Sisters

- https://thedefiant.io/amm-nfts/


#### Discord Accs

347653
blaze.imba
kwerkee12
dmitry.branitskiy1@gmail.com - disabled
dmitrii.branitskii2
dmitrii.branitskii3
dmitrii.branitskii4

#### Resources

- [ ]effective nft launch (https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches)
- [ ] mongodb Sam google account
- [ ] [discord python add to server with api](https://dev.to/dandev95/add-a-user-to-a-guild-with-discord-oauth2-in-python-using-requests-595f)
- [ ] jqery template Defining a HTML template to append using JQuery (https://stackoverflow.com/questions/18673860/defining-a-html-template-to-append-using-jquery)
- [ ] Pupeteer OS Scraper - https://github.com/dcts/opensea-scraper/blob/main/src/functions/offers.js
- [ ] Global search bot - https://github.com/discord/discord-api-docs/issues/663
- [ ] hn hiring - https://news.ycombinator.com/item?id=31235968
- [ ] cheap service and phones - https://www.reddit.com/r/NoContract/comments/rhtnbk/my_cell_service_advice_tree_cheapest_rate_plan/
- [ ] Dev portal https://discord.com/developers/applications/959176510118453301/oauth2/url-generator
- [ ] Badges - https://tibi4.com/discord-role-icons/
- [ ] NFT Discord Bot https://github.com/lucid-eleven/nft-discord-bot
- [ ] Nice looking code bot https://github.com/discord-tickets/bot/tree/main/src
- [ ] Better discord ranking https://github.com/Tomato6966/better-discord-ranking-system
- [ ] Amamri old bot https://github.com/litochee/AmariBot/blob/master/app.js
- [ ] Music bot https://github.com/SudhanPlayz/Discord-MusicBot/blob/master/structures/DiscordMusicBot.js
- [ ] Discord leveling system https://www.youtube.com/watch?v=Moma4FjzHQU