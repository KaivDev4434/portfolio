---
title: "How Flow Garden Beat Browser Tab Throttling to Deliver Reliable Focus Timers"
slug: flow-garden-beats-browser-tab-throttling-reliable-focus-timers
excerpt: "Discover how Flow Garden uses Web Workers, persistent timers, and smart recovery logic to overcome browser tab throttling and keep Pomodoro timers accurate—even when the app is running in the background."
coverImage: /images/blogs/web-worker.jpg
date: '2025-09-01'
tags:
  - blog
  - project
  - productivity
  - project/flowgarden
  - web-developement
  - javascript
  - web-workers
  - timer
  - browser-throttling
  - react
  - performance
  - frontend
  - web-applications
  - pomodoro
---
## Growing Flow Garden
Flow Garden is a lightweight, plant‑themed Pomodoro timer built to make deep work feel rewarding rather than punitive, and it runs entirely in the browser for a zero‑install experience.  
While developing the timer the biggest challenge wasn’t the UI or sound design—it was ensuring the countdown stayed trustworthy when the tab wasn’t in the foreground.

## The Problem: Tab Throttling
Modern browsers aggressively throttle JavaScript in background tabs to save CPU and battery, which batches or slows timers like setInterval and setTimeout after a page is hidden for a while.
In practice a simple 25‑minute countdown can drift by seconds or even minutes when a user checks email or opens another window, which breaks confidence in any productivity tool that must be **accurate**.

## Why Web Workers
Web Workers execute code off the main thread with their own event loop and message queue, and they’re far less affected by the throttling that impacts the page’s main thread timers.  
Instead of relying on UI‑thread intervals, Flow Garden moved all timing to a dedicated worker that sends updates back via postMessage, keeping the UI responsive and the schedule precise even when hidden.

## Architecture At A Glance
- Dedicated “timer worker” owns countdown/stopwatch state, ticks at sub‑second cadence, and posts heartbeat updates to the UI for rendering.  
- The UI only renders and plays sounds; it no longer measures time, which removes main‑thread throttle drift from the critical path.  
- Messages are minimal JSON payloads containing remainingTime, elapsedTime, and flags for running/paused, keeping communication fast and predictable across the worker boundary.

## Guarding Against Drift
Timers in the worker don’t simply increment a counter; each tick derives elapsed time from Date.now() deltas to correct micro‑drift between intervals, which is the standard approach when reliability matters under uncertain scheduling.  
Heartbeat messages every few seconds also provide a simple health signal so the UI can detect and recover if the worker is somehow torn down or the page lifecycle changes.

## Persistence, Recovery, and “Resume”
Flow Garden persists minimal timer metadata—startTime, duration, type, and pause state—in localStorage so a refresh or soft navigation can rehydrate and resubscribe without spawning a duplicate countdown [8][9].  
On mount, the UI asks the worker for the current state (or reconstructs it from storage) and reconnects listeners, which makes the “Resume” button instant and resilient to incidental reloads.

## Stable IDs Prevent Duplicate Timers
A subtle but crucial fix was moving from ephemeral IDs to deterministic ones (for example: `focus-<projectId>-persistent`), so revisiting the page reuses the same logical timer rather than creating a new one.  
This pattern aligns with “reconnect before recreate,” where the app first queries worker state for an ID and only starts a new timer if no active instance is found, avoiding ghost intervals and surprise pauses.

## Ops Note: Serving the Worker Correctly
Web Workers should be served with the correct content type and with cache rules that won’t strand clients on stale code, so the server sends application/javascript and no-cache headers specifically for the worker file.  
Static assets like CSS and app bundles can stay aggressively cached with long max‑age, but the worker is treated as “mutable infra,” ensuring hot fixes ship immediately without asking users to hard‑refresh.

## Alternatives Considered
Libraries such as worker‑timers provide drop‑in replacements for setInterval/setTimeout that schedule in a worker under the hood, and they’re a great choice when migrating incrementally or when app constraints prevent a custom worker.  
For Flow Garden, a bespoke worker gave full control over messages, heartbeats, and recovery behaviors, which simplified debugging and avoided framework coupling in the timing core.

## Lessons Learned
- If a timer must be trustworthy, measure time by difference of wall clock between ticks, not by counting intervals on the UI thread.  
- Prefer a dedicated Web Worker for long‑lived timers that must survive tab switches, and build a reconnection path before starting new work.  
- Treat the worker as a deployable artifact with explicit cache policy, and verify with DevTools that only one worker and one logical timer ID are alive during navigation.

## What’s Next
With timing now solid, Flow Garden can safely layer features like auto‑start breaks, richer animations, and granular analytics without risking countdown integrity across sessions.  
Future work includes adaptive tick rates and power‑aware behavior, ensuring the worker remains efficient while maintaining the app’s promise of **reliable** focus timing. 
