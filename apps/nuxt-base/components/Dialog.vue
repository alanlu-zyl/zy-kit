<script setup lang="ts">
import type { DialogProps } from 'element-plus'
import { ElDialog } from 'element-plus'
import { getDefaultFromProps } from '@zy-kit/utils/obj'

export interface IProps extends DialogProps {
  header?: null | string | Component
  content?: null | string | Component
  footer?: null | string | Component
  visible?: boolean | Ref<boolean>
}
const props = withDefaults(defineProps<IProps>(), getDefaultFromProps(ElDialog.props, {}))

const emits = defineEmits<{
  // (event: 'update:visible', visible: boolean): void
  // 已關閉
  (event: 'closed'): void
  // 關閉
  (event: 'close'): void
  // 取消
  (event: 'cancel'): void
  // 確認
  (event: 'confirm', data: any): void
}>()

const localProps = computed(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { header, content, footer, visible, ...dialogProps } = props
  return {
    ...dialogProps,
    modelValue: unref(visible),
    onClose: handleClose,
    onClosed: handleClosed,
  }
})

function handleClose() {
  emits('close')
}

function handleClosed() {
  emits('closed')
}

function handleCancel() {
  emits('cancel')
}

const contentRef = ref<any>()

function handleConfirm() {
  const submit: () => Promise<any> = contentRef.value?.submit || (() => Promise.resolve(true))
  submit().then((data) => emits('confirm', data))
}
</script>

<template>
  <ElDialog v-bind="localProps">
    <template #header>
      <slot name="header">
        <template v-if="typeof header === 'string'">
          {{ header }}
        </template>
        <template v-else>
          <component :is="header"></component>
        </template>
      </slot>
    </template>
    <template #default>
      <slot>
        <template v-if="typeof content === 'string'">
          {{ content }}
        </template>
        <template v-else>
          <component :is="content" ref="contentRef" @confirm="handleConfirm" @cancel="handleCancel"></component>
        </template>
      </slot>
    </template>
    <template #footer>
      <slot name="footer">
        <template v-if="footer === undefined">
          <div class="inline-flex gap:1x">
            <button class="btn" @click="handleCancel">{{ $t('cancel') }}</button>
            <button class="btn btn-type--theme" @click="handleConfirm">{{ $t('confirm') }}</button>
          </div>
        </template>
        <template v-else-if="typeof footer === 'string'">
          {{ footer }}
        </template>
        <template v-else>
          <component :is="footer" @confirm="handleConfirm" @cancel="handleCancel"></component>
        </template>
      </slot>
    </template>
  </ElDialog>
</template>
