<script setup lang="ts">
import { nanoid } from 'nanoid'
import { normalizeOptions } from '@zy-kit/utils/obj'
import cv from 'class-variant'
import { toLine } from '@zy-kit/utils/mcss'

type OptionsProp = Simplify<Parameters<typeof normalizeOptions>[0]>

export interface IProps {
  tabs: OptionsProp
  modelValue?: string
  glider?: Partial<{
    intent: string
    width: string
    bg: string
  }>
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const inputProps = computed(() => {
  return {
    modelValue: unref(props.modelValue),
    tabs: normalizeOptions(props.tabs),
  }
})

const data = reactive({
  nanoid: nanoid(10),
  tabWidth: `${100 / inputProps.value.tabs.length}%`,
  idx: 0,
})

function onInput(e: Event, idx: number) {
  data.idx = idx
  const value = (e.target! as HTMLInputElement).value
  emits('update:modelValue', value)
}

const gliderCV = cv(
  '',
  {
    intent: {
      line: toLine({
        '': 'abs bottom:0 h:2 w:full',
        '>div': 'rel h:full ~transform|.2s|ease-out',
        '>div::before': 'left:0 bottom:0 content:"" block m:auto min-w:70 h:full bg:theme rounded',
      }),
    },
  },
  ({ intent }) => intent && `{w:${data.tabWidth};translateX(${data.idx * 100}%)}>div`,
  ({ width }) => width && `{w:${width}}>div::before`,
  ({ bg }) => bg && ` bg:${bg}`
)

const gliderValue = Object.assign(
  {
    intent: 'line',
    width: '100%',
    bg: 'G-20',
  },
  props.glider
)
</script>

<template>
  <div class="rel h:55 flex center-content user-select:none">
    <div class="flex jc:space-between w:full">
      <template v-for="({ value, label }, idx) in inputProps.tabs" :key="value">
        <label class="flex:1 t:center cursor:pointer" :class="`w:${data.tabWidth}`">
          <input class="hide" :name="data.nanoid" type="radio" :value="value" :checked="inputProps.modelValue === value" @input="onInput($event, idx)" />
          <span class="fg:G-50 text:ellipsis white-space:nowrap overflow:hidden ~color|.1s|ease-in :checked+{f:bold;fg:B-50}">{{ label }}</span>
        </label>
      </template>
    </div>
    <div :class="[gliderCV(gliderValue)]"><div></div></div>
  </div>
</template>
