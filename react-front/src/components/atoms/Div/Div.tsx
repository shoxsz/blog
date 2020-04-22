import React, { MouseEvent, EventHandler, LegacyRef } from 'react'

export type DivProps = React.CSSProperties & {
  mt?: string | number
  mb?: string | number
  ml?: string | number
  mr?: string | number

  pt?: string | number
  pb?: string | number
  pl?: string | number
  pr?: string | number

  onMouseMove?: EventHandler<MouseEvent<HTMLDivElement>>
  onMouseLeave?: EventHandler<MouseEvent<HTMLDivElement>>
  onMouseEnter?: EventHandler<MouseEvent<HTMLDivElement>>
  onClick?: EventHandler<MouseEvent<HTMLDivElement>>

  className?: string

  ref?: LegacyRef<HTMLDivElement>
}

const Div : React.FunctionComponent<DivProps> = (props) => {
  return (
    <div
      ref={ props.ref }
      className={ props.className }
      style={
        {
          ...props,
          
          marginLeft: props.ml || props.margin,
          marginRight: props.mr || props.margin,
          marginTop: props.mt || props.margin,
          marginBottom: props.mb || props.margin,
          
          paddingLeft: props.pl || props.padding,
          paddingRight: props.pr || props.padding,
          paddingTop: props.pt || props.padding,
          paddingBottom: props.pb || props.padding,
        }
      }

      onMouseMove={ props.onMouseMove }
      onMouseLeave={ props.onMouseLeave }
      onMouseEnter={ props.onMouseEnter }

      onClick={ props.onClick }
    >
      { props.children }
    </div>
  )
}

export default Div