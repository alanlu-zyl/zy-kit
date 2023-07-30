import type { FormKitContext, FormKitCounter, FormKitFrameworkContext } from '@formkit/core'

interface FormKitRefs {
  form: Ref<FormKitCounter | undefined>
  context: ComputedRef<FormKitContext['context']>
  store: ComputedRef<FormKitContext['store'] | undefined>
  state: ComputedRef<FormKitFrameworkContext['state'] | undefined>
  isValid: ComputedRef<boolean>
  isDirty: ComputedRef<boolean>
  isComplete: ComputedRef<boolean>
}

export function useFormKitRefs(): FormKitRefs {
  const form = ref<FormKitCounter>()

  const context = computed(() => form.value?.node.context)
  const store = computed(() => form.value?.node.store)

  const state = computed(() => context.value?.state)

  const isValid = computed(() => !!state.value?.valid)

  const isDirty = computed(() => !!state.value?.dirty)

  const isComplete = computed(() => !!state.value?.complete)

  return {
    form,
    context,
    store,
    state,
    isDirty,
    isValid,
    isComplete,
  }
}
