'use client';

import { useLayoutEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal], [data-reveal-group] > *';

export function MotionSystem() {
  useLayoutEffect(() => {
    if (typeof window.IntersectionObserver !== 'function') return;

    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const registered = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const register = (element: Element, order?: number) => {
      if (!(element instanceof HTMLElement) || registered.has(element)) return;

      const parentGroup = element.parentElement?.matches('[data-reveal-group]')
        ? element.parentElement
        : undefined;
      const siblingOrder = parentGroup ? Array.from(parentGroup.children).indexOf(element) : 0;
      registered.add(element);
      element.dataset.reveal = element.dataset.reveal || parentGroup?.dataset.revealGroup || 'up';
      element.style.setProperty('--reveal-order', String(Math.min(order ?? siblingOrder, 6)));

      if (reduceMotion.matches) {
        element.classList.add('is-visible');
        return;
      }

      observer.observe(element);
    };

    const registerWithin = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
        const variant = group.dataset.revealGroup || 'up';
        Array.from(group.children).forEach((child, index) => {
          if (child instanceof HTMLElement && !child.dataset.reveal) child.dataset.reveal = variant;
          register(child, index);
        });
      });
      scope.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => register(element));
    };

    root.classList.toggle('motion-reduced', reduceMotion.matches);
    root.classList.add('motion-ready');
    registerWithin(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(REVEAL_SELECTOR)) register(node);
          registerWithin(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      root.classList.toggle('motion-reduced', event.matches);
      if (event.matches) {
        document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
          element.classList.add('is-visible');
          observer.unobserve(element);
        });
      }
    };

    reduceMotion.addEventListener('change', onMotionPreferenceChange);

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      reduceMotion.removeEventListener('change', onMotionPreferenceChange);
      root.classList.remove('motion-ready', 'motion-reduced');
    };
  }, []);

  return null;
}
