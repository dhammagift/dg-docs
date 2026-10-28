---
slug: /sutta
sidebar_position: 1
sidebar_label: Principles by Suttas
---

import SuttaBrowser from '@site/src/components/SuttaBrowser';
import SuttaLink from '@site/src/components/SuttaLink';
import SiteLink from '@site/src/components/SiteLink';
import PageTools from '@site/src/components/PageTools';
import VijjaHatthipada from '@site/static/img/thumb/vijja-hatthipada-nobg.webp';

<head>
  <script type="application/ld+json">{"{\"@context\": \"https://schema.org\", \"@type\": \"Dataset\", \"name\": \"Dhamma.Gift: the Suttas read by the Suttas' own definitions\", \"description\": \"The Suttas define their own key terms: the question \\\"Katamañca, bhikkhave, X?\\\" (\\\"And what, monks, is X?\\\") is answered, and the answer closes with \\\"idaṁ vuccati, bhikkhave, X\\\". This dataset gives that reading as open data: the Pali root text with the Dhamma.Gift Russian translation side by side, the glossary of terms with the project's Russian and English renderings and, where the canon defines a term, the definition and the lines where it stands, and the Principles by the Suttas and the Rationale in English and Russian.\", \"url\": \"https://huggingface.co/datasets/dhammagift/dg-dataset\", \"sameAs\": [\"https://github.com/dhammagift/dg-dataset\", \"https://doi.org/10.5281/zenodo.23491473\"], \"identifier\": \"https://doi.org/10.5281/zenodo.23491473\", \"license\": \"https://creativecommons.org/licenses/by/4.0/\", \"isAccessibleForFree\": true, \"creator\": {\"@type\": \"Organization\", \"name\": \"Dhamma.Gift\", \"url\": \"https://dhamma.gift/\"}, \"inLanguage\": [\"pi\", \"ru\", \"en\"], \"keywords\": [\"Pali Canon\", \"Sutta\", \"Vinaya\", \"Pali\", \"parallel corpus\", \"glossary\", \"Buddhism\", \"translation\"], \"distribution\": [{\"@type\": \"DataDownload\", \"encodingFormat\": \"application/jsonl\", \"contentUrl\": \"https://huggingface.co/datasets/dhammagift/dg-dataset/resolve/main/data/parallel_pli_ru.jsonl\"}, {\"@type\": \"DataDownload\", \"encodingFormat\": \"application/jsonl\", \"contentUrl\": \"https://huggingface.co/datasets/dhammagift/dg-dataset/resolve/main/data/glossary.jsonl\"}]}"}</script>
</head>

# Dhamma Principles

<img src={VijjaHatthipada} alt="Dhamma Principles" className="dg-hero-image" />

<PageTools />

The "o" translations, and the approach Dhamma.gift offers as a whole, rest on the points of the Buddha's Teaching from the Suttas below. These are the criteria the Buddha recommended for verifying teachings. They are at the same time a practical checklist for recognizing the errors and distortions found in the vast majority of existing traditions and translations.

