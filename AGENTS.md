# Repository agent guidance

## Graphify knowledge graph

Use the existing Graphify graph as the starting point for questions about this
repository's architecture, dependencies, symbols, and relationships. Run commands
from the repository root. Check that `graphify-out/graph.json` exists before using
it; an ordinary question does not require a rebuild.

### Reference files

- `graphify-out/graph.json`: queryable nodes, edges, confidence tags, and source locations.
- `graphify-out/GRAPH_REPORT.md`: community names, connected symbols, and suggested questions.
- `graphify-out/graph.html`: interactive graph; opens without a server.
- `graphify-out/GRAPH_HEALTH.txt`: extraction integrity diagnostics.
- `graphify-out/manifest.json`: file state recorded for incremental updates.

### Query commands

```sh
# Broad context; choose keywords that occur in the graph's node labels.
graphify query "authOptions prisma handler" --budget 2000

# Trace dependencies with depth-first traversal.
graphify query "authOptions prisma handler" --dfs --budget 3000

# Inspect a named node or find a path between nodes.
graphify explain "PageLink"
graphify path "ProjectCardProps" "ProjectData"

# Find symbols potentially affected by a change.
graphify affected "PageLink" --depth 2
```

Before querying, inspect relevant node labels in `graph.json` and select matching
keywords. Graphify uses literal matching without stemming or synonyms. If a query
has no useful matches, inspect the source with `rg` and file reads.

Use `source_file` and `source_location` from results to locate and verify the
current implementation before editing code or making specific behavior claims.
Distinguish `EXTRACTED`, `INFERRED`, and `AMBIGUOUS` relationships. The graph is
undirected; use edge `_src` and `_tgt` attributes to recover original direction.

### Freshness and limitations

- Source files are authoritative. The graph may be stale after code changes.
- The initial graph has 131 unresolved raw edge endpoints and one collapsed
  same-endpoint edge. Consult the health report for current diagnostics. A missing
  graph edge or path does not prove that no relationship exists in the code.
- Image assets include decorative logos; their presence alone does not establish
  employment or partnership relationships.
- Exact semantic token usage was unavailable for the initial build. Zero values
  in `cost.json` are placeholders, not measured usage.

After code changes, refresh code extraction when needed with `graphify update .`.
To rebuild the full corpus, including changed documents and images, invoke the
`/graphify .` skill in the agent chat; this is a skill invocation, not a shell
command. Generate the interactive view with `graphify export html` after updates.
Do not install hooks or global integrations as part of ordinary queries.

If `graphify` is unavailable, read the JSON and report directly, then inspect the
source. `graphify-out/.graphify_python` records the original Python interpreter,
but its machine-specific path must be checked before reuse on another machine.
