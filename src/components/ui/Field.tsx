interface FieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
}

export function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-label text-foreground/55">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field font-body mt-2 text-sm"
      />
    </div>
  )
}
