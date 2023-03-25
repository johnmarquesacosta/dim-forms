

export default function Input(props: any) {
  return (
    <input
      type={props.type}
      {...props.register(props.name, { required: true })}
      style={{
        border: props.errors[props.name] ? '1px solid #ff4848 ' : '1px solid #ccc',
        color: props.errors[props.name] ? '#ff4848' : '#5b5b5b',
      }}
      placeholder={props.placeholder}
      className={props.className}
      defaultValue={props.type === 'number' ? 0 : ''}
    />
  )
}