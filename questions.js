/**
 * Consideration & Privity of Contract — Question Bank
 * GIMPA-style logical application questions
 * Based on Dowuona-Hammond + Contracts Act 1960 (Act 25)
 */

const QUESTION_BANK = [
  // ===== DEFINITION & NATURE =====
  {
    id: 1,
    text: "Consideration is an essential element of a valid simple contract under Ghanaian law.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Yes. Consideration remains an essential element of simple contracts. Only contracts under seal (deeds) are enforceable without it."
  },
  {
    id: 2,
    text: "A promise made by deed does not require consideration to be enforceable.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct. Deeds (specialty contracts) are enforceable without consideration."
  },
  {
    id: 3,
    text: "The classical definition of consideration as “some right, interest, profit or benefit accruing to the one party, or some forbearance, detriment, loss or responsibility given, suffered or undertaken by the other” is found in:",
    type: "mcq",
    options: [
      "Dunlop Pneumatic Tyre Co Ltd v Selfridge & Co Ltd",
      "Currie v Misa",
      "Tweddle v Atkinson",
      "Foakes v Beer",
      "Stilk v Myrick"
    ],
    answer: 1,
    explanation: "Currie v Misa is the classic source of the benefit/detriment definition."
  },
  {
    id: 4,
    text: "Pollock’s definition of consideration (approved in Dunlop v Selfridge) is:",
    type: "mcq",
    options: [
      "A benefit to the promisor or a detriment to the promisee",
      "An act or forbearance of one party, or the promise thereof, which is the price for which the promise of the other is bought",
      "Anything of value in the eye of the law",
      "Past performance of an act at the request of the promisor",
      "None of the above"
    ],
    answer: 1,
    explanation: "Pollock’s “price of the promise” definition was adopted by the House of Lords in Dunlop v Selfridge."
  },
  {
    id: 5,
    text: "Consideration need not be adequate but it must be sufficient.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Classic rule: courts do not inquire into adequacy, but the consideration must be recognised by law as sufficient."
  },
  {
    id: 6,
    text: "The courts will generally inquire into the adequacy of consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Courts leave adequacy to the parties (Bolton v Madden)."
  },
  {
    id: 7,
    text: "In Chappell & Co Ltd v Nestlé Co Ltd the House of Lords held that the chocolate wrappers formed part of the consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct. The wrappers were held to be part of the consideration even though of trivial value."
  },
  {
    id: 8,
    text: "Which of the following is correct?",
    type: "mcq",
    options: [
      "Consideration must be adequate and sufficient",
      "Consideration must be adequate but need not be sufficient",
      "Consideration need not be adequate but must be sufficient",
      "Consideration need be neither adequate nor sufficient",
      "None of the above"
    ],
    answer: 2,
    explanation: "Adequacy is irrelevant; sufficiency is required."
  },

  // ===== PAST CONSIDERATION =====
  {
    id: 9,
    text: "Past consideration is generally not good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "General rule: past consideration is not good consideration (Roscorla v Thomas, Eastwood v Kenyon)."
  },
  {
    id: 10,
    text: "In Roscorla v Thomas the warranty given after the sale of the horse was held to be supported by good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. The warranty was past consideration and unenforceable."
  },
  {
    id: 11,
    text: "An act done before a promise is made can still constitute good consideration if:",
    type: "mcq",
    options: [
      "The act was done at the express request of the promisor",
      "The parties understood at the time that the act would be remunerated",
      "Both A and B",
      "Neither A nor B",
      "Only if the promise is in writing"
    ],
    answer: 2,
    explanation: "Both the request and the understanding of future remuneration are required (Lampleigh, Pao On)."
  },
  {
    id: 12,
    text: "The case that established the exception for acts done at the request of the promisor is:",
    type: "mcq",
    options: [
      "Re McArdle",
      "Lampleigh v Brathwaite",
      "Pao On v Lau Yiu Long",
      "Re Casey’s Patents",
      "Both B and D"
    ],
    answer: 4,
    explanation: "Both Lampleigh v Brathwaite and Re Casey’s Patents are key authorities."
  },

  // ===== FORBEARANCE =====
  {
    id: 13,
    text: "Forbearance to sue on a bona fide claim can constitute good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "True. Forbearance of a genuine claim is good consideration."
  },
  {
    id: 14,
    text: "In Hamer v Sidway the nephew’s forbearance from drinking, smoking and gambling was held to be good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct. Restriction of lawful freedom of action is sufficient."
  },
  {
    id: 15,
    text: "In White v Bluett the son’s promise to stop complaining about the distribution of his father’s estate was held to be good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. The son had no legal right to complain, so the forbearance was of no value."
  },
  {
    id: 16,
    text: "Abstaining from doing what one has no legal right to do does not amount to consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct — illustrated by White v Bluett."
  },

  // ===== PRE-EXISTING DUTIES & s.9 =====
  {
    id: 17,
    text: "At common law, performance of a pre-existing contractual duty owed to the other party is not good consideration (Stilk v Myrick).",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "True. Classic common-law rule."
  },
  {
    id: 18,
    text: "Section 9 of the Contracts Act, 1960 (Act 25) provides that the performance of an act or the promise to perform an act may be sufficient consideration for another promise notwithstanding that the performance of that act may already be enjoined by some legal duty.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Exact effect of s.9."
  },
  {
    id: 19,
    text: "Under Ghanaian law, performance of a pre-existing public duty can constitute good consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "s.9 covers public duties as well as contractual ones."
  },
  {
    id: 20,
    text: "In Kessie v Charmant the court held that the Ambassador’s performance of his official duties could not amount to consideration under section 9.",
    type: "tf",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. The court accepted that s.9 made it consideration, but held the contract unenforceable on public-policy grounds."
  },
  {
    id: 21,
    text: "Even where section 9 makes performance of a pre-existing duty good consideration, the contract may still be unenforceable on grounds of public policy.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Key residual control after the statutory reform (Kessie v Charmant)."
  },
  {
    id: 22,
    text: "Section 9 of Act 25 applies to:",
    type: "mcq",
    options: [
      "Pre-existing public duties only",
      "Pre-existing contractual duties owed to the same party only",
      "Pre-existing contractual duties owed to a third party only",
      "All of the above",
      "None of the above"
    ],
    answer: 3,
    explanation: "s.9 is broadly drafted and covers all these categories."
  },
  {
    id: 23,
    text: "Which of the following statements is incorrect?",
    type: "mcq",
    options: [
      "Performance of existing duties can never amount to good consideration",
      "Where the existing duties are exceeded, this may amount to good consideration",
      "Under section 9 performance of a pre-existing duty may be good consideration",
      "Public policy may still render the contract unenforceable",
      "None of the above"
    ],
    answer: 0,
    explanation: "Statement A is incorrect because of s.9 (and the common-law third-party duty rule)."
  },

  // ===== PART PAYMENT & s.8(2) =====
  {
    id: 24,
    text: "At common law, part payment of a debt is not good consideration for a promise to forgo the balance (Pinnel’s Case / Foakes v Beer).",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Classic rule."
  },
  {
    id: 25,
    text: "Section 8(2) of Act 25 provides that a promise to waive the payment of a debt or part of a debt, or to extend the time for such payment, shall not be invalid as a contract by reason only of the absence of any consideration therefor.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct statement of s.8(2)."
  },
  {
    id: 26,
    text: "The common-law rule in Foakes v Beer has been abolished in Ghana by section 8(2) of Act 25.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Yes — s.8(2) removes the need for fresh consideration for waivers of debt."
  },
  {
    id: 27,
    text: "Under Ghanaian law a promise to accept a lesser sum in full settlement of a debt is binding even without fresh consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Direct effect of s.8(2)."
  },

  // ===== FIRM OFFERS & s.8(1) =====
  {
    id: 28,
    text: "At common law a promise to keep an offer open for a specified time is not binding unless supported by consideration.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "True — the classic position."
  },
  {
    id: 29,
    text: "Section 8(1) of Act 25 provides that a promise to keep an offer open for acceptance for a specified time shall not be invalid as a contract by reason only of the absence of any consideration therefor.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct."
  },
  {
    id: 30,
    text: "Under Ghanaian law a promise to keep an offer open is binding on the offeror even though no consideration is provided by the offeree.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Yes — s.8(1)."
  },

  // ===== s.10 =====
  {
    id: 31,
    text: "At common law consideration must move from the promisee.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Classic rule (linked to but distinct from privity)."
  },
  {
    id: 32,
    text: "Section 10 of Act 25 provides that no promise shall be invalid as a contract by reason only that the consideration therefor is supplied by someone other than the promisee.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Exact wording and effect of s.10."
  },
  {
    id: 33,
    text: "Under Ghanaian law a person in whose favour a promise is made may enforce the promise even if the consideration was provided by a third party.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Yes — s.10."
  },
  {
    id: 34,
    text: "The general rule at common law is that consideration must move from the promisee. This means that:",
    type: "mcq",
    options: [
      "Parties to an existing contract must enter into a new contract",
      "A person in whose favour a promise is made can only enforce such a promise if he provided the consideration for it himself or herself",
      "A person can sue a promisee if someone else provides consideration",
      "Consideration must always be adequate",
      "None of the above"
    ],
    answer: 1,
    explanation: "Classic formulation of the rule."
  },

  // ===== PRIVITY =====
  {
    id: 35,
    text: "At common law only a party to a contract can sue on it.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Doctrine of privity."
  },
  {
    id: 36,
    text: "The classic authorities for the common-law doctrine of privity are:",
    type: "mcq",
    options: [
      "Tweddle v Atkinson",
      "Dunlop Pneumatic Tyre Co Ltd v Selfridge & Co Ltd",
      "Both A and B",
      "Neither",
      "Beswick v Beswick"
    ],
    answer: 2,
    explanation: "Both cases are foundational."
  },
  {
    id: 37,
    text: "In Tweddle v Atkinson the plaintiff could not sue because:",
    type: "mcq",
    options: [
      "There was no consideration moving from him",
      "He was not a party to the contract",
      "Both A and B",
      "The contract was illegal",
      "None of the above"
    ],
    answer: 2,
    explanation: "Both the privity and consideration-must-move rules were applied."
  },
  {
    id: 38,
    text: "Section 5(1) of the Contracts Act, 1960 (Act 25) provides that any provision in a contract which purports to confer a benefit on a person who is not a party to the contract may be enforced by that person as though he were a party to the contract.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct statement of s.5(1)."
  },
  {
    id: 39,
    text: "Section 5(1) applies to incidental beneficiaries as well as intended beneficiaries.",
    type: "tf",
    options: ["True", "False"],
    answer: 1,
    explanation: "False. Only intended beneficiaries (those on whom the contract purports to confer a benefit) can sue."
  },
  {
    id: 40,
    text: "For a third party to enforce under section 5(1) the contract must purport to confer a benefit on that person (either as a designated person or as a member of a class).",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct requirement."
  },
  {
    id: 41,
    text: "Section 5(2)(a) of Act 25 excludes from the operation of section 5(1) provisions designed for the purpose of resale price maintenance.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Yes — this preserves the common-law result in Dunlop v Selfridge type cases."
  },
  {
    id: 42,
    text: "Section 5(2)(b) of Act 25 excludes provisions purporting to exclude or restrict the liability of a person who is not a party to the contract.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct — protects against third-party reliance on exclusion clauses."
  },
  {
    id: 43,
    text: "A third party who is an incidental beneficiary cannot sue under section 5(1).",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Only intended beneficiaries can enforce."
  },
  {
    id: 44,
    text: "The abolition of the privity rule by section 5(1) necessitated a correlative change in the rule that consideration must move from the promisee. This change is effected by section 10.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct — the two reforms work together."
  },

  // ===== SCENARIOS =====
  {
    id: 45,
    text: "A offers to sell his car to B for GH¢30,000 and says “this offer is open for one week.” B does not reply. On the fifth day A sells the car to C. B now wishes to sue A for breach of the promise to keep the offer open. Is there a binding contract under Ghanaian law?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — s.8(1) makes the firm-offer promise binding even without consideration from B (provided the promise itself is accepted)."
  },
  {
    id: 46,
    text: "X owes Y GH¢5,000. Y agrees to accept GH¢3,000 in full settlement. X pays the GH¢3,000. Y later sues for the balance. Can Y succeed under Ghanaian law?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — s.8(2) makes the waiver binding."
  },
  {
    id: 47,
    text: "A builder under a fixed-price contract demands an extra GH¢15,000 to complete on time. The employer, facing liquidated damages, agrees. The builder completes and sues for the extra sum. Assuming no duress or fraud, is the promise enforceable under section 9 of Act 25?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — s.9 makes performance of the pre-existing duty good consideration (subject to absence of duress)."
  },
  {
    id: 48,
    text: "An Ambassador uses his official position to assist a company and is promised 5% shares in return. The company later refuses to transfer the shares. Is the promise enforceable?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — even though s.9 makes the performance consideration, public policy (Kessie v Charmant) renders the contract unenforceable."
  },
  {
    id: 49,
    text: "H and W marry. Their fathers X and Y agree that each will pay H GH¢20,000. X dies without paying. Can H sue Y’s estate under Ghanaian law?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — s.5(1) (third-party benefit) and/or s.10."
  },
  {
    id: 50,
    text: "Manufacturer M sells to wholesaler W under a contract requiring W to obtain from retailers an undertaking not to sell below a fixed price and to pay M GH¢100 for each breach. Retailer R sells below the price. Can M sue R under section 5(1)?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — s.5(2)(a) excludes resale-price-maintenance provisions."
  },
  {
    id: 51,
    text: "A contract of carriage contains a clause excluding liability of the carrier “and its servants and agents.” A stevedore (independent contractor) negligently damages the goods and seeks to rely on the clause. Can the stevedore succeed under Act 25?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — s.5(2)(b) excludes provisions that purport to exclude liability of non-parties."
  },
  {
    id: 52,
    text: "A sells a horse to B. After the sale A warrants that the horse is sound. Is the warranty supported by good consideration?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — past consideration (Roscorla v Thomas)."
  },
  {
    id: 53,
    text: "Uncle promises nephew GH¢50,000 if the nephew refrains from drinking and smoking until he is 21. Nephew complies. Is the promise enforceable?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — forbearance of lawful freedom of action (Hamer v Sidway)."
  },
  {
    id: 54,
    text: "Father promises son that if the son stops complaining about the will, the father will not enforce a promissory note. Is there good consideration?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — White v Bluett: the son had no legal right to complain."
  },
  {
    id: 55,
    text: "Creditor agrees to accept GH¢4,000 in full settlement of a GH¢10,000 debt if paid one month early. Debtor pays early. Can the creditor later claim the balance under Ghanaian law?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — s.8(2) makes the waiver binding."
  },
  {
    id: 56,
    text: "A third party is named in a contract of life insurance as the beneficiary. Can the third party sue the insurer under section 5(1)?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — provided the policy purports to confer a benefit on that person."
  },
  {
    id: 57,
    text: "A contract between A and B contains a clause that “neither A nor B nor their servants or agents shall be liable for negligence.” C (a servant of A) is sued for negligence by B. Can C rely on the clause under Act 25?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "No — s.5(2)(b)."
  },
  {
    id: 58,
    text: "X and Y agree that X will pay Z GH¢10,000. Z provides no consideration. Can Z enforce the promise under section 5(1) and section 10?",
    type: "yn",
    options: ["Yes", "No"],
    answer: 0,
    explanation: "Yes — s.5(1) gives the right of action; s.10 removes the consideration-must-move objection."
  },

  // ===== MORE KEY POINTS =====
  {
    id: 59,
    text: "Which of the following is not a reform introduced by Act 25?",
    type: "mcq",
    options: [
      "Firm offers need no consideration (s.8(1))",
      "Waiver of debt needs no consideration (s.8(2))",
      "Performance of pre-existing duty may be good consideration (s.9)",
      "Consideration need not move from the promisee (s.10)",
      "Adequacy of consideration is now required"
    ],
    answer: 4,
    explanation: "Adequacy was never required and Act 25 did not introduce such a requirement."
  },
  {
    id: 60,
    text: "Which of the following statements is correct under Ghanaian law?",
    type: "mcq",
    options: [
      "Past consideration is always good consideration",
      "Part payment of a debt is never good consideration",
      "A firm offer is binding even without consideration",
      "A third party can never enforce a contract",
      "Consideration must always move from the promisee"
    ],
    answer: 2,
    explanation: "s.8(1) makes firm offers binding without consideration."
  },
  {
    id: 61,
    text: "Economic duress may still render a modification agreement unenforceable even after section 9.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "True — residual control after the statutory reform."
  },
  {
    id: 62,
    text: "Public policy remains a residual ground for refusing enforcement of contracts involving pre-existing public duties.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Confirmed by Kessie v Charmant."
  },
  {
    id: 63,
    text: "In Ghana the doctrine of promissory estoppel is rarely resorted to because of the comprehensive statutory reforms on modification of contracts.",
    type: "tf",
    options: ["True", "False"],
    answer: 0,
    explanation: "Correct — ss.8 and 9 cover most modification situations."
  },
  {
    id: 64,
    text: "Which of the following best describes the effect of section 9 of Act 25?",
    type: "mcq",
    options: [
      "It completely abolishes the doctrine of consideration",
      "It makes performance of a pre-existing duty good consideration subject to public policy and absence of duress",
      "It only applies to public duties",
      "It restores the rule in Stilk v Myrick",
      "None of the above"
    ],
    answer: 1,
    explanation: "Accurate summary of s.9’s effect and residual controls."
  },
  {
    id: 65,
    text: "Which of the following is the correct position under Ghanaian law regarding part payment of a debt?",
    type: "mcq",
    options: [
      "Part payment is never good consideration",
      "Part payment is good consideration only if made early",
      "A promise to accept part payment in full settlement is binding without fresh consideration (s.8(2))",
      "The rule in Foakes v Beer still applies in full",
      "None of the above"
    ],
    answer: 2,
    explanation: "s.8(2) is the key reform."
  },
  {
    id: 66,
    text: "Which of the following statements about section 5(1) is correct?",
    type: "mcq",
    options: [
      "It allows any third party to sue on any contract",
      "It applies only to contracts under seal",
      "It allows a person on whom a benefit is conferred to enforce the provision as if he were a party",
      "It abolishes all common-law exceptions to privity",
      "None of the above"
    ],
    answer: 2,
    explanation: "Precise effect of s.5(1)."
  },
  {
    id: 67,
    text: "The decision in Kessie v Charmant demonstrates that:",
    type: "mcq",
    options: [
      "Section 9 does not apply to public officials",
      "Public policy may still defeat a contract even where section 9 makes the consideration good",
      "Ambassadors cannot enter into any contracts",
      "Consideration is still required for all contracts",
      "None of the above"
    ],
    answer: 1,
    explanation: "Key takeaway from the case."
  },
  {
    id: 68,
    text: "A promise to accept a smaller sum in satisfaction of a larger debt is binding in Ghana by virtue of:",
    type: "mcq",
    options: [
      "Section 5(1)",
      "Section 8(1)",
      "Section 8(2)",
      "Section 9",
      "Section 10"
    ],
    answer: 2,
    explanation: "s.8(2)."
  },
  {
    id: 69,
    text: "A firm offer is binding in Ghana by virtue of:",
    type: "mcq",
    options: [
      "Section 5(1)",
      "Section 8(1)",
      "Section 8(2)",
      "Section 9",
      "Section 10"
    ],
    answer: 1,
    explanation: "s.8(1)."
  },
  {
    id: 70,
    text: "Performance of a pre-existing duty may be good consideration by virtue of:",
    type: "mcq",
    options: [
      "Section 5(1)",
      "Section 8(1)",
      "Section 8(2)",
      "Section 9",
      "Section 10"
    ],
    answer: 3,
    explanation: "s.9."
  },
  {
    id: 71,
    text: "Consideration need not move from the promisee by virtue of:",
    type: "mcq",
    options: [
      "Section 5(1)",
      "Section 8(1)",
      "Section 8(2)",
      "Section 9",
      "Section 10"
    ],
    answer: 4,
    explanation: "s.10."
  },
  {
    id: 72,
    text: "A third party may enforce a benefit conferred by a contract by virtue of:",
    type: "mcq",
    options: [
      "Section 5(1)",
      "Section 8(1)",
      "Section 8(2)",
      "Section 9",
      "Section 10"
    ],
    answer: 0,
    explanation: "s.5(1)."
  },
  {
    id: 73,
    text: "Resale price maintenance clauses are excluded from section 5(1) by:",
    type: "mcq",
    options: [
      "Section 5(2)(a)",
      "Section 5(2)(b)",
      "Section 8(1)",
      "Section 9",
      "Section 10"
    ],
    answer: 0,
    explanation: "s.5(2)(a)."
  },
  {
    id: 74,
    text: "Exclusion clauses protecting non-parties are excluded from section 5(1) by:",
    type: "mcq",
    options: [
      "Section 5(2)(a)",
      "Section 5(2)(b)",
      "Section 8(1)",
      "Section 9",
      "Section 10"
    ],
    answer: 1,
    explanation: "s.5(2)(b)."
  },
  {
    id: 75,
    text: "The best single statement of the current Ghanaian position is:",
    type: "mcq",
    options: [
      "Consideration is dead",
      "Consideration remains an essential element of simple contracts, but several of its rigid common-law rules have been reformed by Act 25, subject to residual controls of public policy and duress",
      "Only the doctrine of privity survives",
      "Promissory estoppel has replaced consideration",
      "None of the above"
    ],
    answer: 1,
    explanation: "Accurate overall summary."
  },
  {
    id: 76,
    text: "A student preparing for a GIMPA-style examination on Consideration and Privity should primarily focus on:",
    type: "mcq",
    options: [
      "Memorising the English cases without reference to Act 25",
      "Understanding the precise effect of sections 5, 8, 9 and 10 and being able to apply them to short factual scenarios",
      "Ignoring public policy and duress",
      "Treating all third parties as able to sue",
      "None of the above"
    ],
    answer: 1,
    explanation: "This is exactly what the examiners test."
  },
  {
    id: 77,
    text: "Under Ghanaian law the plaintiff in Tweddle v Atkinson would most likely:",
    type: "mcq",
    options: [
      "Still fail",
      "Succeed under section 5(1) and section 10",
      "Succeed only under promissory estoppel",
      "Succeed only if the agreement was by deed",
      "None of the above"
    ],
    answer: 1,
    explanation: "s.5(1) + s.10 would allow the intended beneficiary to sue."
  },
  {
    id: 78,
    text: "In Ghana a promise to keep an offer open for a specified period is:",
    type: "mcq",
    options: [
      "Never binding",
      "Binding only if supported by consideration",
      "Binding even without consideration (s.8(1))",
      "Binding only if made by deed",
      "None of the above"
    ],
    answer: 2,
    explanation: "s.8(1)."
  },
  {
    id: 79,
    text: "Which of the following remains a valid objection to enforcement even after the reforms in Act 25?",
    type: "mcq",
    options: [
      "Lack of consideration for a firm offer",
      "Lack of consideration for a waiver of debt",
      "Public policy / economic duress in a modification agreement",
      "The fact that consideration moved from a third party",
      "None of the above"
    ],
    answer: 2,
    explanation: "Residual controls remain important."
  },
  {
    id: 80,
    text: "A third-party intended beneficiary under section 5(1):",
    type: "mcq",
    options: [
      "Must have provided consideration",
      "Need not have provided consideration (supported by s.10)",
      "Must be a party to the contract",
      "Can only sue if the contract is under seal",
      "None of the above"
    ],
    answer: 1,
    explanation: "s.5(1) + s.10 work together."
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
