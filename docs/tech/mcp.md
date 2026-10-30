---
title: "MCP Server for AI Agents"
description: "Connect Claude, Cursor or another AI to the Pali Canon: the assistant searches the suttas, compares translations and answers with quotes and links."

---

# MCP server for AI agents

Dhamma.gift has an [MCP](https://modelcontextprotocol.io) server: an AI assistant (Claude, ChatGPT-style
clients, Cursor and others) can search the Pali Canon here, read suttas and compare translations on its
own, and answer with quotes and links to the reader. It uses the same search engine and the same texts
as the site.

**Address:** `https://api.dhamma.gift/mcp` (Streamable HTTP, no login, read-only). It is listed in the
[official MCP registry](https://registry.modelcontextprotocol.io/v0/servers?search=gift.dhamma) as
`gift.dhamma/pali-canon`. The endpoint is also described in the [API docs](https://dhamma.gift/api-docs/).

## Tools

| Tool | What it does |
|---|---|
| `search` | Keyword, substring or regular-expression search. Returns a list of the matching suttas (id, title, number of matches, reader link): suttas that define the term first, then those named after it, then by how often it occurs. `include_segments` adds the matched Pali lines, `include_translations` with `langs` adds translations. |
| `get_text` | A sutta by id (`mn1`, `dn22`, `sn56.11`): the Pali, and translations when `langs` is given; `editions` adds the whole text in the other editions, line by line. |
| `compare_editions` | The canon's editions compared line by line: the Mahāsaṅgīti beside Buddha Jayanti (Sri Lanka), Chaṭṭha Saṅgāyana (Myanmar), Siam Rath (Thailand), the printed Mahāsaṅgīti of 2005 and the PTS editions (DN, MN, SN, AN). A sutta, a line or a range: first a summary per edition, then the lines that differ, word by word. |
| `compare_translations` | One segment (e.g. `mn129:21.3`) in the Pali, every edition and every available translation side by side. |
| `list_structure` | What exists: collections, books with sutta counts, translation languages and translators; with a prefix (`mn`, `sn56`) the list of suttas under it. |

## Connecting

- **Claude (claude.ai / Desktop):** Settings → Connectors → Add custom connector → URL `https://api.dhamma.gift/mcp`.
- **Claude Code:** `claude mcp add --transport http dhamma-gift https://api.dhamma.gift/mcp`
- **Other clients:** add a remote (HTTP) MCP server with the same URL.

Then ask in plain words, for example: *"Find all suttas about the turtle, quote the Pali and the Russian translation with links."*

## How it behaves

- The search is literal: it matches letters, not meaning. For a topic the assistant tries the Pali and
  translation words itself (`kacchapa`, `kummo`, turtle, черепаха) and merges the results. At least
  3 letters per query; diacritics are ignored (`kacchap` finds `mahākacchapa`).
- Every answer carries reader links: `https://dhamma.gift/mn129` for the sutta, `https://dhamma.gift/mn129:21.3`
  for the exact segment.
- Answers are Pali only unless the assistant asks for translations (`include_translations`, `langs`).
  Sujato's English is left out unless asked for by name; machine (AI) translations are hidden, as in the
  search on the site.
- One query lists up to 40 suttas by default; `limit` takes a number or `"all"`. The answer always gives the
  true number of matching suttas and says when the list was cut.
- Regular expressions work as in the site search. Patterns such as `kata.*dukkha` ("Katamañca … dukkhaṁ?")
  and `vucc.*dukkha` ("idaṁ vuccati … dukkhaṁ") find where the canon defines a term.

## Under the hood

**Our server.** `core/mcp-server.js` in the dg-node repository, mounted as `POST /mcp` in `dg-fastify.js`
(`GET` and `DELETE` answer 405: it is stateless, every request gets its own server object, no sessions).
`search` and `get_text` are thin wrappers over the functions behind `/search` and `/api/text`; `compare_translations`
and `list_structure` read `dg.db` directly (read-only). The tool descriptions and a short instruction for the agent
(search is literal, try Pali and translation words, quote with the translator and a link) are sent with the server.

The plan and open questions (ranking, a stdio mode for the offline app, a separate `mcp.` subdomain) are in
`docs/MCP_PLAN.md` of the repository.
