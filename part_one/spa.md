sequenceDiagram
  actor Alice as Client
  actor Bob as Server

  Alice ->> Bob: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Bob ->> Alice: Server responds with 201 created and autoupdates browser client because of the content type passed in the header of the request



