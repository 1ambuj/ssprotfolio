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
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-widest text-foreground/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-background px-4 py-3 text-ink placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  )
}
