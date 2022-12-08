import './src/styles/styles.css'

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === "undefined") {
      await import("intersection-observer")
    }
  }
