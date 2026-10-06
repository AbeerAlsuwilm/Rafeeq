# Embedding Specification — مشروع مرجع رفيق

## 1. Model
- Embedding Model: `intfloat/multilingual-e5-base`
- Provider: `Hugging Face`
- Embedding Dimension: `768`

## 2. Embedding Methods
A) `Hugging Face` Inference API
- HTTP Method: POST
- Endpoint: https://router.huggingface.co/hf-inference/models/`intfloat/multilingual-e5-base`
- Authentication: `HUGGING_FACE_TOKEN`
- Content-Type: application/json
- Request: { "inputs": "`query:` <USER_QUESTION>", "normalize": true }

B) `Hugging Face` InferenceClient
- Package: @huggingface/inference
- Client: InferenceClient
- Method: featureExtraction()
- Model: `intfloat/multilingual-e5-base`
- Input: `query:` <USER_QUESTION>
- `normalize: true`

## 3. E5 Prefixes
- Stored/database data: `passage:` <TEXT>
- User questions: `query:` <QUESTION>

## 4. Normalization
- `normalize: true`

## 5. Vector Size
- Every embedding must contain `768` values.
- The Edge Function validates queryEmbedding.length === `768`.

## 6. Hadith Embeddings
Fields used:
- title
- hadith_text
- explanation
- word_meanings
- benefits

These fields were combined into text and converted into an embedding.
Database vector column: `hadiths.embedding_e5`
Hadith records embedded: 3582
Embedding dimensions: `768`
Matrix shape: (3582, `768`)

7. FATWA EMBEDDINGS / SEARCH
- RPC: `match_test_fatwas_e5`
- query_embedding
- `match_threshold: 0.3`
- `match_count: 5`

## 8. Hadith Semantic Search
- RPC: `match_hadiths`
- query_embedding
- `match_count: 5`

## 9. Similarity Search
Results include a similarity value.
- Fatwa threshold: 0.3
- Fatwa results: up to 5
- Hadith results: up to 5

## 10. Complete Pipeline
DATABASE DOCUMENTS:
Raw data → Combine relevant text fields → `passage:` → multilingual-e5-base → normalize → `768`-dimensional vector → Store in `Supabase`

USER QUESTION:
User question → `query:` → multilingual-e5-base → normalize → `768`-dimensional vector → `Supabase` RPC → Similarity Search → Top results → Context → Claude → Final Arabic Answer

## 11. Embedding Response Handling
`Hugging Face` may return:
- [[vector values...]]
- [vector values...]

The code checks `Array.isArray()` and extracts the vector, then validates that its length is `768`.

## 12. Environment Variables
- `HUGGING_FACE_TOKEN`
- `ANTHROPIC_API_KEY`

Never upload the actual secret values to GitHub.

## 13. Security
Never commit:
- `HUGGING_FACE_TOKEN` value
- `ANTHROPIC_API_KEY` value
- SUPABASE_SERVICE_ROLE_KEY value
- SUPABASE_SECRET_KEY value

Only document the variable names.

## 14. Technologies
- Python
- `Sentence Transformers`
- `Hugging Face`
- `intfloat/multilingual-e5-base`
- `Supabase`
- `PostgreSQL`
- `pgvector`
- `Supabase` RPC
- `TypeScript`
- `Deno`
- `Supabase` Edge Functions

## 15. Configuration Summary
Model: `intfloat/multilingual-e5-base`
Dimension: `768`
Document Prefix: `passage:`
Query Prefix: `query:`
Normalization: true
Hadith Vector Column: `hadiths.embedding_e5`
Hadith Records: 3582
Fatwa RPC: `match_test_fatwas_e5`
Hadith RPC: `match_hadiths`
Fatwa Threshold: 0.3
Fatwa Results: 5
Hadith Results: 5

## 16. Reproducibility Checklist
- Same model: `intfloat/multilingual-e5-base`
- Same dimension: `768`
- Use `passage:` for stored documents
- Use `query:` for user questions
- Keep normalization enabled
- Keep vector dimensions identical
- Use the correct `Supabase` RPC
- Do not expose API keys
- Store embeddings in the correct `pgvector` column

## 17. One-Line Project Flow
Arabic Data → passage Embedding → `768`D Vector → `Supabase`/`pgvector` → Query Embedding → Similarity Search → Top Results → Claude → Arabic Answer

## 18. Important Note
This document records the Embedding methods and configurations that were present in the project code/files. Exact SQL definitions of the RPC functions and exact `pgvector` index configuration are not included unless explicitly available in the project materials.
