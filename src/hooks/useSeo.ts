import { useEffect } from 'react'

interface SeoOptions { title: string; description: string; image?: string }

export function useSeo({ title, description, image }: SeoOptions) {
  useEffect(() => {
    document.title = `${title} | DẤU LẶNG Music Academy`
    const canonical = `${window.location.origin}${window.location.pathname}`
    const entries: Array<[string, string, string]> = [
      ['name', 'description', description], ['property', 'og:title', title],
      ['property', 'og:description', description], ['property', 'og:url', canonical],
      ['property', 'og:type', 'website'], ['property', 'og:image', image ?? 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=85'],
    ]
    entries.forEach(([attribute, key, content]) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!meta) { meta = document.createElement('meta'); meta.setAttribute(attribute, key); document.head.appendChild(meta) }
      meta.content = content
    })
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical
  }, [title, description, image])
}
