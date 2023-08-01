import type { FormKitContext, FormKitFrameworkContext } from '@formkit/core'

interface FormKitRefs {
  form: Ref<FormKitFrameworkContext | undefined>
  store: ComputedRef<FormKitContext['store'] | undefined>
  context: ComputedRef<FormKitContext['context']>
  state: ComputedRef<FormKitFrameworkContext['state'] | undefined>
  isValid: ComputedRef<boolean>
  isDirty: ComputedRef<boolean>
  isComplete: ComputedRef<boolean>
}

export function useFormKitRefs(): FormKitRefs {
  const form = ref<FormKitFrameworkContext>()

  const store = computed(() => form.value?.node.store)

  const context = computed(() => form.value?.node.context)
  const state = computed(() => context.value?.state)
  const isValid = computed(() => !!state.value?.valid)
  const isDirty = computed(() => !!state.value?.dirty)
  const isComplete = computed(() => !!state.value?.complete)

  return {
    form,
    store,
    context,
    state,
    isDirty,
    isValid,
    isComplete,
  }
}
