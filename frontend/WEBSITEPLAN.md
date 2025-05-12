## Marvel Character Website - Frontend Plan

### Pages
- HomePage: Intro text and links
- CharactersPage: Shows all characters in Card layout
- CharacterDetail: Shows full details of one character
- CreateCharacter: Form with required fields
- EditCharacter: Pre-filled form
- NotFoundPage: 404 fallback

### Components
- Navbar (responsive)
- CharacterCard
- CharacterForm
- Alerts (for success/errors)

### Routing (React Router)
- `/` → HomePage
- `/characters` → All characters
- `/characters/:id` → One character
- `/create` → Form
- `/edit/:id` → Edit form
