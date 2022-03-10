import { useState, useEffect } from 'react'

function buildThresholdList() {
  let thresholds = []
  let numSteps = 200

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

export function useIntersectionObserver(ref, { threshold } = {}) {
  const [entry, setEntry] = useState(null)

  // Listen for changes
  useEffect(() => {
    function onObservation([newEntry]) {
      setEntry(newEntry)
    }

    if (ref.current) {
      const observer = new IntersectionObserver(onObservation, {
        rootMargin: '0px 0px',
        threshold: buildThresholdList(),
      })

      observer.observe(ref.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [ref, threshold])

  return entry
}
