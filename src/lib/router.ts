import { useEffect, useState } from 'react';
import { isServiceId, ServiceId } from './site';

// Routage par hash : chaque page possède une URL partageable (#/service/chef-a-domicile, #/maroc)
// et le bouton « Retour » du navigateur ou du téléphone ramène à la page précédente.
// Les ancres simples (#services, #contact…) affichent l'accueil puis défilent vers la section.

export type Route =
  | { name: 'home'; anchor: string | null }
  | { name: 'service'; id: ServiceId }
  | { name: 'maroc' };

const HOME_SCROLL_KEY = 'sps-home-scroll';

export const parseHash = (hash: string): Route => {
  const clean = hash.replace(/^#/, '');
  if (clean.startsWith('/service/')) {
    const id = clean.slice('/service/'.length);
    if (isServiceId(id)) return { name: 'service', id };
  }
  if (clean === '/maroc') return { name: 'maroc' };
  const anchor = clean.startsWith('/') ? clean.slice(1) : clean;
  return { name: 'home', anchor: anchor || null };
};

export const serviceHref = (id: ServiceId) => `#/service/${id}`;
export const MAROC_HREF = '#/maroc';
export const sectionHref = (id: string) => `#${id}`;

export const useRoute = (): Route => {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      const previous = parseHash(window.location.hash);
      setRoute((current) => {
        if (current.name === 'home' && previous.name !== 'home') {
          sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
        }
        return previous;
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Défilement après chaque changement de page
    const frame = requestAnimationFrame(() => {
      if (route.name === 'home') {
        if (route.anchor) {
          document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        const saved = sessionStorage.getItem(HOME_SCROLL_KEY);
        window.scrollTo({ top: saved ? Number(saved) : 0, behavior: 'auto' });
        sessionStorage.removeItem(HOME_SCROLL_KEY);
        return;
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
    return () => cancelAnimationFrame(frame);
  }, [route]);

  return route;
};
