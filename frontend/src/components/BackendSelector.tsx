import { backendLabels, type Backend } from '../config'

type BackendSelectorProps = {
  selected: Backend
  onChange: (backend: Backend) => void
}

function BackendSelector({ selected, onChange }: BackendSelectorProps) {
  return (
    <fieldset className="backend-selector">
      <legend>Calculation backend</legend>
      {(Object.keys(backendLabels) as Backend[]).map((backend) => (
        <label key={backend}>
          <input
            type="radio"
            name="backend"
            value={backend}
            checked={selected === backend}
            onChange={() => onChange(backend)}
          />
          <span>{backendLabels[backend]}</span>
        </label>
      ))}
    </fieldset>
  )
}

export default BackendSelector
