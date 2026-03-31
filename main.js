import { createApp } from 'vue'
import Tres from '@tresjs/core'

const DEFAULT_ROUTE = '/'

const routeLoaders = {
  '/': () => import('./App.vue'),
  '/zertifizierungen': () => import('./ZertifizierungenBusinessPage.vue'),
  '/loesungen/cloud': () => import('./CloudSolutionsPage.vue'),
  '/cloud-hosting': () => import('./CloudHostingPage.vue'),
  '/managed-services': () => import('./ManagedServicesPage.vue'),
  '/han-cix': () => import('./HanCixPage.vue'),
  '/jobs': () => import('./JobsPage.vue'),
  '/rechenzentrum': () => import('./RechenzentrumPage.vue'),
  '/rechenzentrum/sicherheitstechnik': () => import('./SicherheitstechnikPage.vue'),
  '/colocation': () => import('./ColocationPage.vue'),
}

const normalizePath = (rawPath) => {
  if (!rawPath) return DEFAULT_ROUTE
  const pathWithoutQuery = rawPath.split('?')[0] || DEFAULT_ROUTE
  const trimmed = pathWithoutQuery.endsWith('/') && pathWithoutQuery.length > 1
    ? pathWithoutQuery.slice(0, -1)
    : pathWithoutQuery
  return (trimmed || DEFAULT_ROUTE).toLowerCase()
}

const getRequestedPath = () => {
  const hash = window.location.hash || ''
  const hashPath = hash.startsWith('#') ? hash.slice(1) : hash
  if (hashPath.startsWith('/')) return hashPath
  return window.location.pathname
}

const resolveRootComponent = async () => {
  const currentPath = normalizePath(getRequestedPath())
  const loadComponent = routeLoaders[currentPath] || routeLoaders[DEFAULT_ROUTE]
  try {
    const mod = await loadComponent()
    return mod.default
  } catch (error) {
    console.error(`Failed to load route component for "${currentPath}"`, error)
    const fallback = await routeLoaders[DEFAULT_ROUTE]()
    return fallback.default
  }
}

const bootstrap = async () => {
  const RootComponent = await resolveRootComponent()
  const app = createApp(RootComponent)
  app.use(Tres)
  app.mount('#app')
}

bootstrap()
