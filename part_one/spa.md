```mermaid
sequenceDiagram
    participant Alice as Client
    participant Bob as Server

    Alice->>Bob: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Bob-->>Alice: 201 Created\nAutoupdates browser client (due to content-type header)
