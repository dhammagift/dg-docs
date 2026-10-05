---
title: MCP server for AI agents
---

# MCP server for AI agents

Dhamma.gift has an [MCP](https://modelcontextprotocol.io) server: an AI assistant (Claude, ChatGPT-style
clients, Cursor and others) can search the Pali Canon here, read suttas and compare translations on its
own, and answer with quotes and links to the reader. It uses the same search engine and the same texts
as the site.

**Address:** `https://dhamma.gift/mcp` (Streamable HTTP, no login, read-only).

## Tools

| Tool | What it does |
|---|---|
| `search` | Keyword / substring search over the Pali root text and the chosen translation languages. Returns suttas and matching segments with links to the reader. |
| `get_text` | A sutta by id (`mn1`, `dn22`, `sn56.11`) with the Pali and translations. |
| `compare_translations` | One segment (e.g. `mn129:21.3`) in the Pali and in every available translation side by side. |
| `list_structure` | What exists: collections, books with sutta counts, translation languages and translators; with a prefix (`mn`, `sn56`) the list of suttas under it. |

## Connecting

- **Claude (claude.ai / Desktop):** Settings → Connectors → Add custom connector → URL `https://dhamma.gift/mcp`.
- **Claude Code:** `claude mcp add --transport http dhamma-gift https://dhamma.gift/mcp`
- **Other clients:** add a remote (HTTP) MCP server with the same URL.

Then ask in plain words, for example: *"Find all suttas about the turtle, quote the Pali and the Russian translation with links."*

## How it behaves

- The search is literal: it matches letters, not meaning. For a topic the assistant tries the Pali and
  translation words itself (`kacchapa`, `kummo`, turtle, черепаха) and merges the results. At least
  3 letters per query; diacritics are ignored (`kacchap` finds `mahākacchapa`).
- Every answer carries reader links: `https://dhamma.gift/mn129` for the sutta, `https://dhamma.gift/mn129:21.3`
  for the exact segment.
- Machine translations (AI) are hidden, as in the search on the site.
- One query returns up to 40 suttas by default (`limit`, at most 200); the answer says when it was cut.
- Regular expressions are accepted only within the same limits as the site search; heavy ones are refused.

## Under the hood

**Our server.** `core/mcp-server.js` in the dg-node repository, mounted as `POST /mcp` in `dg-fastify.js`
(`GET` and `DELETE` answer 405: it is stateless, every request gets its own server object, no sessions).
`search` and `get_text` are thin wrappers over the functions behind `/search` and `/api/text`; `compare_translations`
and `list_structure` read `dg.db` directly (read-only). The tool descriptions and a short instruction for the agent
(search is literal, try Pali and translation words, quote with the translator and a link) are sent with the server.

**Our use of someone else's server.** The "AI search" on the site (`/api/ai-search`) asks a language model for the
Pali terms and an English phrase, then calls the hosted [Tripitaka MCP](https://tripitaka-mcp.com) tool `search_hybrid`
(`core/tipitaka-mcp-client.js`) to find passages by meaning. It holds Pali and Sujato's English only and is used as a
fallback: the plain exact search never depends on it. Candidates the corpus does not contain are dropped before they
reach it.

The plan and open questions (ranking, a stdio mode for the offline app, a separate `mcp.` subdomain) are in
`docs/MCP_PLAN.md` of the repository.
