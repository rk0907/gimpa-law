# Contract Law Quiz — Consideration & Privity

Modern, clean quiz web app inspired by the Build_it design language (white space, blue accents, rounded cards, professional typography).

## Features

- **Practice Mode** — immediate feedback + explanation after every question
- **Exam Mode** — answer all questions, then see score and review
- Choose 20 / 40 / 60 / 100 / all available questions
- Progress bar, live score (practice), detailed review
- Fully responsive
- 80 high-quality GIMPA-style questions covering:
  - Definition, adequacy vs sufficiency
  - Past consideration + exceptions
  - Forbearance
  - Pre-existing duties + **s.9**
  - Part payment / Foakes + **s.8(2)**
  - Firm offers + **s.8(1)**
  - Consideration need not move from promisee + **s.10**
  - Privity + **s.5(1)–(2)**
  - Scenario application questions

## How to run

Simply open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

No build step, no server required.

```bash
# Or serve locally if you prefer
npx serve .
# or
python3 -m http.server 8000
```

## Files

| File          | Purpose                          |
|---------------|----------------------------------|
| `index.html`  | Structure + structure              |
| `styles.css`  | Build_it-inspired design system  |
| `questions.js`| Question bank + explanations     |
| `app.js`      | Quiz logic (practice & exam)     |

## Expanding the bank

Add more objects to the `QUESTION_BANK` array in `questions.js`.  
Each question needs:

```js
{
  id: 81,
  text: "Your question text…",
  type: "mcq" | "tf" | "yn",
  options: ["A…", "B…", …],
  answer: 0,               // 0-based index of correct option
  explanation: "Why this is correct…"
}
```

## Source material

- *The Law of Contract in Ghana* — Christine Dowuona-Hammond
- Contracts Act, 1960 (Act 25) — especially sections 5, 8, 9 & 10
- GIMPA past-question style (True/False, A–E, scenario application)

---

For educational use only.
