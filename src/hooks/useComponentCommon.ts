import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '@/defaultProps'

const useComponentCommon = (props: Readonly<Partial<TextComponentProps>>, picks: string[]) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    console.log('跳转', props.actionType)
    console.log('跳转', props.url)
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }

  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon