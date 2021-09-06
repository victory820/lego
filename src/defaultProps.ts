import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
  actionType: string;
  url: string;
  width: string;
  height: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string;
  opacity: number;
  position: string;
  top: string;
  right: string;
  left: string;
}

export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  // width: '300px',
  width: '100%',
  height: '',
  paddingTop: '0',
  paddingRight: '0',
  paddingBottom: '0',
  paddingLeft: '0',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
}

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

export const textDefaultProps: TextComponentProps = {
  // basic
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
}

export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const transformToComponentProps = <T extends {[key: string]: any}>(props: T) => {
  return mapValues(props, item => {
    return {
      type: item.constructor, // 获取到类型，如：number,string
      default: item
    }
  })
}
