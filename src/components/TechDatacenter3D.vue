<template>
  <section id="career" class="section section--alt tech-3d">
    <header class="section__header">
      <h2 class="section__title">Rechenzentrum in 3D</h2>
      <p class="section__subtitle">
        Interaktives Modell als Tech-UI-Element
      </p>
    </header>

    <div class="tech-3d__stage">
      <figure v-if="isDesktop && leftGalleryItem" class="tech-3d__gallery tech-3d__gallery--left">
        <img
          :src="leftGalleryItem.src"
          :alt="leftGalleryItem.alt"
          loading="lazy"
          decoding="async"
        />
        <figcaption>{{ leftGalleryItem.caption }}</figcaption>
      </figure>

      <div class="tech-3d__canvas">
        <TresCanvas clear-color="#0ea2a4">
          <TresPerspectiveCamera
            :position="[6, 2, 8]"
            :fov="isMobile ? 55 : 45"
            :look-at="[0, 1.5, 0]"
          />

          <OrbitControls
            ref="orbitControlsRef"
            :autoRotate="true"
            :autoRotateSpeed="0.4"
            :enablePan="false"
            :enableZoom="false"
            :minPolarAngle="1.2"
            :maxPolarAngle="1.6"
            :minDistance="6"
             :maxDistance="11"
            @change="handleControlsChange"
          />

          <Suspense>
            <GLTFModel
              :path="datacenterModelPath"
               :scale="isMobile ? 0.5 : 0.68"
              :draco="true"
              :decoder-path="dracoDecoderPath"
            />
          </Suspense>

          <TresAmbientLight :intensity="0.85" />
          <TresDirectionalLight :position="[8, 10, 6]" :intensity="1.1" />
        </TresCanvas>
      </div>

      <figure v-if="isDesktop && rightGalleryItem" class="tech-3d__gallery tech-3d__gallery--right">
        <img
          :src="rightGalleryItem.src"
          :alt="rightGalleryItem.alt"
          loading="lazy"
          decoding="async"
        />
        <figcaption>{{ rightGalleryItem.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { GLTFModel, OrbitControls } from '@tresjs/cientos'

const datacenterModelPath = '/models/datacenter_ultra_white.glb'
const dracoDecoderPath = 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/'

type GalleryItem = {
  src: string
  alt: string
  caption: string
}

const galleryItems: GalleryItem[] = [
  {
    src: new URL('../../assets/bild_gallery/20-382x509.jpg', import.meta.url).href,
    alt: 'Drohnenansicht des Rechenzentrums',
    caption: 'Hauptgebäude · Außenansicht',
  },
  {
    src: new URL('../../assets/bild_gallery/Housing-Collocation-Inhalt-Leistungen3-382x229.jpg', import.meta.url)
      .href,
    alt: 'Housing- und Colocation-Fläche',
    caption: 'Colocation Floor',
  },
  {
    src: new URL('../../assets/bild_gallery/Photo-2021-03-24-09-26-14_5162-scaled-382x509.jpg', import.meta.url)
      .href,
    alt: 'Techniker im Serverraum',
    caption: 'Team vor den Racks',
  },
  {
    src: new URL('../../assets/bild_gallery/Rueckkuehler-Dach-1-e1657017121963-382x133.jpg', import.meta.url).href,
    alt: 'Rückkühler auf dem Dach',
    caption: 'Kühlung · Dachanlage',
  },
  {
    src: new URL('../../assets/bild_gallery/RZ-Inhalt-Qualitaetsmanagement-382x229.jpg', import.meta.url).href,
    alt: 'Qualitätsmanagement im Leitstand',
    caption: 'Control Room',
  },
  {
    src: new URL('../../assets/bild_gallery/Photo-2021-03-24-09-26-42_5165-scaled-382x287.jpg', import.meta.url).href,
    alt: 'Serverschrank mit Glasfront',
    caption: 'Rack 42U · Detail',
  },
]

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
const isDesktop = computed(() => width.value >= 1680)

const galleryIndex = ref(0)
const orbitControlsRef = ref<any>(null)
const leftGalleryItem = computed(() => galleryItems[galleryIndex.value % galleryItems.length] ?? null)
const rightGalleryItem = computed(() =>
  galleryItems[(galleryIndex.value + 1) % galleryItems.length] ?? null
)

const getOrbitControls = () => orbitControlsRef.value?.instance?.value ?? null

const updateGalleryFromControls = (controlsOverride?: any) => {
  if (!galleryItems.length) return
  const controls = controlsOverride ?? getOrbitControls()
  if (!controls) return

  const angle = controls.getAzimuthalAngle?.()
  if (typeof angle !== 'number') return

  const normalized = (angle + Math.PI) / (Math.PI * 2)
  const nextIndex = Math.floor(normalized * galleryItems.length) % galleryItems.length
  if (nextIndex !== galleryIndex.value) {
    galleryIndex.value = nextIndex
  }
}

const handleControlsChange = (controlsInstance?: any) => {
  updateGalleryFromControls(controlsInstance)
}

onMounted(() => {
  updateGalleryFromControls()
})
</script>

