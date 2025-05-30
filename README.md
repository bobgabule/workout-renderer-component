# Workout Renderer Component - React + TailwindCSS

A responsive React app to render structured workouts using a clean UI. Built with Vite and TailwindCSS.

## Features

- Parses and displays segments like Warmup, Main Set, and Cool Down
- Responsive card layout (1 column on mobile, 3 on desktop)
- Reusable components for different block types:
  - Duration
  - Rest
  - Repeating sets

## Approach

1. **Data Driven** – The workout structure is fully dynamic, driven by a JSON file.
2. **Reusable Components** – Created modular components (`Workout`, `Segment`, and `Block`) to handle rendering.
3. **Responsiveness** – Used Tailwind grid utilities for mobile-first design.
4. **Maintainability** – Blocks are rendered based on their type (e.g., `duration_interval`, `rest`, `set`) using a clean switch structure.

## Stack

- React (via Vite)
- TailwindCSS
