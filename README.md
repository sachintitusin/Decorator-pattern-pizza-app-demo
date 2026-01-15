# 🍕 Welcome to Pizza POS!  

> A fun, hands-on **Decorator Pattern** demo for students who learn best by building things.

---

## 👋 Hello Student!

Welcome to **Pizza POS** — a tiny point-of-sale frontend where you don’t just order pizza…  
you **decorate** it 😄

This project is built to help you **understand and practice the Decorator Pattern** in a way that feels real, visual, and memorable — not abstract or textbook-y.

---

## 🧠 What is the Decorator Pattern? (In simple words)

The **Decorator Pattern** lets you:

- Take an existing object
- Wrap it with extra behavior
- Do this **dynamically**, at runtime
- Without modifying the original object
- Without creating tons of subclasses

💡 Think of it like this:

> You start with a plain pizza 🍕  
> Then you *wrap* it with cheese, olives, pepperoni…  
> Each topping adds **new behavior** (price + description)  
> But the base pizza never changes.

That’s **Decorator Pattern**.

---

## 🛠️ What this project does

This project simulates a **basic POS system**:

- Create a **base pizza**
- Add toppings using buttons
- Each topping is implemented as a **decorator**
- The final price and description update automatically
- Checkout button shows total (no backend, on purpose)

No dummy features.  
No unnecessary complexity.  
Just clean design + clean patterns.

---

## 🧩 How Decorator is used here

- `PlainPizza` → base object
- `CheeseDecoratedPizza`, `OliveDecoratedPizza`, `PepperoniDecoratedPizza` → decorators
- Each decorator:
  - Wraps another `Pizza`
  - Adds cost
  - Enhances description
- Toppings can be stacked in **any order**

This mirrors **real-world pricing engines**, POS systems, and middleware design.

---

## 🚀 Tech Stack

- ⚡ Vite
- 🟦 TypeScript
- 🎨 Simple CSS (POS-style)
- ❌ No backend (focus is patterns)

---

## 🎯 Who is this for?

- Students learning **Design Patterns**
- Developers confused by “Decorator vs Builder”
- Anyone who wants to see patterns applied **visually**
- People tired of abstract examples 😄

---

## 🧪 Suggested experiments

Try extending this project:

- Add a new topping decorator
- Prevent duplicate toppings
- Add tax or service charge as a decorator
- Add a “remove last topping” feature
- Convert this into a React app

---

## 🍕 Final thought

If you understand this project,  
you understand **Decorator Pattern in the real world** — not just on paper.

Happy decorating! 🚀🍕
