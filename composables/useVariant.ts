import { computed, ref } from 'vue'

export type Variant = 'tech' | 'business' | 'modern'

export function useVariant(defaultVariant: Variant = 'tech') {
  const variant = ref<Variant>(defaultVariant)
  const isTech = computed(() => variant.value === 'tech')
  const isBusiness = computed(() => variant.value === 'business')
  const isModern = computed(() => variant.value === 'modern')

  return {
    variant,
    isTech,
    isBusiness,
    isModern,
  }
}
