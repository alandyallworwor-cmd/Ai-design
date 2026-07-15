import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useProgress } from './useProgress';

describe('useProgress', () => {
  it('starts with zero XP and no completed missions', () => {
    const { result } = renderHook(() => useProgress());
    expect(result.current.progress.xp).toBe(0);
    expect(result.current.progress.completed).toEqual({});
  });

  it('adds XP and records the result when a mission is completed', () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current.completeMission('plan', {
        correct: 3,
        total: 4,
        stars: 2,
      });
    });
    // 3 correct answers x 10 XP each.
    expect(result.current.progress.xp).toBe(30);
    expect(result.current.progress.completed.plan.stars).toBe(2);
  });

  it('saves progress to localStorage so it survives a refresh', () => {
    const first = renderHook(() => useProgress());
    act(() => {
      first.result.current.completeMission('plan', {
        correct: 4,
        total: 4,
        stars: 3,
      });
    });
    // A brand new hook instance should read the saved value back.
    const second = renderHook(() => useProgress());
    expect(second.result.current.progress.xp).toBe(40);
    expect(second.result.current.progress.completed.plan.stars).toBe(3);
  });

  it('keeps the best result when a mission is replayed', () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current.completeMission('plan', { correct: 4, total: 4, stars: 3 });
    });
    act(() => {
      // A worse replay should not lower the saved stars or remove XP.
      result.current.completeMission('plan', { correct: 1, total: 4, stars: 1 });
    });
    expect(result.current.progress.completed.plan.stars).toBe(3);
    expect(result.current.progress.xp).toBe(40);
  });

  it('clears everything when progress is reset', () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current.completeMission('plan', { correct: 4, total: 4, stars: 3 });
    });
    act(() => {
      result.current.resetProgress();
    });
    expect(result.current.progress.xp).toBe(0);
    expect(result.current.progress.completed).toEqual({});
  });
});
