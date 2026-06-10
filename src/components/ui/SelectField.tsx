import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

interface SelectFieldProps {
  label: string
  name: string
  options: readonly string[]
  defaultValue?: string
}

export function SelectField({
  label,
  name,
  options,
  defaultValue,
}: SelectFieldProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue ?? options[0] ?? '')

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={rootRef} className="select-field">
      <label htmlFor={`${name}-trigger`} className="text-label text-foreground/55">
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <button
        id={`${name}-trigger`}
        type="button"
        className={cn(
          'input-field select-field__trigger font-body mt-2 text-sm',
          open && 'select-field__trigger--open',
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          size={16}
          className={cn(
            'shrink-0 text-foreground/50 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul id={listId} className="select-field__menu" role="listbox" aria-label={label}>
          {options.map((option) => {
            const selected = option === value

            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={cn(
                    'select-field__option',
                    selected && 'select-field__option--selected',
                  )}
                  onClick={() => {
                    setValue(option)
                    setOpen(false)
                  }}
                >
                  <span className="truncate">{option}</span>
                  {selected && <Check size={14} className="shrink-0 text-accent-orange" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
