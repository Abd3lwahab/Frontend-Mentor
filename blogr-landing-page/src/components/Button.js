import classNames from 'classnames'

const Button = ({ text, textColor, isCTA, isOutline, isWide }) => {
  const style = {
    color: textColor,
  }

  return (
    <button
      style={style}
      className={classNames({
        btn: true,
        'btn-cta': isCTA,
        'btn-outline': isOutline,
        'btn-wide': isWide,
      })}
    >
      {text}
    </button>
  )
}

export default Button
