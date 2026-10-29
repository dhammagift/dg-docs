---
title: "Подкасты Сутт"
description: "Сутты и Виная вслух, по одной в день, на пали, русском и английском. Никакой воды и разговоров: только сутты, только Дхамма."
slug: /podcasts
sidebar_position: 16
sidebar_label: Подкасты
---

import Spotify from '@site/static/img/buttons/podcast-spotify.png';
import YouTubeMusic from '@site/static/img/buttons/podcast-youtube-music.png';
import ApplePodcasts from '@site/static/img/buttons/podcast-apple-podcasts.png';
import YandexMusic from '@site/static/img/buttons/podcast-yandex-music.png';
import YandexMusicSoon from '@site/static/img/buttons/podcast-yandex-music-soon.png';
import AmazonMusic from '@site/static/img/buttons/podcast-amazon-music.png';
import PodcastIndex from '@site/static/img/buttons/podcast-podcast-index.png';
import Rss from '@site/static/img/buttons/podcast-rss.png';

export const Show = ({cover, title, lang, badges}) => (
  <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12, padding: 16, margin: '1rem 0 1.5rem'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14}}>
      <img src={cover} alt="" width="96" height="96" style={{borderRadius: 10, flex: 'none'}} />
      <div>
        <div style={{fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3}}>{title}</div>
        <div style={{opacity: 0.7}}>{lang}</div>
      </div>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 220px)', gap: 10}}>
      {badges.map(([src, alt, href]) => href
        ? <a key={alt} href={href}><img src={src} alt={alt} width="220" height="65" style={{display: 'block'}} /></a>
        : <img key={alt} src={src} alt={alt} width="220" height="65" style={{display: 'block'}} />)}
    </div>
  </div>
);

# Подкасты

Сутты Палийского канона вслух, по одной в день, по порядку, затем Виная.
Подкастов три: на английском, на русском и на пали. Каждый выпуск — один
текст, а в его описании ссылка на этот текст на Dhamma.Gift, на пали и с
переводами рядом.

<Show
  cover="https://files.dhamma.gift/podcast/pli.v2.jpg"
  title="Suttas and Vinaya in Pāli"
  lang="Пали"
  badges={[
    [YouTubeMusic, 'Listen on YouTube Music', 'https://www.youtube.com/playlist?list=PLR9ba080Y--4'],
    [ApplePodcasts, 'Listen on Apple Podcasts', 'https://podcasts.apple.com/us/podcast/suttas-and-vinaya-in-pāli/id6825338351'],
    [AmazonMusic, 'Listen on Amazon Music', 'https://music.amazon.com/podcasts/2d52d312-7433-4337-be88-0296b4f137fb'],
    [PodcastIndex, 'Listen on Podcast Index', 'https://podcastindex.org/podcast/8079440'],
    [Rss, 'Subscribe via RSS feed', 'https://files.dhamma.gift/podcast/pli.xml'],
    [YandexMusic, 'Listen on Yandex Music', 'https://music.yandex.ru/album/44624722'],
  ]}
/>

<Show
  cover="https://files.dhamma.gift/podcast/ru.v2.jpg"
  title="Сутты и Виная Палийского канона"
  lang="Русский"
  badges={[
    [YouTubeMusic, 'Listen on YouTube Music', 'https://www.youtube.com/playlist?list=PLY1n40Yg4a1o'],
    [ApplePodcasts, 'Listen on Apple Podcasts', 'https://podcasts.apple.com/us/podcast/сутты-и-виная-палийского-канона/id6825337615'],
    [AmazonMusic, 'Listen on Amazon Music', 'https://music.amazon.com/podcasts/e7de6ae9-f8ab-4cce-a33f-887680355adb'],
    [PodcastIndex, 'Listen on Podcast Index', 'https://podcastindex.org/podcast/8079443'],
    [Rss, 'Subscribe via RSS feed', 'https://files.dhamma.gift/podcast/ru.xml'],
    [YandexMusicSoon, 'Coming soon to Yandex Music'],
  ]}
/>

<Show
  cover="https://files.dhamma.gift/podcast/en.v2.jpg"
  title="Suttas and Vinaya of the Pali Canon"
  lang="Английский"
  badges={[
    [YouTubeMusic, 'Listen on YouTube Music', 'https://www.youtube.com/playlist?list=PLJK1dkppMGjg'],
    [ApplePodcasts, 'Listen on Apple Podcasts', 'https://podcasts.apple.com/us/podcast/suttas-and-vinaya-of-the-pali-canon/id6825338912'],
    [AmazonMusic, 'Listen on Amazon Music', 'https://music.amazon.com/podcasts/8e33cb05-3488-4f4b-ba0e-30323067a8c4'],
    [PodcastIndex, 'Listen on Podcast Index', 'https://podcastindex.org/podcast/8079442'],
    [Rss, 'Subscribe via RSS feed', 'https://files.dhamma.gift/podcast/en.xml'],
    [Spotify, 'Listen on Spotify', 'https://open.spotify.com/show/03BVbxuiraGTgNW29OPDk7'],
  ]}
/>

## RSS

Любое приложение для подкастов принимает ленту по адресу: скопируйте ссылку
с плашки RSS и добавьте в приложении подкаст по URL.

- Пали: `https://files.dhamma.gift/podcast/pli.xml`
- Русский: `https://files.dhamma.gift/podcast/ru.xml`
- Английский: `https://files.dhamma.gift/podcast/en.xml`
