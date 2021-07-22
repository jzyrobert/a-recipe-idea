# Multilingual, open source, shareable, recipe book.

### Who would it be for?
Multilingual families to store/share international recipes in an easy to create/view way across mobile and desktop

### Current problems with online recipe books:

* Lack of internationalization support (both for UI and recipes)
* Private use only
* Recipe forms are too simple or just a Markdown/text box
* Too limited on image inclusion (as a gallery or within the recipe)
* Limited to being mobile/desktop apps instead of a PWA (e.g. Paprika, Cookmate, CookBook)


### Specific features that would be helpful for internationalization:
* Alternative names, tooltips or images for ingredients which may only be known in the local language
* Support for a “generic” (no specific amounts?) ingredients warning as is common with passed down recipes.
  * Possibly ways for users to suggest amounts they liked?
* Automatic translation support or ways to write recipes in multiple languages or way for community translation.
  * A sort of git-like PR for recipes?
* Image or videos as part of instructions


### Other features that are useful:
* Be able to start multiple timers that persist across pages (e.g. Recipe 1 start a timer for 10 minute baking then move onto recipe 2)
* ?

### Design decisions:
Should it be a CRUD app? Should it be server-rendered or static as much as possible?

### Access:
* Should account creations be supported? Should it be invite only? A master password? Google-docs-esque edit links?
* Only allow access for the creator? Will other people bother to add recipes?
* Allow submission/edit requests?
* Are ratings/comments necessary?

### Hosting:
* Self hosted: Local server, docker container
  * Pros: Free
  * Cons: Requires technical knowledge
* Online hosted: Firebase, heroku?
  * Pros: Can be free, simple
  * Cons: Reliance on a company
* Statically hosted: E.g. Github pages, netlify
  * Pros: No need for a server, everything can be cached
  * Cons: Updating recipes may be difficult, require editing a git repo?

### Storage:
* Using SQL: Standard DB model, can get quite complex with fields though. High performance, but is that necessary?
* Using NoSQL (e.g. JSON format in MongoDB): can be more customisable or quicker to develop
* Using files: Each recipe becomes a standardised format (e.g. JSON or MD). Can grow quickly but provides easy access/backup and static hosting

### Frontend:
* React (+ Next.js?)
* Vue (+ Nuxt or Vite)
* Elm? (Looks like Haskell)