Each principle is given in the same form: **Principle** (the formulation), **Sutta** (the passage and its key Pāli phrase), and **Application** (how it bears on translation, with an example). The "Read →" link opens the passage in the window [below](#read-the-passages). How these criteria shape word-level choices is set out in the [Principles of Translation](/principles).

## Textual authenticity — the Four Great References

### 1. Verify against the suttas and the Vinaya

**Principle.** A claim that "this is the Dhamma, this is the Vinaya, this is the Teacher's word" is checked against the suttas and the Vinaya. It is not accepted or rejected on the authority of whoever reported it.

**Sutta.** <SiteLink to="/an4.180:2.6?lang=en&hide=id">AN 4.180</SiteLink> (Mahāpadesa Sutta): *sutte otāretabbāni, vinaye sandassetabbāni*. The sutta makes clear that individual monks and whole communities can pass on what is not the Teacher's Teaching, and that verifying it takes a check against the Suttas and the Vinaya. <SuttaLink index={0}>Read →</SuttaLink>

**Application.** The rendering of a term is checked against the definitions in the suttas first ([Principles of Translation](/principles), principles 3–4). Example: *dukkha* is checked against <SiteLink to="/mn141:16.1?lang=en&hide=id">mn141</SiteLink>.

## The national language doesn't need to change

### 2. Do not override the ordinary meaning of words

**Principle.** The receiving language need not be reshaped. Phenomena should be called what they would ordinarily be called in that language, in our case English.

**Sutta.** MN 139 (Araṇavibhaṅga Sutta): *janapadaniruttiṁ nābhiniveseyya, samaññaṁ nātidhāveyya*, "one should not insist on a regional expression nor override the normal designation" (<SiteLink to="/mn139:3.9?lang=en&hide=id">mn139</SiteLink>; the Buddha <SiteLink to="/mn139:12.1?lang=en&hide=id">explains it further on</SiteLink>). <SuttaLink index={3}>Read →</SuttaLink>

**Application.** A great many points in translations of the Dhamma violate this very principle. English words such as *suffering*, *craving*, *arising*, *cessation*, *form* and *intention* have been given modified, either broadened or narrowed, meanings within "translated Buddhism." More on this in the [Rationale](/rationale); how to test it in practice is in the [Principles of Translation](/principles), principle 5.

### 3. Meaning matters, wording is secondary

**Principle.** When the meaning (*attha*) agrees but the wording (*byañjana*) differs, that is nothing to quarrel over; disputes over minor phrasing devalue an otherwise correct teaching. A mismatch in meaning does matter. Even at the cost of some friction for both sides, it is worth clarifying what was poorly grasped as poorly grasped, and what was well grasped as well grasped.

**Sutta.** <SiteLink to="/mn103:11.2?lang=en&hide=id">MN 103</SiteLink> (Kinti Sutta). <SuttaLink index={4}>Read →</SuttaLink>

**Application.** "Pain" or "pain-discomfort" for *dukkha* is a difference of wording. "Pain" or "suffering" is a difference of meaning.

## Criteria of "effectiveness" — not authority, not hearsay

### 4. Not by tradition, scripture or authority

**Principle.** Do not accept a teaching merely because of oral tradition, lineage, report, scripture, logic, inference, reasoned train of thought, agreement with a view one already holds, the speaker's apparent competence, or "this ascetic is our teacher." Test it by whether it leads to the skilful or the unskilful, to harm or to benefit.

**Sutta.** <SiteLink to="/an3.65:4.1?lang=en&hide=id">AN 3.65</SiteLink> (Kesamutti / Kālāma Sutta), the companion piece to Mahāpadesa: *mā anussavena, mā paramparāya… mā samaṇo no garūti*. <SuttaLink index={1}>Read →</SuttaLink>

**Application.** An established rendering, including one found in a commentary, is not applied if it contradicts the canonical definition ([Principles of Translation](/principles), principle 8).

### 5. Safeguarding the truth

**Principle.** Where Kālāma says what *not* to infer a teaching's truth from, MN 95 says what one may honestly say instead. Safeguarding the truth (*saccānurakkhaṇa*) is to say "such is my faith," not "this alone is true, anything else is wrong."

**Sutta.** <SiteLink to="/mn95:15.4?lang=en&hide=id">MN 95</SiteLink> (Caṅkī Sutta): *evaṁ me saddhā*. <SuttaLink index={2}>Read →</SuttaLink>

**Application.** Every translation is marked as "Work in Progress" ([Principles of Translation](/principles), principle 1).

## Scrutinize before you praise or blame

### 6. Examine before judging

**Principle.** Praising or condemning something without first examining and investigating it is a failing. Examining first is the mark of the wise.

**Sutta.** <SiteLink to="/an4.3:1.3?lang=en&hide=id">AN 4.3</SiteLink>: *ananuvicca apariyogāhetvā*. <SuttaLink index={5}>Read →</SuttaLink>

**Application.** A rendering, including the project's own, is judged only after its occurrences and definitions in the suttas have been examined.

## Definitive vs. interpretable meaning

### 7. Do not confuse explicit and implicit meaning

**Principle.** Presenting a discourse whose meaning is explicit (*nītattha*) as one that still needs interpreting (*neyyattha*), or a discourse that needs interpreting as explicit, misrepresents the Tathāgata. This is exactly how mistranslation and misreading happen in practice. Those who present the explicit as explicit and the implicit as implicit do not misrepresent him.

**Sutta.** <SiteLink to="/an2.24:1.3?lang=en&hide=id">AN 2.24</SiteLink> (both kinds of misrepresentation) and <SiteLink to="/an2.25:1.3?lang=en&hide=id">AN 2.25</SiteLink> (the counterpart: two who do not misrepresent). <SuttaLink index={6}>Read AN 2.24 →</SuttaLink>{' '} <SuttaLink index={7}>Read AN 2.25 →</SuttaLink>

**Application.** *Dukkha* is explicitly defined (<SiteLink to="/mn141:16.1?lang=en&hide=id">mn141</SiteLink>). Treating it as an "untranslatable" concept that needs interpretation presents the explicit as implicit ([Rationale](/rationale#dukkha)).

### 8. Do not ascribe or deny what the Tathāgata said

**Principle.** There are two ways of misrepresenting the Realized One: ascribing to him what he did not say, and denying what he did say.

**Sutta.** <SiteLink to="/an2.23:1.3?lang=en&hide=id">AN 2.23</SiteLink>. <SuttaLink index={8}>Read →</SuttaLink>

**Application.** A rendering that adds a sense absent from the Pāli is a form of the first error. "Extreme" for *anta* adds the permission of a moderate range, which the text does not contain. A rendering that drops a sense the Pāli has is a form of the second ([Rationale](/rationale#anta)).

## How a question should be answered

### 9. Four ways of answering a question

**Principle.** Some questions should be answered categorically, some analysed or qualified (*vibhajjabyākaraṇa*), some met with a counter-question, and some set aside. One who answers a question in the wrong way "is not fit to talk with" (AN 3.67). This is an important aspect of the Dhamma, and one of the criteria that helps establish, for example, that *anicca* should not be translated as "impermanence."[^1]

**Sutta.** <SiteLink to="/an4.42:1.3?lang=en&hide=id">AN 4.42</SiteLink>; <SiteLink to="/an3.67:2.2?lang=en&hide=id">AN 3.67</SiteLink>. <SuttaLink index={9}>Read →</SuttaLink>

**Application.** The categorical answer accepted in <SiteLink to="/sn22.59:6.4?lang=en&hide=id">sn22.59</SiteLink> decides between "impermanent" and "unreliable" (note 1).

## How the Dhamma disappears over time

### 10. Literary compositions displace the Tathāgata's discourses

**Principle.** Like a drum repaired peg by peg until none of the original wood remains, discourses "spoken by the Tathāgata, deep, profound in meaning, transcendent, connected with emptiness" will stop being learned. Meanwhile discourses "composed by poets, poetic, ornate in letter and phrase, by outsiders or spoken by disciples" will be listened to. Even today such compositions often carry more authority than the suttas themselves.

**Sutta.** <SiteLink to="/sn20.7:1.6?lang=en&hide=id">SN 20.7</SiteLink> (Āṇi Sutta). <SuttaLink index={10}>Read →</SuttaLink>

**Application.** Dhamma.Gift places its translations between literary adaptation and grammatical analysis ([Principles of Translation](/principles#in-the-middle-between-adaptation-and-grammatical-analysis)). It does not offer a literary composition.

### 11. The counterfeit of the true Dhamma

**Principle.** Where SN 20.7 shows *how* the true teaching fades, this sutta shows *why*. It does not disappear while no counterfeit of it (*saddhammappatirūpaka*) has arisen in the world; as counterfeit gold appears, true gold vanishes.

**Sutta.** <SiteLink to="/sn16.13:1.7?lang=en&hide=id">SN 16.13</SiteLink> (Saddhammappatirūpaka Sutta). <SuttaLink index={11}>Read →</SuttaLink>

**Application.** The test of a rendering is not whether it sounds familiar or "Buddhist," but whether it agrees with the suttas (principle 1).

### 12. Misplaced words and phrases

**Principle.** Discourses learned with their words and phrases misplaced lead the meaning astray.

**Sutta.** <SiteLink to="/an5.156:1.3?lang=en&hide=id">AN 5.156</SiteLink> (parallel: AN 4.160): *duggahitaṁ suttantaṁ pariyāpuṇanti dunnikkhittehi padabyañjanehi*. <SuttaLink index={12}>Read →</SuttaLink>

**Application.** Pāli word order and grammatical structure are preserved where possible ([Principles of Translation](/principles), principles 11–12).

## What counts as "well spoken"

### 13. Whatever is well spoken

**Principle.** *Yaṁ kiñci subhāsitaṁ sabbaṁ taṁ tassa bhagavato vacanaṁ*, "whatever is well spoken is all the word of the Blessed One." In the sutta these are the words of Venerable Uttara to Sakka, illustrated by the simile of a heap of grain. This is a useful check against a narrower, more territorial reading of what counts as legitimate Dhamma. It is still to be read together with Mahāpadesa and Kālāma above, not as licence for anything to be called the Buddha's word.

**Sutta.** <SiteLink to="/an8.8:6.7?lang=en&hide=id">AN 8.8</SiteLink>. <SuttaLink index={13}>Read →</SuttaLink>

**Application.** What decides whether a rendering is accepted is its agreement with the suttas, not who proposed it or which tradition it comes from.

## Grasping the teaching correctly

### 14. Learning for understanding, not for debate

**Principle.** As in the water-snake simile, learning the Dhamma for the sake of debate and finding fault with others, rather than for understanding, is learning it wrongly. It works against the learner rather than for them.

**Sutta.** <SiteLink to="/mn22:10.10?lang=en&hide=id">MN 22</SiteLink> (Alagaddūpama Sutta). <SuttaLink index={14}>Read →</SuttaLink>

**Application.** The analyses in the [Rationale](/rationale) are offered for understanding the texts, not as polemics against translators. The objections are stated so that they can be checked.

## The Dhamma is not sung

### 15. No drawn-out singing voice

**Principle.** There are five dangers for one who recites the Dhamma in a drawn-out, singing voice (*āyatakena gītassarena*). He is charmed by his own voice; others are charmed by it; householders take offence ("the ascetics sing just as we do"); one who aims at a beautiful voice breaks his samādhi; and the next generation follows the example.

**Sutta.** <SiteLink to="/an5.209:1.1?lang=en&hide=id">AN 5.209</SiteLink> (Gītassara Sutta). <SuttaLink index={15}>Read →</SuttaLink>

**Application.** Applies to oral presentation of the Dhamma, including the recitation of translations.

## The four truths in depth — Hatthipada

As in <SiteLink to="/mn28:2.1?lang=en&hide=id">MN 28</SiteLink>, the footprints of all animals fit into the elephant's, and everything skilful fits into the four noble truths. <SiteLink to="/hatthipada/?lang=en">Hatthipada</SiteLink> shows how the suttas themselves define every word of the truths. Click a word and its definitions open ("Katamā ca, bhikkhave, X?" … "idaṁ vuccati X"); their words can be clicked in turn, as deep as you go. Only the Pāḷi of the four nikāyas and the suttas' own formulas are used; the translation is for reference.

<SiteLink to="/hatthipada/?lang=en">Open Hatthipada →</SiteLink>

## Read the passages

The "Read →" links next to each principle above open that sutta directly in the window here, in Pāli and translation, scrolled straight to the relevant line:

<SuttaBrowser items={[
  { label: 'AN 4.180 — Mahāpadesa', desc: 'How to check words attributed to the Buddha: against the suttas and the Vinaya, not by the authority of whoever reports them.', src: '/an4.180:2.6?lang=en&hide=id' },
  { label: 'AN 3.65 — Kālāma', desc: 'Don\'t accept a teaching only by tradition, hearsay, scripture or authority — test it by whether it leads to the skillful.', src: '/an3.65:4.1?lang=en&hide=id' },
  { label: 'MN 95 — Caṅkī', desc: 'What you can honestly say instead of the conclusions Kālāma rules out: "such is my faith," not "this alone is true."', src: '/mn95:15.4?lang=en&hide=id' },
  { label: 'MN 139', desc: 'Don\'t quarrel over dialect or wording — what matters is the meaning, not a particular regional word.', src: '/mn139:3.9?lang=en&hide=id' },
  { label: 'MN 103', desc: 'If the meaning (attha) does not agree, it is worth sorting out, even at the cost of some friction.', src: '/mn103:11.2?lang=en&hide=id' },
  { label: 'AN 4.3', desc: 'Praising or blaming without examining first is a failing; examination comes before judgment.', src: '/an4.3:1.3?lang=en&hide=id' },
  { label: 'AN 2.24', desc: 'Presenting a discourse of explicit meaning as needing interpretation — a source of mistranslation.', src: '/an2.24:1.3?lang=en&hide=id' },
  { label: 'AN 2.25', desc: 'The counterpart: presenting the explicit as explicit and the implicit as implicit does not misrepresent the Realized One.', src: '/an2.25:1.3?lang=en&hide=id' },
  { label: 'AN 2.23', desc: 'Two ways to misrepresent the Realized One: ascribing a meaning he did not state, or denying one he did.', src: '/an2.23:1.3?lang=en&hide=id' },
  { label: 'AN 4.42', desc: 'Four ways of answering a question — not every question deserves a flat yes/no.', src: '/an4.42:1.3?lang=en&hide=id' },
  { label: 'SN 20.7 — Āṇi', desc: 'Memorized texts get distorted over time, like a drum repaired peg by peg.', src: '/sn20.7:1.2?lang=en&hide=id' },
  { label: 'SN 16.13 — Saddhammappatirūpaka', desc: 'Why the true Dhamma fades: it does not go while no counterfeit has arisen — like real gold once counterfeit gold appears.', src: '/sn16.13:1.7?lang=en&hide=id' },
  { label: 'AN 5.156', desc: 'Discourses learned with words and phrases misplaced — the meaning is lost.', src: '/an5.156:1.3?lang=en&hide=id' },
  { label: 'AN 8.8', desc: '"Whatever is well said is the word of the Blessed One" (Ven. Uttara to Sakka) — read together with Mahāpadesa and Kālāma, not as license for anything.', src: '/an8.8:6.7?lang=en&hide=id' },
  { label: 'MN 22', desc: 'Learning the Dhamma for debate rather than understanding is learning it wrongly.', src: '/mn22:10.10?lang=en&hide=id' },
  { label: 'AN 5.209', desc: 'Five dangers of reciting the Dhamma in a drawn-out singing voice.', src: '/an5.209:1.1?lang=en&hide=id' },
]} />

## See also

- [Principles of Translation](/principles) — how these criteria shape word-level translation choices.
- [Rationale](/rationale) — the detailed reasoning and examples behind those principles.
- <SiteLink to="/hatthipada/?lang=en">Hatthipada</SiteLink> — the four truths and every word of them by the suttas' own definitions.
- [Dataset](https://huggingface.co/datasets/dhammagift/dg-dataset) — this reading as open data (CC BY 4.0): the project's Russian translation with the Pāli, and where the suttas define each term; also on [GitHub](https://github.com/dhammagift/dg-dataset) and [Zenodo](https://doi.org/10.5281/zenodo.23491473) (DOI 10.5281/zenodo.23491473).

[^1]: An example: in <SiteLink to="/sn22.59:6.4?lang=en&hide=id">sn22.59</SiteLink> the Buddha asks: *Yaṁ panāniccaṁ dukkhaṁ vā taṁ sukhaṁ vā?*, "And what is *anicca*, is it painful or pleasant?" The monks answer categorically, *Dukkhaṁ, bhante*, "Painful, venerable sir" (<SiteLink to="/sn22.59:6.5?lang=en&hide=id">sn22.59</SiteLink>), and the Buddha accepts that answer. So this is a question to be answered categorically (*ekaṁsabyākaraṇīya*). If *anicca* meant "impermanent," no categorical answer would be possible, because what is impermanent is not always painful. An impermanent pain is unpleasant while it lasts and pleasant when it goes; something pleasant, on the contrary, is painful when it goes (cf. <SiteLink to="/mn44:24.2?lang=en&hide=id">mn44</SiteLink>). Such a question would have to be answered with analysis (*vibhajjabyākaraṇa*): "it depends on what exactly is impermanent." The categorical answer the Buddha accepts shows that *anicca* is what is always painful: unreliable, unstable, what cannot be relied upon. This is a serious argument. In <SiteLink to="/an3.67:2.2?lang=en&hide=id">an3.67</SiteLink> the Buddha states plainly that one who answers categorically a question that calls for analysis (or the reverse) is not fit to talk with. By accepting a categorical answer to a question that calls for analysis, the Buddha would contradict his own words.
